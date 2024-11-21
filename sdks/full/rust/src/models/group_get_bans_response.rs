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
pub struct GroupGetBansResponse {
    /// The pagination anchor.
    #[serde(rename = "anchor", skip_serializing_if = "Option::is_none")]
    pub anchor: Option<String>,
    /// A list of banned group members.
    #[serde(rename = "banned_identities")]
    pub banned_identities: Vec<crate::models::GroupBannedIdentity>,
    #[serde(rename = "watch")]
    pub watch: Box<crate::models::WatchResponse>,
}

impl GroupGetBansResponse {
    pub fn new(banned_identities: Vec<crate::models::GroupBannedIdentity>, watch: crate::models::WatchResponse) -> GroupGetBansResponse {
        GroupGetBansResponse {
            anchor: None,
            banned_identities,
            watch: Box::new(watch),
        }
    }
}


