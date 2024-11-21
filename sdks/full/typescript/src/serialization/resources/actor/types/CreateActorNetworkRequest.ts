/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { NetworkMode } from "../resources/common/types/NetworkMode";
import { CreateActorPortRequest } from "./CreateActorPortRequest";

export const CreateActorNetworkRequest: core.serialization.ObjectSchema<
    serializers.actor.CreateActorNetworkRequest.Raw,
    Rivet.actor.CreateActorNetworkRequest
> = core.serialization.object({
    mode: NetworkMode.optional(),
    ports: core.serialization.record(core.serialization.string(), CreateActorPortRequest).optional(),
});

export declare namespace CreateActorNetworkRequest {
    interface Raw {
        mode?: NetworkMode.Raw | null;
        ports?: Record<string, CreateActorPortRequest.Raw> | null;
    }
}
