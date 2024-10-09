use std::collections::HashMap;

use chirp_workflow::prelude::*;

#[derive(thiserror::Error, Debug)]
pub enum PegboardProtocolError {
	#[error("ser/de error: {0}")]
	Serde(#[from] serde_json::Error),
}

#[derive(Debug, Serialize, Deserialize)]
pub enum ToClient {
	Init { last_event_idx: u64, api_endpoint: String },
	Commands(Vec<Command>),
	FetchStateRequest {},
}

impl ToClient {
	pub fn serialize(&self, _protocol_version: u16) -> Result<Vec<u8>, PegboardProtocolError> {
		serde_json::to_vec(&self).map_err(PegboardProtocolError::Serde)
	}

	pub fn deserialize(buf: &[u8]) -> Result<Self, PegboardProtocolError> {
		serde_json::from_slice(buf).map_err(PegboardProtocolError::Serde)
	}
}

#[signal("pegboard_forward_to_server")]
pub enum ToServer {
	Init { last_command_idx: u64 },
	Events(Vec<Event>),
	FetchStateResponse {},
}

impl ToServer {
	pub fn serialize(&self) -> Result<Vec<u8>, PegboardProtocolError> {
		serde_json::to_vec(&self).map_err(PegboardProtocolError::Serde)
	}

	pub fn deserialize(_protocol_version: u16, buf: &[u8]) -> Result<Self, PegboardProtocolError> {
		serde_json::from_slice(buf).map_err(PegboardProtocolError::Serde)
	}
}

#[signal("pegboard_client_command")]
#[derive(Debug)]
pub enum Command {
	StartContainer {
		container_id: Uuid,
		config: ContainerConfig,
	},
	StopContainer {
		container_id: Uuid,
	}
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ContainerConfig {
	pub image: Image,
	pub image_artifact_url: String,
	pub container_runner_binary_url: String,
	pub root_user_enabled: bool,
	pub env: HashMap<String, String>,
	pub ports: HashMap<String, Port>,
	pub network_mode: NetworkMode,
	pub resources: Resources,
	pub stakeholder: Stakeholder,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Image {
	pub artifact_url: String,
	pub kind: ImageKind,
	pub compression: ImageCompression,
}

#[derive(Serialize, Deserialize, Hash, Debug, Clone, Copy, PartialEq, Eq)]
pub enum ImageKind {
	DockerImage,
	OciBundle,
}

#[derive(Serialize, Deserialize, Hash, Debug, Clone, Copy, PartialEq, Eq)]
pub enum ImageCompression {
	None,
	Lz4,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Port {
	// Null when using host networking since one is automatically assigned
	pub internal_port: Option<i32>,
	pub proxy_protocol: TransportProtocol,
}

#[derive(Serialize, Deserialize, Hash, Debug, Clone, Copy, PartialEq, Eq)]
pub enum TransportProtocol {
	Tcp,
	Udp,
}

impl std::fmt::Display for TransportProtocol {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		match self {
			TransportProtocol::Tcp => write!(f, "tcp"),
			TransportProtocol::Udp => write!(f, "udp"),
		}
	}
}

#[derive(Serialize, Deserialize, Hash, Debug, Clone, Copy, PartialEq, Eq)]
pub enum NetworkMode {
	Bridge,
	Host,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Resources {
	/// Millicore (1/1000 of a core).
	pub cpu: u64,
	// Bytes.
	pub memory: u64,
	// Bytes.
	pub memory_max: u64,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum Stakeholder {
	DynamicServer { server_id: Uuid },
}

impl Stakeholder {
	pub fn env(&self) -> Vec<(&str, String)> {
		match self {
			Stakeholder::DynamicServer { server_id } => {
				vec![
					("PEGBOARD_META_stakeholder", "dynamic_server".to_string()),
					("PEGBOARD_META_server_id", server_id.to_string()),
				]
			}
		}
	}
}

#[derive(Debug, Clone, Serialize, Deserialize, Hash)]
pub enum Event {
	ContainerStateUpdate {
		container_id: Uuid,
		state: ContainerState,
	},
}

#[derive(Debug, Clone, Serialize, Deserialize, Hash)]
pub enum ContainerState {
	Starting,
	Running { pid: usize },
	Stopping,
	Exited { exit_code: Option<i32> },
}