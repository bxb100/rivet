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
pub struct CloudInspectResponse {
    #[serde(rename = "agent")]
    pub agent: Box<crate::models::CloudAuthAgent>,
}

impl CloudInspectResponse {
    pub fn new(agent: crate::models::CloudAuthAgent) -> CloudInspectResponse {
        CloudInspectResponse {
            agent: Box::new(agent),
        }
    }
}


