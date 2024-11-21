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
pub struct ActorResources {
    /// The number of CPU cores in millicores, or 1/1000 of a core. For example, 1/8 of a core would be 125 millicores, and 1 core would be 1000 millicores.
    #[serde(rename = "cpu")]
    pub cpu: i32,
    /// The amount of memory in megabytes
    #[serde(rename = "memory")]
    pub memory: i32,
}

impl ActorResources {
    pub fn new(cpu: i32, memory: i32) -> ActorResources {
        ActorResources {
            cpu,
            memory,
        }
    }
}


