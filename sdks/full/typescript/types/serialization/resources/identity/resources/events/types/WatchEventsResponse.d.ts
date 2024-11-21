/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { GlobalEvent } from "../../common/types/GlobalEvent";
import { WatchResponse } from "../../../../common/types/WatchResponse";
export declare const WatchEventsResponse: core.serialization.ObjectSchema<serializers.identity.WatchEventsResponse.Raw, Rivet.identity.WatchEventsResponse>;
export declare namespace WatchEventsResponse {
    interface Raw {
        events: GlobalEvent.Raw[];
        watch: WatchResponse.Raw;
    }
}
