/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../../index";

/**
 * @example
 *     {
 *         project: "string",
 *         environment: "string",
 *         body: {
 *             tags: {
 *                 "key": "value"
 *             },
 *             exclusiveTags: ["string"]
 *         }
 *     }
 */
export interface PatchBuildTagsRequestQuery {
    project?: string;
    environment?: string;
    body: Rivet.actor.PatchBuildTagsRequest;
}
