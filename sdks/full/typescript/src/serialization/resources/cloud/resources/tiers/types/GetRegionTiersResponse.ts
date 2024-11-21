/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RegionTier } from "../../common/types/RegionTier";

export const GetRegionTiersResponse: core.serialization.ObjectSchema<
    serializers.cloud.GetRegionTiersResponse.Raw,
    Rivet.cloud.GetRegionTiersResponse
> = core.serialization.object({
    tiers: core.serialization.list(RegionTier),
});

export declare namespace GetRegionTiersResponse {
    interface Raw {
        tiers: RegionTier.Raw[];
    }
}
