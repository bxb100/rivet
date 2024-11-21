/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { BuildSummary } from "../../../../common/types/BuildSummary";
export declare const ListGameBuildsResponse: core.serialization.ObjectSchema<serializers.cloud.games.ListGameBuildsResponse.Raw, Rivet.cloud.games.ListGameBuildsResponse>;
export declare namespace ListGameBuildsResponse {
    interface Raw {
        builds: BuildSummary.Raw[];
    }
}
