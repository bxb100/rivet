/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as RivetClient from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Logs {
    interface Options {
        environment?: core.Supplier<environments.RivetClientEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Logs {
    constructor(protected readonly _options: Logs.Options) {}

    /**
     * Returns the logs for a given actor.
     *
     * @param {string} actor
     * @param {RivetClient.actor.GetActorLogsRequestQuery} request
     * @param {Logs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RivetClient.InternalError}
     * @throws {@link RivetClient.RateLimitError}
     * @throws {@link RivetClient.ForbiddenError}
     * @throws {@link RivetClient.UnauthorizedError}
     * @throws {@link RivetClient.NotFoundError}
     * @throws {@link RivetClient.BadRequestError}
     *
     * @example
     *     await client.actor.logs.get("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         project: "string",
     *         environment: "string",
     *         stream: "std_out",
     *         watchIndex: "string"
     *     })
     */
    public async get(
        actor: string,
        request: RivetClient.actor.GetActorLogsRequestQuery,
        requestOptions?: Logs.RequestOptions
    ): Promise<RivetClient.actor.GetActorLogsResponse> {
        const { project, environment, stream, watchIndex } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (project != null) {
            _queryParams["project"] = project;
        }

        if (environment != null) {
            _queryParams["environment"] = environment;
        }

        _queryParams["stream"] = stream;
        if (watchIndex != null) {
            _queryParams["watch_index"] = watchIndex;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RivetClientEnvironment.Production,
                `/actors/${encodeURIComponent(actor)}/logs`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 180000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.actor.GetActorLogsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new RivetClient.InternalError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new RivetClient.RateLimitError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new RivetClient.ForbiddenError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new RivetClient.UnauthorizedError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new RivetClient.NotFoundError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new RivetClient.BadRequestError(
                        serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RivetClientError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetClientError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetClientTimeoutError();
            case "unknown":
                throw new errors.RivetClientError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}