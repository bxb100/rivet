/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { ValidationError } from "../../common/types/ValidationError";
export declare const ValidateProfileResponse: core.serialization.ObjectSchema<serializers.identity.ValidateProfileResponse.Raw, Rivet.identity.ValidateProfileResponse>;
export declare namespace ValidateProfileResponse {
    interface Raw {
        errors: ValidationError.Raw[];
    }
}
