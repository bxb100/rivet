// This file was auto-generated by Fern from our API Definition.

package datacenters

import (
	bytes "bytes"
	context "context"
	json "encoding/json"
	errors "errors"
	fmt "fmt"
	uuid "github.com/google/uuid"
	io "io"
	http "net/http"
	sdk "sdk"
	core "sdk/core"
	servers "sdk/servers"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header
}

func NewClient(opts ...core.ClientOption) *Client {
	options := core.NewClientOptions()
	for _, opt := range opts {
		opt(options)
	}
	return &Client{
		baseURL: options.BaseURL,
		caller:  core.NewCaller(options.HTTPClient),
		header:  options.ToHeader(),
	}
}

func (c *Client) ListDatacenters(ctx context.Context, gameId uuid.UUID, environmentId uuid.UUID) (*servers.ListDatacentersResponse, error) {
	baseURL := "https://api.rivet.gg"
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	endpointURL := fmt.Sprintf(baseURL+"/"+"games/%v/environments/%v/datacenters", gameId, environmentId)

	errorDecoder := func(statusCode int, body io.Reader) error {
		raw, err := io.ReadAll(body)
		if err != nil {
			return err
		}
		apiError := core.NewAPIError(statusCode, errors.New(string(raw)))
		decoder := json.NewDecoder(bytes.NewReader(raw))
		switch statusCode {
		case 500:
			value := new(sdk.InternalError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		case 429:
			value := new(sdk.RateLimitError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		case 403:
			value := new(sdk.ForbiddenError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		case 408:
			value := new(sdk.UnauthorizedError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		case 404:
			value := new(sdk.NotFoundError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		case 400:
			value := new(sdk.BadRequestError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		}
		return apiError
	}

	var response *servers.ListDatacentersResponse
	if err := c.caller.Call(
		ctx,
		&core.CallParams{
			URL:          endpointURL,
			Method:       http.MethodGet,
			Headers:      c.header,
			Response:     &response,
			ErrorDecoder: errorDecoder,
		},
	); err != nil {
		return nil, err
	}
	return response, nil
}
