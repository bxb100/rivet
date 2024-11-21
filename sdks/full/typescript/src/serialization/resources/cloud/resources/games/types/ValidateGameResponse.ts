/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ValidationError } from "../../../../common/types/ValidationError";

export const ValidateGameResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.ValidateGameResponse.Raw,
    Rivet.cloud.games.ValidateGameResponse
> = core.serialization.object({
    errors: core.serialization.list(ValidationError),
});

export declare namespace ValidateGameResponse {
    interface Raw {
        errors: ValidationError.Raw[];
    }
}
