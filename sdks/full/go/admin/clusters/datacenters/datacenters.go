// This file was auto-generated by Fern from our API Definition.

package datacenters

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	admin "sdk/admin"
	core "sdk/core"
)

type CreateRequest struct {
	DisplayName          string                    `json:"display_name"`
	NameId               string                    `json:"name_id"`
	Provider             admin.Provider            `json:"provider,omitempty"`
	ProviderDatacenterId string                    `json:"provider_datacenter_id"`
	BuildDeliveryMethod  admin.BuildDeliveryMethod `json:"build_delivery_method,omitempty"`

	_rawJSON json.RawMessage
}

func (c *CreateRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateRequest(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateRequest) String() string {
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

type CreateResponse struct {
	DatacenterId uuid.UUID `json:"datacenter_id"`

	_rawJSON json.RawMessage
}

func (c *CreateResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateResponse(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateResponse) String() string {
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

type ListResponse struct {
	Datacenters []*admin.Datacenter `json:"datacenters,omitempty"`

	_rawJSON json.RawMessage
}

func (l *ListResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListResponse(value)
	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListResponse) String() string {
	if len(l._rawJSON) > 0 {
		if value, err := core.StringifyJSON(l._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(l); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", l)
}

type UpdateRequest struct {
	PoolType     admin.PoolType    `json:"pool_type,omitempty"`
	Hardware     []*admin.Hardware `json:"hardware,omitempty"`
	DesiredCount *int              `json:"desired_count,omitempty"`
	MaxCount     *int              `json:"max_count,omitempty"`
	DrainTimeout *int64            `json:"drain_timeout,omitempty"`

	_rawJSON json.RawMessage
}

func (u *UpdateRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler UpdateRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UpdateRequest(value)
	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *UpdateRequest) String() string {
	if len(u._rawJSON) > 0 {
		if value, err := core.StringifyJSON(u._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}