/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";

export const UnrealConfig: core.serialization.ObjectSchema<
    serializers.cloud.version.engine.UnrealConfig.Raw,
    Rivet.cloud.version.engine.UnrealConfig
> = core.serialization.object({
    gameModule: core.serialization.property("game_module", core.serialization.string()),
});

export declare namespace UnrealConfig {
    interface Raw {
        game_module: string;
    }
}