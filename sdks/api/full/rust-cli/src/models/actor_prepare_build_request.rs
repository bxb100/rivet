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
pub struct ActorPrepareBuildRequest {
    #[serde(rename = "compression", skip_serializing_if = "Option::is_none")]
    pub compression: Option<crate::models::ActorBuildCompression>,
    #[serde(rename = "image_file")]
    pub image_file: Box<crate::models::UploadPrepareFile>,
    /// A tag given to the project build.
    #[serde(rename = "image_tag", skip_serializing_if = "Option::is_none")]
    pub image_tag: Option<String>,
    #[serde(rename = "kind", skip_serializing_if = "Option::is_none")]
    pub kind: Option<crate::models::ActorBuildKind>,
    #[serde(rename = "name")]
    pub name: String,
}

impl ActorPrepareBuildRequest {
    pub fn new(image_file: crate::models::UploadPrepareFile, name: String) -> ActorPrepareBuildRequest {
        ActorPrepareBuildRequest {
            compression: None,
            image_file: Box::new(image_file),
            image_tag: None,
            kind: None,
            name,
        }
    }
}

