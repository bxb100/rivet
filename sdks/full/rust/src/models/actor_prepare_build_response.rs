/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct ActorPrepareBuildResponse {
	#[serde(rename = "build")]
	pub build: uuid::Uuid,
	#[serde(
		rename = "image_presigned_request",
		skip_serializing_if = "Option::is_none"
	)]
	pub image_presigned_request: Option<Box<crate::models::UploadPresignedRequest>>,
	#[serde(
		rename = "image_presigned_requests",
		skip_serializing_if = "Option::is_none"
	)]
	pub image_presigned_requests: Option<Vec<crate::models::UploadPresignedRequest>>,
}

impl ActorPrepareBuildResponse {
	pub fn new(build: uuid::Uuid) -> ActorPrepareBuildResponse {
		ActorPrepareBuildResponse {
			build,
			image_presigned_request: None,
			image_presigned_requests: None,
		}
	}
}
