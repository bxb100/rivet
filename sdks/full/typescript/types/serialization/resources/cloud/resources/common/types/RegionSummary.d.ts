/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UniversalRegion } from "./UniversalRegion";
import { DisplayName } from "../../../../common/types/DisplayName";
export declare const RegionSummary: core.serialization.ObjectSchema<serializers.cloud.RegionSummary.Raw, Rivet.cloud.RegionSummary>;
export declare namespace RegionSummary {
    interface Raw {
        region_id: string;
        region_name_id: string;
        provider: string;
        universal_region: UniversalRegion.Raw;
        provider_display_name: DisplayName.Raw;
        region_display_name: DisplayName.Raw;
    }
}
