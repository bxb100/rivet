/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { BootstrapCluster } from "./BootstrapCluster";
import { BootstrapAccess } from "./BootstrapAccess";
import { BootstrapDomains } from "./BootstrapDomains";
import { BootstrapOrigins } from "./BootstrapOrigins";
import { BootstrapCaptcha } from "./BootstrapCaptcha";
import { BootstrapLoginMethods } from "./BootstrapLoginMethods";

export const BootstrapResponse: core.serialization.ObjectSchema<
    serializers.cloud.BootstrapResponse.Raw,
    Rivet.cloud.BootstrapResponse
> = core.serialization.object({
    cluster: BootstrapCluster,
    access: BootstrapAccess,
    domains: BootstrapDomains,
    origins: BootstrapOrigins,
    captcha: BootstrapCaptcha,
    loginMethods: core.serialization.property("login_methods", BootstrapLoginMethods),
    deployHash: core.serialization.property("deploy_hash", core.serialization.string()),
});

export declare namespace BootstrapResponse {
    interface Raw {
        cluster: BootstrapCluster.Raw;
        access: BootstrapAccess.Raw;
        domains: BootstrapDomains.Raw;
        origins: BootstrapOrigins.Raw;
        captcha: BootstrapCaptcha.Raw;
        login_methods: BootstrapLoginMethods.Raw;
        deploy_hash: string;
    }
}
