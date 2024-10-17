// This file was auto-generated by Fern from our API Definition.

package identity

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	sdk "sdk"
	core "sdk/core"
)

// External links for an identity.
type ExternalLinks struct {
	// A link to this identity's profile page.
	Profile string `json:"profile"`
	// A link to the Rivet settings page.
	Settings *string `json:"settings,omitempty"`

	_rawJSON json.RawMessage
}

func (e *ExternalLinks) UnmarshalJSON(data []byte) error {
	type unmarshaler ExternalLinks
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = ExternalLinks(value)
	e._rawJSON = json.RawMessage(data)
	return nil
}

func (e *ExternalLinks) String() string {
	if len(e._rawJSON) > 0 {
		if value, err := core.StringifyJSON(e._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

// An identity handle.
type Handle struct {
	IdentityId    uuid.UUID         `json:"identity_id"`
	DisplayName   sdk.DisplayName   `json:"display_name"`
	AccountNumber sdk.AccountNumber `json:"account_number"`
	// The URL of this identity's avatar image.
	AvatarUrl string `json:"avatar_url"`
	// Whether or not this identity is registered with a linked account.
	IsRegistered bool           `json:"is_registered"`
	External     *ExternalLinks `json:"external,omitempty"`

	_rawJSON json.RawMessage
}

func (h *Handle) UnmarshalJSON(data []byte) error {
	type unmarshaler Handle
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*h = Handle(value)
	h._rawJSON = json.RawMessage(data)
	return nil
}

func (h *Handle) String() string {
	if len(h._rawJSON) > 0 {
		if value, err := core.StringifyJSON(h._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(h); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", h)
}
