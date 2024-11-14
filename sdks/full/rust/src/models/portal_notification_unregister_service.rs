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
pub enum PortalNotificationUnregisterService {
    #[serde(rename = "firebase")]
    Firebase,

}

impl ToString for PortalNotificationUnregisterService {
    fn to_string(&self) -> String {
        match self {
            Self::Firebase => String::from("firebase"),
        }
    }
}

impl Default for PortalNotificationUnregisterService {
    fn default() -> PortalNotificationUnregisterService {
        Self::Firebase
    }
}




