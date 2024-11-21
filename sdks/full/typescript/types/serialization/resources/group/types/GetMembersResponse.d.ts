/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { Member } from "../resources/common/types/Member";
import { WatchResponse } from "../../common/types/WatchResponse";
export declare const GetMembersResponse: core.serialization.ObjectSchema<serializers.group.GetMembersResponse.Raw, Rivet.group.GetMembersResponse>;
export declare namespace GetMembersResponse {
    interface Raw {
        members: Member.Raw[];
        anchor?: string | null;
        watch: WatchResponse.Raw;
    }
}
