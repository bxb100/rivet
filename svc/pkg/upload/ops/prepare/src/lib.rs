use std::{collections::HashSet, time::Duration};

use futures_util::FutureExt;
use futures_util::{StreamExt, TryStreamExt};
use proto::backend::{self, pkg::*};
use rivet_operation::prelude::*;
use serde_json::json;

const CHUNK_SIZE: u64 = util::file_size::mebibytes(100);
const MAX_UPLOAD_SIZE: u64 = util::file_size::gigabytes(10);
const MAX_MULTIPART_UPLOAD_SIZE: u64 = util::file_size::gigabytes(100);

#[operation(name = "upload-prepare")]
async fn handle(
	ctx: OperationContext<upload::prepare::Request>,
) -> GlobalResult<upload::prepare::Response> {
	let crdb = ctx.crdb("db-upload").await?;

	let s3_client_external =
		s3_util::Client::from_env_opt(&ctx.bucket, s3_util::EndpointKind::External).await?;

	// Validate upload sizes
	let total_content_length = ctx
		.files
		.iter()
		.filter(|file| !file.multipart)
		.fold(0, |acc, x| acc + x.content_length);
	let total_multipart_content_length = ctx
		.files
		.iter()
		.filter(|file| file.multipart)
		.fold(0, |acc, x| acc + x.content_length);
	tracing::info!(len=%ctx.files.len(), %total_content_length, %total_multipart_content_length, "file info");
	internal_assert!(
		total_content_length < MAX_UPLOAD_SIZE,
		"upload size must be < 10 gb"
	);
	internal_assert!(
		total_content_length < MAX_MULTIPART_UPLOAD_SIZE,
		"multipart uploads must be < 100 gb"
	);

	let user_id = ctx.user_id.map(|x| x.as_uuid());

	// Check that there's no duplicate paths
	let mut registered_paths = HashSet::new();
	for file in &ctx.files {
		tracing::info!(?file, "signing url");

		internal_assert!(
			registered_paths.insert(file.path.clone()),
			"duplicate file path"
		);
	}

	// Prepare columns for files
	let upload_id = Uuid::new_v4();
	let upload_ids = ctx.files.iter().map(|_| upload_id).collect::<Vec<_>>();
	let paths = ctx
		.files
		.iter()
		.map(|x| x.path.as_str())
		.collect::<Vec<_>>();
	let mimes = ctx
		.files
		.iter()
		.map(|x| x.mime.as_deref())
		.collect::<Vec<_>>();
	let content_lengths = ctx
		.files
		.iter()
		.map(|x| x.content_length as i64)
		.collect::<Vec<_>>();
	let nsfw_score_thresholds = ctx
		.files
		.iter()
		.map(|x| x.nsfw_score_threshold)
		.collect::<Vec<_>>();

	// Insert in to database
	sqlx::query(indoc!(
		"
		WITH
			_insert_upload AS (
				INSERT INTO uploads (upload_id, create_ts, content_length, bucket, user_id)
				VALUES ($1, $2, $3, $4, $5)
				RETURNING 1
			),
			_insert_files AS (
				INSERT INTO upload_files (upload_id, path, mime, content_length, nsfw_score_threshold)
				SELECT $1, rows.*
				FROM unnest($6, $7, $8, $9) AS rows
				RETURNING 1
			)
		SELECT 1
		"
	))
	// Upload
	.bind(upload_id)
	.bind(ctx.ts())
	.bind(total_content_length as i64)
	.bind(&ctx.bucket)
	.bind(user_id)
	// Files
	.bind(paths)
	.bind(mimes)
	.bind(content_lengths)
	.bind(nsfw_score_thresholds)
	.execute(&crdb)
	.await?;

	// Create iterators to be joined later
	let presigned_requests_init = futures_util::stream::iter(ctx.files.iter().cloned())
		.map(move |file| {
			let s3_client = s3_client_external.clone();

			if file.multipart {
				handle_multipart_upload(s3_client, upload_id, file).boxed()
			} else {
				handle_upload(s3_client, upload_id, file).boxed()
			}
		})
		.buffer_unordered(16)
		.try_collect::<Vec<_>>()
		.await?;

	// Flatten iterators that were created earlier and execute
	let presigned_requests =
		futures_util::stream::iter(presigned_requests_init.into_iter().flatten())
			.buffer_unordered(16)
			.try_collect::<Vec<_>>()
			.await?;

	msg!([ctx] analytics::msg::event_create() {
		events: vec![
			analytics::msg::event_create::Event {
				name: "upload.prepare".into(),
				user_id: ctx.user_id,
				properties_json: Some(serde_json::to_string(&json!({
					"upload_id": upload_id,
					"bucket": ctx.bucket,
					"files": ctx.files.len(),
					"total_content_length": total_content_length,
					"total_multipart_content_length": total_multipart_content_length,
				}))?),
				..Default::default()
			}
		],
	})
	.await?;

	Ok(upload::prepare::Response {
		upload_id: Some(upload_id.into()),
		presigned_requests,
	})
}

async fn handle_upload(
	s3_client: s3_util::Client,
	upload_id: Uuid,
	file: backend::upload::PrepareFile,
) -> GlobalResult<
	Vec<
		std::pin::Pin<
			Box<
				dyn std::future::Future<
						Output = GlobalResult<backend::upload::PresignedUploadRequest>,
					> + Send,
			>,
		>,
	>,
> {
	Ok(vec![async move {
		// Sign an upload request
		let mut put_obj_builder = s3_client
			.put_object()
			.bucket(s3_client.bucket())
			.key(format!("{}/{}", upload_id, file.path))
			.content_length(file.content_length as i64);
		if let Some(mime) = &file.mime {
			put_obj_builder = put_obj_builder.content_type(mime.clone());
		}
		let presigned_upload_req = put_obj_builder
			.presigned(
				s3_util::aws_sdk_s3::presigning::config::PresigningConfig::builder()
					.expires_in(Duration::from_secs(60 * 60))
					.build()?,
			)
			.await?;

		GlobalResult::Ok(backend::upload::PresignedUploadRequest {
			path: file.path.clone(),
			url: presigned_upload_req.uri().to_string(),
			part_number: 0,
		})
	}
	.boxed()])
}

async fn handle_multipart_upload(
	s3_client: s3_util::Client,
	upload_id: Uuid,
	file: backend::upload::PrepareFile,
) -> GlobalResult<
	Vec<
		std::pin::Pin<
			Box<
				dyn std::future::Future<
						Output = GlobalResult<backend::upload::PresignedUploadRequest>,
					> + Send,
			>,
		>,
	>,
> {
	// NOTE: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html. See error
	// code `EntityTooSmall`
	assert_with!(
		file.content_length >= util::file_size::mebibytes(5),
		UPLOAD_INVALID,
		reason = "upload too small for multipart (< 5MiB)"
	);

	// Create multipart upload
	let mut multipart_builder = s3_client
		.create_multipart_upload()
		.bucket(s3_client.bucket())
		.key(format!("{}/{}", upload_id, file.path));
	if let Some(mime) = &file.mime {
		multipart_builder = multipart_builder.content_type(mime.clone());
	}

	let multipart = multipart_builder.send().await?;
	let multipart_upload_id = internal_unwrap_owned!(multipart.upload_id()).to_string();

	let part_count = util::div_up!(file.content_length, CHUNK_SIZE);
	internal_assert!(part_count <= 10000, "too many parts");

	Ok((1..=part_count)
		.map(|part_number| {
			let s3_client = s3_client.clone();
			let file = file.clone();
			let multipart_upload_id = multipart_upload_id.clone();

			async move {
				// Sign an upload request
				let upload_part_builder = s3_client
					.upload_part()
					.bucket(s3_client.bucket())
					.key(format!("{}/{}", upload_id, file.path))
					.content_length(
						(file.content_length - part_number * CHUNK_SIZE).min(CHUNK_SIZE) as i64,
					)
					.upload_id(multipart_upload_id)
					.part_number(part_number as i32);

				let presigned_upload_req = upload_part_builder
					.presigned(
						s3_util::aws_sdk_s3::presigning::config::PresigningConfig::builder()
							.expires_in(Duration::from_secs(60 * 60 * 6))
							.build()?,
					)
					.await?;

				GlobalResult::Ok(backend::upload::PresignedUploadRequest {
					path: file.path.clone(),
					url: presigned_upload_req.uri().to_string(),
					part_number: part_number as u32,
				})
			}
			.boxed()
		})
		.collect::<Vec<_>>())
}
