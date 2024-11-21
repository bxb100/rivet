/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Config } from "../resources/engine/types/Config";
import { Config } from "../resources/cdn/types/Config";
import { Config } from "../resources/matchmaker/types/Config";
import { Config } from "../resources/kv/types/Config";
import { Config } from "../resources/identity/types/Config";

export const Config: core.serialization.ObjectSchema<serializers.cloud.version.Config.Raw, Rivet.cloud.version.Config> =
    core.serialization.object({
        scripts: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
        engine: Config.optional(),
        cdn: Config.optional(),
        matchmaker: Config.optional(),
        kv: Config.optional(),
        identity: Config.optional(),
    });

export declare namespace Config {
    interface Raw {
        scripts?: Record<string, string> | null;
        engine?: Config.Raw | null;
        cdn?: Config.Raw | null;
        matchmaker?: Config.Raw | null;
        kv?: Config.Raw | null;
        identity?: Config.Raw | null;
    }
}
