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
pub struct ActorCreateActorRequest {
	#[serde(rename = "build", skip_serializing_if = "Option::is_none")]
	pub build: Option<uuid::Uuid>,
	#[serde(
		rename = "buildTags",
		default,
		with = "::serde_with::rust::double_option",
		skip_serializing_if = "Option::is_none"
	)]
	pub build_tags: Option<Option<serde_json::Value>>,
	#[serde(rename = "lifecycle", skip_serializing_if = "Option::is_none")]
	pub lifecycle: Option<Box<crate::models::ActorLifecycle>>,
	#[serde(rename = "network", skip_serializing_if = "Option::is_none")]
	pub network: Option<Box<crate::models::ActorCreateActorNetworkRequest>>,
	#[serde(rename = "region", skip_serializing_if = "Option::is_none")]
	pub region: Option<String>,
	#[serde(rename = "resources")]
	pub resources: Box<crate::models::ActorResources>,
	#[serde(rename = "runtime")]
	pub runtime: Box<crate::models::ActorCreateActorRuntimeRequest>,
	#[serde(rename = "tags", deserialize_with = "Option::deserialize")]
	pub tags: Option<serde_json::Value>,
}

impl ActorCreateActorRequest {
	pub fn new(
		resources: crate::models::ActorResources,
		runtime: crate::models::ActorCreateActorRuntimeRequest,
		tags: Option<serde_json::Value>,
	) -> ActorCreateActorRequest {
		ActorCreateActorRequest {
			build: None,
			build_tags: None,
			lifecycle: None,
			network: None,
			region: None,
			resources: Box::new(resources),
			runtime: Box::new(runtime),
			tags,
		}
	}
}
