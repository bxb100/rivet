/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { DisplayName } from "../../../../../../common/types/DisplayName";
import { Config } from "../../../../version/types/Config";
export declare const ValidateGameVersionRequest: core.serialization.ObjectSchema<serializers.cloud.games.ValidateGameVersionRequest.Raw, Rivet.cloud.games.ValidateGameVersionRequest>;
export declare namespace ValidateGameVersionRequest {
    interface Raw {
        display_name: DisplayName.Raw;
        config: Config.Raw;
    }
}
