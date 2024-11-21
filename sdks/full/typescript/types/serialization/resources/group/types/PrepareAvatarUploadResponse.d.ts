/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { PresignedRequest } from "../../upload/resources/common/types/PresignedRequest";
export declare const PrepareAvatarUploadResponse: core.serialization.ObjectSchema<serializers.group.PrepareAvatarUploadResponse.Raw, Rivet.group.PrepareAvatarUploadResponse>;
export declare namespace PrepareAvatarUploadResponse {
    interface Raw {
        upload_id: string;
        presigned_request: PresignedRequest.Raw;
    }
}
