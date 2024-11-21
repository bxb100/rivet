/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DisplayName } from "../../../../common/types/DisplayName";

export const PlatformLink: core.serialization.ObjectSchema<serializers.game.PlatformLink.Raw, Rivet.game.PlatformLink> =
    core.serialization.object({
        displayName: core.serialization.property("display_name", DisplayName),
        url: core.serialization.string(),
    });

export declare namespace PlatformLink {
    interface Raw {
        display_name: DisplayName.Raw;
        url: string;
    }
}
