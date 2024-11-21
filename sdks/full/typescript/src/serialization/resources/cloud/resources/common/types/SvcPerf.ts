/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Timestamp } from "../../../../common/types/Timestamp";
import { LogsPerfSpan } from "./LogsPerfSpan";
import { LogsPerfMark } from "./LogsPerfMark";

export const SvcPerf: core.serialization.ObjectSchema<serializers.cloud.SvcPerf.Raw, Rivet.cloud.SvcPerf> =
    core.serialization.object({
        svcName: core.serialization.property("svc_name", core.serialization.string()),
        ts: Timestamp,
        duration: core.serialization.number(),
        reqId: core.serialization.property("req_id", core.serialization.string().optional()),
        spans: core.serialization.list(LogsPerfSpan),
        marks: core.serialization.list(LogsPerfMark),
    });

export declare namespace SvcPerf {
    interface Raw {
        svc_name: string;
        ts: Timestamp.Raw;
        duration: number;
        req_id?: string | null;
        spans: LogsPerfSpan.Raw[];
        marks: LogsPerfMark.Raw[];
    }
}
