// This file was auto-generated by Fern from our API Definition.

package client

import (
	http "net/http"
	core "sdk/core"
	matchmakerclient "sdk/matchmaker/client"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	Matchmaker *matchmakerclient.Client
}

func NewClient(opts ...core.ClientOption) *Client {
	options := core.NewClientOptions()
	for _, opt := range opts {
		opt(options)
	}
	return &Client{
		baseURL:    options.BaseURL,
		caller:     core.NewCaller(options.HTTPClient),
		header:     options.ToHeader(),
		Matchmaker: matchmakerclient.NewClient(opts...),
	}
}
