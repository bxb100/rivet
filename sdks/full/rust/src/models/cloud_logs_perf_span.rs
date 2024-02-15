/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */

/// CloudLogsPerfSpan : A performance span.



#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CloudLogsPerfSpan {
    /// RFC3339 timestamp.
    #[serde(rename = "finish_ts", skip_serializing_if = "Option::is_none")]
    pub finish_ts: Option<String>,
    /// The label given to this performance span.
    #[serde(rename = "label")]
    pub label: String,
    #[serde(rename = "req_id", skip_serializing_if = "Option::is_none")]
    pub req_id: Option<uuid::Uuid>,
    /// RFC3339 timestamp.
    #[serde(rename = "start_ts")]
    pub start_ts: String,
}

impl CloudLogsPerfSpan {
    /// A performance span.
    pub fn new(label: String, start_ts: String) -> CloudLogsPerfSpan {
        CloudLogsPerfSpan {
            finish_ts: None,
            label,
            req_id: None,
            start_ts,
        }
    }
}

