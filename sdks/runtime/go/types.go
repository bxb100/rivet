// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "sdk/core"
)

// Represent a resource's readable display name.
type DisplayName = string

type ErrorBody struct {
	Code          string         `json:"code"`
	Message       string         `json:"message"`
	RayId         string         `json:"ray_id"`
	Documentation *string        `json:"documentation,omitempty"`
	Metadata      *ErrorMetadata `json:"metadata,omitempty"`

	_rawJSON json.RawMessage
}

func (e *ErrorBody) UnmarshalJSON(data []byte) error {
	type unmarshaler ErrorBody
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = ErrorBody(value)
	e._rawJSON = json.RawMessage(data)
	return nil
}

func (e *ErrorBody) String() string {
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

// Unstructured metadata relating to an error. Must be manually parsed.
type ErrorMetadata = interface{}

// A human readable short identifier used to references resources. Different than a `uuid` because this is intended to be human readable. Different than `DisplayName` because this should not include special characters and be short.
type Identifier = string

// Documentation at https://jwt.io/
type Jwt = string
