/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { LogsLobbySummary } from "../../../../../../common/types/LogsLobbySummary";
export declare const ListNamespaceLobbiesResponse: core.serialization.ObjectSchema<serializers.cloud.games.namespaces.ListNamespaceLobbiesResponse.Raw, Rivet.cloud.games.namespaces.ListNamespaceLobbiesResponse>;
export declare namespace ListNamespaceLobbiesResponse {
    interface Raw {
        lobbies: LogsLobbySummary.Raw[];
    }
}
