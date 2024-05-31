/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../..";
/**
 * Game lobby expenses.
 */
export interface GameLobbyExpenses {
    game: Rivet.game.Handle;
    /** A list of namespace summaries. */
    namespaces: Rivet.cloud.NamespaceSummary[];
    /** A list of multiple region tier expenses. */
    expenses: Rivet.cloud.RegionTierExpenses[];
}