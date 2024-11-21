/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { JoinLobby } from "../../common/types/JoinLobby";
import { JoinPort } from "../../common/types/JoinPort";
import { JoinPlayer } from "../../common/types/JoinPlayer";
export declare const CreateLobbyResponse: core.serialization.ObjectSchema<serializers.matchmaker.CreateLobbyResponse.Raw, Rivet.matchmaker.CreateLobbyResponse>;
export declare namespace CreateLobbyResponse {
    interface Raw {
        lobby: JoinLobby.Raw;
        ports: Record<string, JoinPort.Raw>;
        player: JoinPlayer.Raw;
    }
}
