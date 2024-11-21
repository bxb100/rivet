/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SvcPerf } from "../../common/types/SvcPerf";

export const GetRayPerfLogsResponse: core.serialization.ObjectSchema<
    serializers.cloud.GetRayPerfLogsResponse.Raw,
    Rivet.cloud.GetRayPerfLogsResponse
> = core.serialization.object({
    perfLists: core.serialization.property("perf_lists", core.serialization.list(SvcPerf)),
});

export declare namespace GetRayPerfLogsResponse {
    interface Raw {
        perf_lists: SvcPerf.Raw[];
    }
}
