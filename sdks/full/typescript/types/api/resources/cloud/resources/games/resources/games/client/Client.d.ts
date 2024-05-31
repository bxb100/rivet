/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as Rivet from "../../../../../../..";
export declare namespace Games {
    interface Options {
        environment?: core.Supplier<environments.RivetEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class Games {
    protected readonly _options: Games.Options;
    constructor(_options?: Games.Options);
    /**
     * Returns a list of games in which the current identity is a group member of its development team.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    getGames(request?: Rivet.cloud.games.GetGamesRequest, requestOptions?: Games.RequestOptions): Promise<Rivet.cloud.games.GetGamesResponse>;
    /**
     * Creates a new game.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    createGame(request: Rivet.cloud.games.CreateGameRequest, requestOptions?: Games.RequestOptions): Promise<Rivet.cloud.games.CreateGameResponse>;
    /**
     * Validates information used to create a new game.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    validateGame(request: Rivet.cloud.games.ValidateGameRequest, requestOptions?: Games.RequestOptions): Promise<Rivet.cloud.games.ValidateGameResponse>;
    /**
     * Returns a game by its game id.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    getGameById(gameId: string, request?: Rivet.cloud.games.GetGameByIdRequest, requestOptions?: Games.RequestOptions): Promise<Rivet.cloud.games.GetGameByIdResponse>;
    /**
     * Prepares a game banner image upload.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    gameBannerUploadPrepare(gameId: string, request: Rivet.cloud.games.GameBannerUploadPrepareRequest, requestOptions?: Games.RequestOptions): Promise<Rivet.cloud.games.GameBannerUploadPrepareResponse>;
    /**
     * Completes an game banner image upload. Must be called after the file upload process completes.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    gameBannerUploadComplete(gameId: string, uploadId: string, requestOptions?: Games.RequestOptions): Promise<void>;
    /**
     * Prepares a game logo image upload.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    gameLogoUploadPrepare(gameId: string, request: Rivet.cloud.games.GameLogoUploadPrepareRequest, requestOptions?: Games.RequestOptions): Promise<Rivet.cloud.games.GameLogoUploadPrepareResponse>;
    /**
     * Completes a game logo image upload. Must be called after the file upload process completes.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    gameLogoUploadComplete(gameId: string, uploadId: string, requestOptions?: Games.RequestOptions): Promise<void>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}