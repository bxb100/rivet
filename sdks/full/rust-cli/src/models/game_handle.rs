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
pub struct GameHandle {
    /// The URL of this game's banner image.
    #[serde(rename = "banner_url", skip_serializing_if = "Option::is_none")]
    pub banner_url: Option<String>,
    /// Represent a resource's readable display name.
    #[serde(rename = "display_name")]
    pub display_name: String,
    #[serde(rename = "game_id")]
    pub game_id: uuid::Uuid,
    /// The URL of this game's logo image.
    #[serde(rename = "logo_url", skip_serializing_if = "Option::is_none")]
    pub logo_url: Option<String>,
    /// A human readable short identifier used to references resources. Different than a `uuid` because this is intended to be human readable. Different than `DisplayName` because this should not include special characters and be short.
    #[serde(rename = "name_id")]
    pub name_id: String,
}

impl GameHandle {
    pub fn new(display_name: String, game_id: uuid::Uuid, name_id: String) -> GameHandle {
        GameHandle {
            banner_url: None,
            display_name,
            game_id,
            logo_url: None,
            name_id,
        }
    }
}


