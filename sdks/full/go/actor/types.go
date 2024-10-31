// This file was auto-generated by Fern from our API Definition.

package actor

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	sdk "sdk"
	core "sdk/core"
)

type DestroyActorRequest struct {
	// The duration to wait for in milliseconds before killing the actor. This should be used to override the default kill timeout if a faster time is needed, say for ignoring a graceful shutdown.
	OverrideKillTimeout *int64 `json:"-"`
}

type GetActorsRequest struct {
	TagsJson         *string    `json:"-"`
	IncludeDestroyed *bool      `json:"-"`
	Cursor           *uuid.UUID `json:"-"`
}

type BuildCompression string

const (
	// None compression.
	BuildCompressionNone BuildCompression = "none"
	// LZ4 compression. Use the minimum compression level.
	BuildCompressionLz4 BuildCompression = "lz4"
)

func NewBuildCompressionFromString(s string) (BuildCompression, error) {
	switch s {
	case "none":
		return BuildCompressionNone, nil
	case "lz4":
		return BuildCompressionLz4, nil
	}
	var t BuildCompression
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (b BuildCompression) Ptr() *BuildCompression {
	return &b
}

type BuildKind string

const (
	// Docker image archive generated by `docker save`.
	BuildKindDockerImage BuildKind = "docker_image"
	// OCI-compliant bundle.
	BuildKindOciBundle BuildKind = "oci_bundle"
	// A JavaScript file.
	BuildKindJavascript BuildKind = "javascript"
)

func NewBuildKindFromString(s string) (BuildKind, error) {
	switch s {
	case "docker_image":
		return BuildKindDockerImage, nil
	case "oci_bundle":
		return BuildKindOciBundle, nil
	case "javascript":
		return BuildKindJavascript, nil
	}
	var t BuildKind
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (b BuildKind) Ptr() *BuildKind {
	return &b
}

type Actor struct {
	Id          uuid.UUID   `json:"id"`
	Environment uuid.UUID   `json:"environment"`
	Datacenter  uuid.UUID   `json:"datacenter"`
	Tags        interface{} `json:"tags,omitempty"`
	Runtime     *Runtime    `json:"runtime,omitempty"`
	Network     *Network    `json:"network,omitempty"`
	Resources   *Resources  `json:"resources,omitempty"`
	Lifecycle   *Lifecycle  `json:"lifecycle,omitempty"`
	CreatedAt   int64       `json:"created_at"`
	StartedAt   *int64      `json:"started_at,omitempty"`
	DestroyedAt *int64      `json:"destroyed_at,omitempty"`

	_rawJSON json.RawMessage
}

func (a *Actor) UnmarshalJSON(data []byte) error {
	type unmarshaler Actor
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*a = Actor(value)
	a._rawJSON = json.RawMessage(data)
	return nil
}

func (a *Actor) String() string {
	if len(a._rawJSON) > 0 {
		if value, err := core.StringifyJSON(a._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(a); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", a)
}

type Build struct {
	Id        uuid.UUID     `json:"id"`
	Name      string        `json:"name"`
	CreatedAt sdk.Timestamp `json:"created_at"`
	// Unsigned 64 bit integer.
	ContentLength int64 `json:"content_length"`
	// Tags of this build
	Tags map[string]string `json:"tags,omitempty"`

	_rawJSON json.RawMessage
}

func (b *Build) UnmarshalJSON(data []byte) error {
	type unmarshaler Build
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = Build(value)
	b._rawJSON = json.RawMessage(data)
	return nil
}

func (b *Build) String() string {
	if len(b._rawJSON) > 0 {
		if value, err := core.StringifyJSON(b._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type Datacenter struct {
	Id   uuid.UUID `json:"id"`
	Slug string    `json:"slug"`
	Name string    `json:"name"`

	_rawJSON json.RawMessage
}

func (d *Datacenter) UnmarshalJSON(data []byte) error {
	type unmarshaler Datacenter
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*d = Datacenter(value)
	d._rawJSON = json.RawMessage(data)
	return nil
}

func (d *Datacenter) String() string {
	if len(d._rawJSON) > 0 {
		if value, err := core.StringifyJSON(d._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
}

type GameGuardRouting struct {
	Authorization *PortAuthorization `json:"authorization,omitempty"`

	_rawJSON json.RawMessage
}

func (g *GameGuardRouting) UnmarshalJSON(data []byte) error {
	type unmarshaler GameGuardRouting
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*g = GameGuardRouting(value)
	g._rawJSON = json.RawMessage(data)
	return nil
}

func (g *GameGuardRouting) String() string {
	if len(g._rawJSON) > 0 {
		if value, err := core.StringifyJSON(g._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(g); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", g)
}

type HostRouting struct {
	_rawJSON json.RawMessage
}

func (h *HostRouting) UnmarshalJSON(data []byte) error {
	type unmarshaler HostRouting
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*h = HostRouting(value)
	h._rawJSON = json.RawMessage(data)
	return nil
}

func (h *HostRouting) String() string {
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

type Lifecycle struct {
	// The duration to wait for in milliseconds before killing the actor. This should be set to a safe default, and can be overridden during a DELETE request if needed.
	KillTimeout *int64 `json:"kill_timeout,omitempty"`

	_rawJSON json.RawMessage
}

func (l *Lifecycle) UnmarshalJSON(data []byte) error {
	type unmarshaler Lifecycle
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = Lifecycle(value)
	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *Lifecycle) String() string {
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

type Network struct {
	Mode  *NetworkMode     `json:"mode,omitempty"`
	Ports map[string]*Port `json:"ports,omitempty"`

	_rawJSON json.RawMessage
}

func (n *Network) UnmarshalJSON(data []byte) error {
	type unmarshaler Network
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = Network(value)
	n._rawJSON = json.RawMessage(data)
	return nil
}

func (n *Network) String() string {
	if len(n._rawJSON) > 0 {
		if value, err := core.StringifyJSON(n._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type NetworkMode string

const (
	NetworkModeBridge NetworkMode = "bridge"
	NetworkModeHost   NetworkMode = "host"
)

func NewNetworkModeFromString(s string) (NetworkMode, error) {
	switch s {
	case "bridge":
		return NetworkModeBridge, nil
	case "host":
		return NetworkModeHost, nil
	}
	var t NetworkMode
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (n NetworkMode) Ptr() *NetworkMode {
	return &n
}

type Port struct {
	Protocol       PortProtocol `json:"protocol,omitempty"`
	InternalPort   *int         `json:"internal_port,omitempty"`
	PublicHostname *string      `json:"public_hostname,omitempty"`
	PublicPort     *int         `json:"public_port,omitempty"`
	Routing        *PortRouting `json:"routing,omitempty"`

	_rawJSON json.RawMessage
}

func (p *Port) UnmarshalJSON(data []byte) error {
	type unmarshaler Port
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = Port(value)
	p._rawJSON = json.RawMessage(data)
	return nil
}

func (p *Port) String() string {
	if len(p._rawJSON) > 0 {
		if value, err := core.StringifyJSON(p._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type PortAuthorization struct {
	Bearer *string                 `json:"bearer,omitempty"`
	Query  *PortQueryAuthorization `json:"query,omitempty"`

	_rawJSON json.RawMessage
}

func (p *PortAuthorization) UnmarshalJSON(data []byte) error {
	type unmarshaler PortAuthorization
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = PortAuthorization(value)
	p._rawJSON = json.RawMessage(data)
	return nil
}

func (p *PortAuthorization) String() string {
	if len(p._rawJSON) > 0 {
		if value, err := core.StringifyJSON(p._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type PortProtocol string

const (
	PortProtocolHttp   PortProtocol = "http"
	PortProtocolHttps  PortProtocol = "https"
	PortProtocolTcp    PortProtocol = "tcp"
	PortProtocolTcpTls PortProtocol = "tcp_tls"
	PortProtocolUdp    PortProtocol = "udp"
)

func NewPortProtocolFromString(s string) (PortProtocol, error) {
	switch s {
	case "http":
		return PortProtocolHttp, nil
	case "https":
		return PortProtocolHttps, nil
	case "tcp":
		return PortProtocolTcp, nil
	case "tcp_tls":
		return PortProtocolTcpTls, nil
	case "udp":
		return PortProtocolUdp, nil
	}
	var t PortProtocol
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (p PortProtocol) Ptr() *PortProtocol {
	return &p
}

type PortQueryAuthorization struct {
	Key   string `json:"key"`
	Value string `json:"value"`

	_rawJSON json.RawMessage
}

func (p *PortQueryAuthorization) UnmarshalJSON(data []byte) error {
	type unmarshaler PortQueryAuthorization
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = PortQueryAuthorization(value)
	p._rawJSON = json.RawMessage(data)
	return nil
}

func (p *PortQueryAuthorization) String() string {
	if len(p._rawJSON) > 0 {
		if value, err := core.StringifyJSON(p._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type PortRouting struct {
	GameGuard *GameGuardRouting `json:"game_guard,omitempty"`
	Host      *HostRouting      `json:"host,omitempty"`

	_rawJSON json.RawMessage
}

func (p *PortRouting) UnmarshalJSON(data []byte) error {
	type unmarshaler PortRouting
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = PortRouting(value)
	p._rawJSON = json.RawMessage(data)
	return nil
}

func (p *PortRouting) String() string {
	if len(p._rawJSON) > 0 {
		if value, err := core.StringifyJSON(p._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type Resources struct {
	// The number of CPU cores in millicores, or 1/1000 of a core. For example,
	// 1/8 of a core would be 125 millicores, and 1 core would be 1000
	// millicores.
	Cpu int `json:"cpu"`
	// The amount of memory in megabytes
	Memory int `json:"memory"`

	_rawJSON json.RawMessage
}

func (r *Resources) UnmarshalJSON(data []byte) error {
	type unmarshaler Resources
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Resources(value)
	r._rawJSON = json.RawMessage(data)
	return nil
}

func (r *Resources) String() string {
	if len(r._rawJSON) > 0 {
		if value, err := core.StringifyJSON(r._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type Runtime struct {
	Build       uuid.UUID         `json:"build"`
	Arguments   []string          `json:"arguments,omitempty"`
	Environment map[string]string `json:"environment,omitempty"`

	_rawJSON json.RawMessage
}

func (r *Runtime) UnmarshalJSON(data []byte) error {
	type unmarshaler Runtime
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Runtime(value)
	r._rawJSON = json.RawMessage(data)
	return nil
}

func (r *Runtime) String() string {
	if len(r._rawJSON) > 0 {
		if value, err := core.StringifyJSON(r._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type CreateActorNetworkRequest struct {
	Mode  *NetworkMode                       `json:"mode,omitempty"`
	Ports map[string]*CreateActorPortRequest `json:"ports,omitempty"`

	_rawJSON json.RawMessage
}

func (c *CreateActorNetworkRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateActorNetworkRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateActorNetworkRequest(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateActorNetworkRequest) String() string {
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

type CreateActorPortRequest struct {
	Protocol     PortProtocol `json:"protocol,omitempty"`
	InternalPort *int         `json:"internal_port,omitempty"`
	Routing      *PortRouting `json:"routing,omitempty"`

	_rawJSON json.RawMessage
}

func (c *CreateActorPortRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateActorPortRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateActorPortRequest(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateActorPortRequest) String() string {
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

type CreateActorRuntimeRequest struct {
	Build       uuid.UUID         `json:"build"`
	Arguments   []string          `json:"arguments,omitempty"`
	Environment map[string]string `json:"environment,omitempty"`

	_rawJSON json.RawMessage
}

func (c *CreateActorRuntimeRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateActorRuntimeRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateActorRuntimeRequest(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateActorRuntimeRequest) String() string {
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
