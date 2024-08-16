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
pub struct ServersServer {
    #[serde(rename = "connectable_at", skip_serializing_if = "Option::is_none")]
    pub connectable_at: Option<i64>,
    #[serde(rename = "created_at")]
    pub created_at: i64,
    #[serde(rename = "datacenter")]
    pub datacenter: uuid::Uuid,
    #[serde(rename = "destroyed_at", skip_serializing_if = "Option::is_none")]
    pub destroyed_at: Option<i64>,
    #[serde(rename = "environment")]
    pub environment: uuid::Uuid,
    #[serde(rename = "id")]
    pub id: uuid::Uuid,
    #[serde(rename = "lifecycle")]
    pub lifecycle: Box<crate::models::ServersLifecycle>,
    #[serde(rename = "network")]
    pub network: Box<crate::models::ServersNetwork>,
    #[serde(rename = "resources")]
    pub resources: Box<crate::models::ServersResources>,
    #[serde(rename = "runtime")]
    pub runtime: Box<crate::models::ServersRuntime>,
    #[serde(rename = "started_at", skip_serializing_if = "Option::is_none")]
    pub started_at: Option<i64>,
    #[serde(rename = "tags", deserialize_with = "Option::deserialize")]
    pub tags: Option<serde_json::Value>,
}

impl ServersServer {
    pub fn new(created_at: i64, datacenter: uuid::Uuid, environment: uuid::Uuid, id: uuid::Uuid, lifecycle: crate::models::ServersLifecycle, network: crate::models::ServersNetwork, resources: crate::models::ServersResources, runtime: crate::models::ServersRuntime, tags: Option<serde_json::Value>) -> ServersServer {
        ServersServer {
            connectable_at: None,
            created_at,
            datacenter,
            destroyed_at: None,
            environment,
            id,
            lifecycle: Box::new(lifecycle),
            network: Box::new(network),
            resources: Box::new(resources),
            runtime: Box::new(runtime),
            started_at: None,
            tags,
        }
    }
}


