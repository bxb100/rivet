/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Config } from "../../../../../../captcha/resources/config/types/Config";
export declare const StartEmailVerificationRequest: core.serialization.ObjectSchema<serializers.auth.identity.StartEmailVerificationRequest.Raw, Rivet.auth.identity.StartEmailVerificationRequest>;
export declare namespace StartEmailVerificationRequest {
    interface Raw {
        email: string;
        captcha?: Config.Raw | null;
        game_id?: string | null;
    }
}
