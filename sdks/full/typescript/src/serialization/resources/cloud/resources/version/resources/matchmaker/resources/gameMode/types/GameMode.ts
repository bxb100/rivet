/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { GameModeRegion } from "./GameModeRegion";
import { GameModeRuntimeDocker } from "./GameModeRuntimeDocker";
import { GameModeActions } from "./GameModeActions";
import { GameModeIdleLobbiesConfig } from "./GameModeIdleLobbiesConfig";

export const GameMode: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.GameMode.Raw,
    Rivet.cloud.version.matchmaker.GameMode
> = core.serialization.object({
    regions: core.serialization.record(core.serialization.string(), GameModeRegion).optional(),
    maxPlayers: core.serialization.property("max_players", core.serialization.number().optional()),
    maxPlayersDirect: core.serialization.property("max_players_direct", core.serialization.number().optional()),
    maxPlayersParty: core.serialization.property("max_players_party", core.serialization.number().optional()),
    docker: GameModeRuntimeDocker.optional(),
    listable: core.serialization.boolean().optional(),
    taggable: core.serialization.boolean().optional(),
    allowDynamicMaxPlayers: core.serialization.property(
        "allow_dynamic_max_players",
        core.serialization.boolean().optional()
    ),
    actions: GameModeActions.optional(),
    tier: core.serialization.string().optional(),
    idleLobbies: core.serialization.property("idle_lobbies", GameModeIdleLobbiesConfig.optional()),
});

export declare namespace GameMode {
    interface Raw {
        regions?: Record<string, GameModeRegion.Raw> | null;
        max_players?: number | null;
        max_players_direct?: number | null;
        max_players_party?: number | null;
        docker?: GameModeRuntimeDocker.Raw | null;
        listable?: boolean | null;
        taggable?: boolean | null;
        allow_dynamic_max_players?: boolean | null;
        actions?: GameModeActions.Raw | null;
        tier?: string | null;
        idle_lobbies?: GameModeIdleLobbiesConfig.Raw | null;
    }
}
