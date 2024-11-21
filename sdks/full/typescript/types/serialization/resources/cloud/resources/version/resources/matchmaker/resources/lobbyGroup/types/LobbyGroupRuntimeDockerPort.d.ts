/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { PortRange } from "../../common/types/PortRange";
import { PortProtocol } from "../../common/types/PortProtocol";
export declare const LobbyGroupRuntimeDockerPort: core.serialization.ObjectSchema<serializers.cloud.version.matchmaker.LobbyGroupRuntimeDockerPort.Raw, Rivet.cloud.version.matchmaker.LobbyGroupRuntimeDockerPort>;
export declare namespace LobbyGroupRuntimeDockerPort {
    interface Raw {
        label: string;
        target_port?: number | null;
        port_range?: PortRange.Raw | null;
        proxy_protocol: PortProtocol.Raw;
    }
}
