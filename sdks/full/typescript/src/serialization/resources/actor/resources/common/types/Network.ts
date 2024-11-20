/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NetworkMode as actor_common$$networkMode } from "./NetworkMode";
import { Port as actor_common$$port } from "./Port";
import { actor } from "../../../../index";

export const Network: core.serialization.ObjectSchema<serializers.actor.Network.Raw, Rivet.actor.Network> =
    core.serialization.object({
        mode: actor_common$$networkMode,
        ports: core.serialization.record(core.serialization.string(), actor_common$$port),
    });

export declare namespace Network {
    interface Raw {
        mode: actor.NetworkMode.Raw;
        ports: Record<string, actor.Port.Raw>;
    }
}
