/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { matchmaker } from "../../../../index";
export declare const CreateLobbyResponse: core.serialization.ObjectSchema<serializers.matchmaker.CreateLobbyResponse.Raw, Rivet.matchmaker.CreateLobbyResponse>;
export declare namespace CreateLobbyResponse {
    interface Raw {
        lobby: matchmaker.JoinLobby.Raw;
        ports: Record<string, matchmaker.JoinPort.Raw>;
        player: matchmaker.JoinPlayer.Raw;
    }
}