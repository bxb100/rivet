// TODO:

// #[cfg(test)]
// mod tests {
// 	use std::{
// 		collections::HashMap,
// 		net::SocketAddr,
// 		os::fd::AsRawFd,
// 		path::{Path, PathBuf},
// 		result::Result::{Err, Ok},
// 		sync::Arc,
// 		thread::JoinHandle,
// 		time::Duration,
// 	};

// 	use anyhow::*;
// 	use deno_core::JsRuntime;
// 	use deno_runtime::worker::MainWorkerTerminateHandle;
// 	use foundationdb as fdb;
// 	use futures_util::{stream::SplitStream, SinkExt, StreamExt};
// 	use pegboard::protocol;
// 	use pegboard_config::isolate_runner as config;
// 	use tokio::{
// 		fs,
// 		net::TcpStream,
// 		sync::{mpsc, RwLock},
// 	};
// 	use tokio_tungstenite::{tungstenite::protocol::Message, MaybeTlsStream, WebSocketStream};
// 	use tracing_subscriber::prelude::*;
// 	use uuid::Uuid;

// 	use super::run_inner;
// 	use crate::utils;

// 	const THREAD_STATUS_POLL_INTERVAL: Duration = Duration::from_millis(500);

// 	#[tokio::test]
// 	async fn test_isolate() -> Result<()> {
// 		tracing_subscriber::registry()
// 			.with(
// 				tracing_logfmt::builder()
// 					.with_ansi_color(true)
// 					.layer()
// 					.with_filter(tracing_subscriber::filter::LevelFilter::INFO),
// 			)
// 			.init();

// 		let test_dir = Path::new("/tmp/pegboard-isolate-v8-runner-test/");
// 		let actors_path = test_dir.join("actors");
// 		let actor_id = Uuid::nil();

// 		let config = config::Config {
// 			actors_path: Path::new("").to_path_buf(),
// 			fdb_cluster_path: test_dir.join("fdb.cluster"),
// 			runner_addr: SocketAddr::from(([0, 0, 0, 0], 0)),
// 		};

// 		deno_core::v8_set_flags(vec![
// 			// Binary name
// 			"UNUSED_BUT_NECESSARY_ARG0".into(),
// 			// Disable eval
// 			"--disallow-code-generation-from-strings".into(),
// 		]);

// 		// Start FDB network thread
// 		let _network = unsafe { fdb::boot() };
// 		tokio::spawn(utils::fdb_health_check(config.clone()));

// 		// For receiving the terminate handle
// 		let (terminate_tx, _terminate_rx) =
// 			tokio::sync::mpsc::channel::<MainWorkerTerminateHandle>(1);

// 		let actor_config = config::actor::Config {
// 			resources: config::actor::Resources {
// 				memory: 26843545600,
// 				memory_max: 26843545600,
// 			},
// 			ports: Default::default(),
// 			env: Default::default(),
// 			owner: protocol::ActorOwner::DynamicServer {
// 				server_id: actor_id,
// 			},
// 			vector_socket_addr: Default::default(),
// 		};

// 		run_inner(
// 			config,
// 			actors_path.join(actor_id.to_string()).to_path_buf(),
// 			actor_id,
// 			terminate_tx,
// 			None,
// 			actor_config,
// 		)
// 		.await?;

// 		Ok(())
// 	}
// }
