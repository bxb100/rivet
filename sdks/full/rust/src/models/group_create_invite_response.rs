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
pub struct GroupCreateInviteResponse {
	/// The code that will be passed to `rivet.api.group#ConsumeInvite` to join a group.
	#[serde(rename = "code")]
	pub code: String,
}

impl GroupCreateInviteResponse {
	pub fn new(code: String) -> GroupCreateInviteResponse {
		GroupCreateInviteResponse { code }
	}
}
