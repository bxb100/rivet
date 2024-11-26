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
pub struct CloudGamesCreateCloudTokenResponse {
	/// A JSON Web Token. Slightly modified to include a description prefix and use Protobufs of JSON.
	#[serde(rename = "token")]
	pub token: String,
}

impl CloudGamesCreateCloudTokenResponse {
	pub fn new(token: String) -> CloudGamesCreateCloudTokenResponse {
		CloudGamesCreateCloudTokenResponse { token }
	}
}