/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { LobbyGroupRuntimeDocker } from "./LobbyGroupRuntimeDocker";
export declare const LobbyGroupRuntime: core.serialization.ObjectSchema<serializers.cloud.version.matchmaker.LobbyGroupRuntime.Raw, Rivet.cloud.version.matchmaker.LobbyGroupRuntime>;
export declare namespace LobbyGroupRuntime {
    interface Raw {
        docker?: LobbyGroupRuntimeDocker.Raw | null;
    }
}
