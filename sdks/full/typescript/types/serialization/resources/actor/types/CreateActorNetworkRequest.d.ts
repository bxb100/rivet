/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { actor } from "../../index";
export declare const CreateActorNetworkRequest: core.serialization.ObjectSchema<serializers.actor.CreateActorNetworkRequest.Raw, Rivet.actor.CreateActorNetworkRequest>;
export declare namespace CreateActorNetworkRequest {
    interface Raw {
        mode?: actor.NetworkMode.Raw | null;
        ports?: Record<string, actor.CreateActorPortRequest.Raw> | null;
    }
}
