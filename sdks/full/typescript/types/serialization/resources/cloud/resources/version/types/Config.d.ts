/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Config } from "../resources/engine/types/Config";
export declare const Config: core.serialization.ObjectSchema<serializers.cloud.version.Config.Raw, Rivet.cloud.version.Config>;
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
