// This file was auto-generated by Fern from our API Definition.

package matchmaker

import (
	json "encoding/json"
	fmt "fmt"
	core "sdk/core"
)

type ListRegionsResponse struct {
	Regions []*RegionInfo `json:"regions,omitempty"`

	_rawJSON json.RawMessage
}

func (l *ListRegionsResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListRegionsResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListRegionsResponse(value)
	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListRegionsResponse) String() string {
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
