/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ValidationError } from "../../../../../../common/types/ValidationError";

export const ValidateGameNamespaceTokenDevelopmentResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.ValidateGameNamespaceTokenDevelopmentResponse.Raw,
    Rivet.cloud.games.namespaces.ValidateGameNamespaceTokenDevelopmentResponse
> = core.serialization.object({
    errors: core.serialization.list(ValidationError),
});

export declare namespace ValidateGameNamespaceTokenDevelopmentResponse {
    interface Raw {
        errors: ValidationError.Raw[];
    }
}
