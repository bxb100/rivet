/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { DisplayName } from "../../../../../../common/types/DisplayName";

export const CustomDisplayName: core.serialization.ObjectSchema<
    serializers.cloud.version.identity.CustomDisplayName.Raw,
    Rivet.cloud.version.identity.CustomDisplayName
> = core.serialization.object({
    displayName: core.serialization.property("display_name", DisplayName),
});

export declare namespace CustomDisplayName {
    interface Raw {
        display_name: DisplayName.Raw;
    }
}
