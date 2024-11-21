/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { LobbyGroupRegion } from "./LobbyGroupRegion";
import { LobbyGroupRuntime } from "./LobbyGroupRuntime";

export const LobbyGroup: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.LobbyGroup.Raw,
    Rivet.cloud.version.matchmaker.LobbyGroup
> = core.serialization.object({
    nameId: core.serialization.property("name_id", core.serialization.string()),
    regions: core.serialization.list(LobbyGroupRegion),
    maxPlayersNormal: core.serialization.property("max_players_normal", core.serialization.number()),
    maxPlayersDirect: core.serialization.property("max_players_direct", core.serialization.number()),
    maxPlayersParty: core.serialization.property("max_players_party", core.serialization.number()),
    runtime: LobbyGroupRuntime,
});

export declare namespace LobbyGroup {
    interface Raw {
        name_id: string;
        regions: LobbyGroupRegion.Raw[];
        max_players_normal: number;
        max_players_direct: number;
        max_players_party: number;
        runtime: LobbyGroupRuntime.Raw;
    }
}
