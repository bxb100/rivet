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
pub struct CloudGamesNamespacesToggleNamespaceDomainPublicAuthRequest {
	/// Whether or not to enable authentication based on domain.
	#[serde(rename = "enabled")]
	pub enabled: bool,
}

impl CloudGamesNamespacesToggleNamespaceDomainPublicAuthRequest {
	pub fn new(enabled: bool) -> CloudGamesNamespacesToggleNamespaceDomainPublicAuthRequest {
		CloudGamesNamespacesToggleNamespaceDomainPublicAuthRequest { enabled }
	}
}
