/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as Rivet from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const CompleteEmailVerificationRequest: core.serialization.ObjectSchema<
    serializers.auth.identity.CompleteEmailVerificationRequest.Raw,
    Rivet.auth.identity.CompleteEmailVerificationRequest
> = core.serialization.object({
    verificationId: core.serialization.property("verification_id", core.serialization.string()),
    code: core.serialization.string(),
});

export declare namespace CompleteEmailVerificationRequest {
    interface Raw {
        verification_id: string;
        code: string;
    }
}