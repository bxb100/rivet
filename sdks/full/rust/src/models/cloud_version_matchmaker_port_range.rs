/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

/// CloudVersionMatchmakerPortRange : Range of ports that can be connected to. If configured, `network_mode` must equal `host`. Port ranges may overlap between containers, it is the responsibility of the developer to ensure ports are available before using. Read more about host networking [here](https://rivet.gg/docs/dynamic-servers/concepts/host-bridge-networking). Only available on Rivet Open Source & Enterprise.  ### Related  - cloud.version.matchmaker.PortProtocol - cloud.version.matchmaker.ProxyKind

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CloudVersionMatchmakerPortRange {
	/// Unsigned 32 bit integer.
	#[serde(rename = "max")]
	pub max: i32,
	/// Unsigned 32 bit integer.
	#[serde(rename = "min")]
	pub min: i32,
}

impl CloudVersionMatchmakerPortRange {
	/// Range of ports that can be connected to. If configured, `network_mode` must equal `host`. Port ranges may overlap between containers, it is the responsibility of the developer to ensure ports are available before using. Read more about host networking [here](https://rivet.gg/docs/dynamic-servers/concepts/host-bridge-networking). Only available on Rivet Open Source & Enterprise.  ### Related  - cloud.version.matchmaker.PortProtocol - cloud.version.matchmaker.ProxyKind
	pub fn new(max: i32, min: i32) -> CloudVersionMatchmakerPortRange {
		CloudVersionMatchmakerPortRange { max, min }
	}
}
