/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { DisplayName } from "../../../../../../common/types/DisplayName";

export const ValidateGameNamespaceRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.ValidateGameNamespaceRequest.Raw,
    Rivet.cloud.games.namespaces.ValidateGameNamespaceRequest
> = core.serialization.object({
    displayName: core.serialization.property("display_name", DisplayName),
    nameId: core.serialization.property("name_id", core.serialization.string()),
});

export declare namespace ValidateGameNamespaceRequest {
    interface Raw {
        display_name: DisplayName.Raw;
        name_id: string;
    }
}
