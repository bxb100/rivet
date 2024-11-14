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
pub struct CloudGamesNamespacesValidateGameNamespaceMatchmakerConfigRequest {
    /// Unsigned 32 bit integer.
    #[serde(rename = "lobby_count_max")]
    pub lobby_count_max: i32,
    /// Unsigned 32 bit integer.
    #[serde(rename = "max_players")]
    pub max_players: i32,
}

impl CloudGamesNamespacesValidateGameNamespaceMatchmakerConfigRequest {
    pub fn new(lobby_count_max: i32, max_players: i32) -> CloudGamesNamespacesValidateGameNamespaceMatchmakerConfigRequest {
        CloudGamesNamespacesValidateGameNamespaceMatchmakerConfigRequest {
            lobby_count_max,
            max_players,
        }
    }
}


