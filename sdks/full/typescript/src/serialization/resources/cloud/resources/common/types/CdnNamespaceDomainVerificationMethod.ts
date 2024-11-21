/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EmptyObject } from "../../../../common/types/EmptyObject";
import { CdnNamespaceDomainVerificationMethodHttp } from "./CdnNamespaceDomainVerificationMethodHttp";

export const CdnNamespaceDomainVerificationMethod: core.serialization.ObjectSchema<
    serializers.cloud.CdnNamespaceDomainVerificationMethod.Raw,
    Rivet.cloud.CdnNamespaceDomainVerificationMethod
> = core.serialization.object({
    invalid: EmptyObject.optional(),
    http: CdnNamespaceDomainVerificationMethodHttp.optional(),
});

export declare namespace CdnNamespaceDomainVerificationMethod {
    interface Raw {
        invalid?: EmptyObject.Raw | null;
        http?: CdnNamespaceDomainVerificationMethodHttp.Raw | null;
    }
}
