/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

///
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum ServersNetworkMode {
	#[serde(rename = "bridge")]
	Bridge,
	#[serde(rename = "host")]
	Host,
}

impl ToString for ServersNetworkMode {
	fn to_string(&self) -> String {
		match self {
			Self::Bridge => String::from("bridge"),
			Self::Host => String::from("host"),
		}
	}
}

impl Default for ServersNetworkMode {
	fn default() -> ServersNetworkMode {
		Self::Bridge
	}
}
