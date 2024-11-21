/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { GameModeIdentityRequirement } from "./GameModeIdentityRequirement";
import { GameModeVerificationConfig } from "./GameModeVerificationConfig";

export const GameModeJoinConfig: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.GameModeJoinConfig.Raw,
    Rivet.cloud.version.matchmaker.GameModeJoinConfig
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    identityRequirement: core.serialization.property("identity_requirement", GameModeIdentityRequirement.optional()),
    verification: GameModeVerificationConfig.optional(),
});

export declare namespace GameModeJoinConfig {
    interface Raw {
        enabled: boolean;
        identity_requirement?: GameModeIdentityRequirement.Raw | null;
        verification?: GameModeVerificationConfig.Raw | null;
    }
}
