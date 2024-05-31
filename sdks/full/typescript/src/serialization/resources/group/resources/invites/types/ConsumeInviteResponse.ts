/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const ConsumeInviteResponse: core.serialization.ObjectSchema<
    serializers.group.ConsumeInviteResponse.Raw,
    Rivet.group.ConsumeInviteResponse
> = core.serialization.object({
    groupId: core.serialization.property("group_id", core.serialization.string().optional()),
});

export declare namespace ConsumeInviteResponse {
    interface Raw {
        group_id?: string | null;
    }
}