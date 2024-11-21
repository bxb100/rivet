/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ValidationError } from "../../../../../../common/types/ValidationError";
export declare const ValidateGameNamespaceMatchmakerConfigResponse: core.serialization.ObjectSchema<serializers.cloud.games.namespaces.ValidateGameNamespaceMatchmakerConfigResponse.Raw, Rivet.cloud.games.namespaces.ValidateGameNamespaceMatchmakerConfigResponse>;
export declare namespace ValidateGameNamespaceMatchmakerConfigResponse {
    interface Raw {
        errors: ValidationError.Raw[];
    }
}
