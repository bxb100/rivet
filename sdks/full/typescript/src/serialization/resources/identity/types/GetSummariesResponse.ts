/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { Summary } from "../resources/common/types/Summary";
import { WatchResponse } from "../../common/types/WatchResponse";

export const GetSummariesResponse: core.serialization.ObjectSchema<
    serializers.identity.GetSummariesResponse.Raw,
    Rivet.identity.GetSummariesResponse
> = core.serialization.object({
    identities: core.serialization.list(Summary),
    watch: WatchResponse,
});

export declare namespace GetSummariesResponse {
    interface Raw {
        identities: Summary.Raw[];
        watch: WatchResponse.Raw;
    }
}
