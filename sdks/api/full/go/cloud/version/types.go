// This file was auto-generated by Fern from our API Definition.

package version

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	sdk "sdk"
	cdn "sdk/cloud/version/cdn"
	engine "sdk/cloud/version/engine"
	identity "sdk/cloud/version/identity"
	kv "sdk/cloud/version/kv"
	matchmaker "sdk/cloud/version/matchmaker"
	core "sdk/core"
)

// Cloud configuration for a given version.
type Config struct {
	Scripts    map[string]string  `json:"scripts,omitempty"`
	Engine     *engine.Config     `json:"engine,omitempty"`
	Cdn        *cdn.Config        `json:"cdn,omitempty"`
	Matchmaker *matchmaker.Config `json:"matchmaker,omitempty"`
	Kv         *kv.Config         `json:"kv,omitempty"`
	Identity   *identity.Config   `json:"identity,omitempty"`

	_rawJSON json.RawMessage
}

func (c *Config) UnmarshalJSON(data []byte) error {
	type unmarshaler Config
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = Config(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *Config) String() string {
	if len(c._rawJSON) > 0 {
		if value, err := core.StringifyJSON(c._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

// A full version.
type Full struct {
	VersionId   uuid.UUID       `json:"version_id"`
	CreateTs    sdk.Timestamp   `json:"create_ts"`
	DisplayName sdk.DisplayName `json:"display_name"`
	Config      *Config         `json:"config,omitempty"`

	_rawJSON json.RawMessage
}

func (f *Full) UnmarshalJSON(data []byte) error {
	type unmarshaler Full
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = Full(value)
	f._rawJSON = json.RawMessage(data)
	return nil
}

func (f *Full) String() string {
	if len(f._rawJSON) > 0 {
		if value, err := core.StringifyJSON(f._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}

// A version summary.
type Summary struct {
	VersionId   uuid.UUID       `json:"version_id"`
	CreateTs    sdk.Timestamp   `json:"create_ts"`
	DisplayName sdk.DisplayName `json:"display_name"`

	_rawJSON json.RawMessage
}

func (s *Summary) UnmarshalJSON(data []byte) error {
	type unmarshaler Summary
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = Summary(value)
	s._rawJSON = json.RawMessage(data)
	return nil
}

func (s *Summary) String() string {
	if len(s._rawJSON) > 0 {
		if value, err := core.StringifyJSON(s._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}