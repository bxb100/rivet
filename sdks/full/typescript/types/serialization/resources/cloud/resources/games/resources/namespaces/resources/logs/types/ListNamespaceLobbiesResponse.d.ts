/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";
export declare const ListNamespaceLobbiesResponse: core.serialization.ObjectSchema<serializers.cloud.games.namespaces.ListNamespaceLobbiesResponse.Raw, Rivet.cloud.games.namespaces.ListNamespaceLobbiesResponse>;
export declare namespace ListNamespaceLobbiesResponse {
    interface Raw {
        lobbies: serializers.cloud.LogsLobbySummary.Raw[];
    }
}