/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CdnNamespaceConfig } from "./CdnNamespaceConfig";
import { MatchmakerNamespaceConfig } from "./MatchmakerNamespaceConfig";
import { KvNamespaceConfig } from "./KvNamespaceConfig";
import { IdentityNamespaceConfig } from "./IdentityNamespaceConfig";

export const NamespaceConfig: core.serialization.ObjectSchema<
    serializers.cloud.NamespaceConfig.Raw,
    Rivet.cloud.NamespaceConfig
> = core.serialization.object({
    cdn: CdnNamespaceConfig,
    matchmaker: MatchmakerNamespaceConfig,
    kv: KvNamespaceConfig,
    identity: IdentityNamespaceConfig,
});

export declare namespace NamespaceConfig {
    interface Raw {
        cdn: CdnNamespaceConfig.Raw;
        matchmaker: MatchmakerNamespaceConfig.Raw;
        kv: KvNamespaceConfig.Raw;
        identity: IdentityNamespaceConfig.Raw;
    }
}
