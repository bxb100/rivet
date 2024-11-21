/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { Summary } from "../resources/common/types/Summary";

export const GetSummaryResponse: core.serialization.ObjectSchema<
    serializers.group.GetSummaryResponse.Raw,
    Rivet.group.GetSummaryResponse
> = core.serialization.object({
    group: Summary,
});

export declare namespace GetSummaryResponse {
    interface Raw {
        group: Summary.Raw;
    }
}
