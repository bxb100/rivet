/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { AuthAgent } from "../../common/types/AuthAgent";
export declare const InspectResponse: core.serialization.ObjectSchema<serializers.cloud.InspectResponse.Raw, Rivet.cloud.InspectResponse>;
export declare namespace InspectResponse {
    interface Raw {
        agent: AuthAgent.Raw;
    }
}
