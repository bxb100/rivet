use std::path::Path;

use futures_util::{future::BoxFuture, FutureExt};
use tokio::fs;
use toml_edit::value;

use crate::{
	context::{ProjectContext, ServiceContext},
	dep,
};

pub async fn generate_project(ctx: &ProjectContext) {
	// println!("\n> Generating project");

	// Generate Terraform variables
	if std::env::var("BOLT_IGNORE_TERRAFORM")
		.ok()
		.map_or(true, |x| x != "1")
	{
		dep::terraform::gen::project(ctx).await;
	} else {
		rivet_term::status::info("Skipping Terrafrom Init", "");
	}

	// Generate K8S configs
	dep::k8s::gen::project(ctx).await.unwrap();

	// Generate additional roots
	let additional_roots = &ctx.config_local().additional_roots;
	for (_, additional_root) in additional_roots {
		let path = fs::canonicalize(ctx.path().join(&additional_root.path))
			.await
			.expect("additional root path not found");

		generate_root(&path).await;
	}

	// Generate root
	generate_root(ctx.path()).await;

	// Generate regions
	generate_regions(ctx).await;
}

async fn generate_root(path: &Path) {
	// Generate Cargo files
	let cargo_toml_path = path.join("svc").join("Cargo.toml");
	let cargo_lock_path = path.join("svc").join("Cargo.lock");
	let api_path = path.join("svc").join("api");
	let pkg_path = path.join("svc").join("pkg");

	let mut workspace_members = Vec::new();

	// APIs
	{
		// Iterate through each pkg folder
		let mut api_dir = fs::read_dir(api_path).await.unwrap();
		while let Some(entry) = api_dir.next_entry().await.unwrap() {
			if !entry.metadata().await.unwrap().is_dir() {
				continue;
			}

			workspace_members.push(format!(
				r#""api/{entry}""#,
				entry = entry.file_name().into_string().unwrap()
			));

			// Remove services' Cargo.lock files in favor of the shared svc
			// Cargo.toml
			let _ = fs::remove_file(entry.path().join("Cargo.lock")).await;

			set_license(&entry.path().join("Cargo.toml")).await;
		}
	}

	// Packages
	{
		// Iterate through each pkg folder
		let mut pkg_dir = fs::read_dir(pkg_path).await.unwrap();
		while let Some(pkg) = pkg_dir.next_entry().await.unwrap() {
			let pkg_metadata = pkg.metadata().await.unwrap();
			if !pkg_metadata.is_dir() {
				continue;
			}

			let _ = fs::remove_file(pkg.path().join("Cargo.lock")).await;
			let _ = fs::remove_file(pkg.path().join("ops").join("Cargo.lock")).await;

			// Check worker
			let worker_path = pkg.path().join("worker");
			if fs::metadata(&worker_path).await.is_ok() {
				workspace_members.push(format!(
					r#""pkg/{pkg}/worker""#,
					pkg = pkg.file_name().into_string().unwrap(),
				));

				// Remove services' Cargo.lock files in favor of the shared svc
				// Cargo.toml
				let _ = fs::remove_file(worker_path.join("Cargo.lock")).await;

				set_license(&worker_path.join("Cargo.toml")).await;
			}

			// Iterate through `standalone` folder
			let standalone_path = pkg.path().join("standalone");
			if fs::metadata(&standalone_path).await.is_ok() {
				let mut dir = fs::read_dir(standalone_path).await.unwrap();
				while let Some(entry) = dir.next_entry().await.unwrap() {
					if entry.metadata().await.unwrap().is_dir() {
						workspace_members.push(format!(
							r#""pkg/{pkg}/standalone/{entry}""#,
							pkg = pkg.file_name().into_string().unwrap(),
							entry = entry.file_name().into_string().unwrap()
						));

						// Remove services' Cargo.lock files in favor of the shared svc
						// Cargo.toml
						let _ = fs::remove_file(entry.path().join("Cargo.lock")).await;

						set_license(&entry.path().join("Cargo.toml")).await;
					}
				}
			}
			// Iterate through `ops` folder
			let ops_path = pkg.path().join("ops");
			if fs::metadata(&ops_path).await.is_ok() {
				let mut dir = fs::read_dir(ops_path).await.unwrap();
				while let Some(entry) = dir.next_entry().await.unwrap() {
					if entry.metadata().await.unwrap().is_dir() {
						workspace_members.push(format!(
							r#""pkg/{pkg}/ops/{entry}""#,
							pkg = pkg.file_name().into_string().unwrap(),
							entry = entry.file_name().into_string().unwrap()
						));

						// Remove services' Cargo.lock files in favor of the shared svc
						// Cargo.toml
						let _ = fs::remove_file(entry.path().join("Cargo.lock")).await;

						set_license(&entry.path().join("Cargo.toml")).await;
					}
				}
			}
		}
	}

	// Generate a project manifest for all of the services. This will let us use a shared lockfile.
	let cargo_project_manifest = indoc::formatdoc!(
		r#"
			# This is generated by Bolt. Do not modify.

			[workspace]
			members = [{}]

			# Speed up compilation
			[profile.dev]
			overflow-checks = false
			debug = false
			lto = "off"

			# Speed up proc macros.
			#
			# https://endler.dev/2020/rust-compile-times/#avoid-procedural-macro-crates
			[profile.dev.build-override]
			opt-level = 3
			"#,
		workspace_members.join(", "),
	);
	fs::write(&cargo_toml_path, cargo_project_manifest)
		.await
		.unwrap();

	update_libs(&path.join("lib")).await;
}

fn update_libs<'a>(lib_path: &'a Path) -> BoxFuture<'a, ()> {
	async move {
		let mut lib_dir = fs::read_dir(lib_path).await.unwrap();
		while let Some(entry) = lib_dir.next_entry().await.unwrap() {
			if !entry.metadata().await.unwrap().is_dir() || entry.file_name() == "async-stripe" {
				continue;
			}

			let cargo_path = entry.path().join("Cargo.toml");
			if fs::metadata(&cargo_path).await.is_ok() {
				let content = fs::read_to_string(&cargo_path).await.unwrap();

				// Recurse
				if content.contains("[workspace]") {
					update_libs(&entry.path()).await;
				} else {
					set_license(&cargo_path).await;
				}
			}
		}
	}
	.boxed()
}

async fn set_license(path: &Path) {
	let toml = fs::read_to_string(path).await.unwrap();
	let mut doc = toml.parse::<toml_edit::Document>().unwrap();

	let mut array = toml_edit::Array::new();
	array.push("Rivet Gaming, LLC <developer@rivet.gg>");
	doc["package"]["authors"] = value(array);

	doc["package"]["license"] = value("Apache-2.0");

	fs::write(path, doc.to_string()).await.unwrap();
}

pub async fn generate_all_services(ctx: &ProjectContext) {
	// println!("\n> Generating all services");

	for svc_ctx in ctx.all_services().await {
		generate_service(&svc_ctx).await;
	}
}

pub async fn generate_service(_ctx: &ServiceContext) {
	// println!("  * Generating service {}", ctx.name());
}

async fn generate_regions(ctx: &ProjectContext) {
	let svc = ctx.service_with_name("region-config-get").await;
	let gen_path = svc.path().join("gen");
	let gen_config_path = gen_path.join("region_config.json");

	// Make gen dir
	fs::create_dir_all(gen_path).await.unwrap();

	// Write config
	let regions_json = serde_json::to_vec(&ctx.ns().regions).unwrap();
	fs::write(gen_config_path, &regions_json).await.unwrap();
}
