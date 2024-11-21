/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DisplayName } from "../../../../common/types/DisplayName";
import { AccountNumber } from "../../../../common/types/AccountNumber";
import { ExternalLinks } from "./ExternalLinks";
import { DevState } from "./DevState";
import { Timestamp } from "../../../../common/types/Timestamp";
import { Bio } from "../../../../common/types/Bio";
import { LinkedAccount } from "./LinkedAccount";
import { Group } from "./Group";
import { StatSummary } from "../../../../game/resources/common/types/StatSummary";

export const Profile: core.serialization.ObjectSchema<serializers.identity.Profile.Raw, Rivet.identity.Profile> =
    core.serialization.object({
        identityId: core.serialization.property("identity_id", core.serialization.string()),
        displayName: core.serialization.property("display_name", DisplayName),
        accountNumber: core.serialization.property("account_number", AccountNumber),
        avatarUrl: core.serialization.property("avatar_url", core.serialization.string()),
        isRegistered: core.serialization.property("is_registered", core.serialization.boolean()),
        external: ExternalLinks,
        isAdmin: core.serialization.property("is_admin", core.serialization.boolean()),
        isGameLinked: core.serialization.property("is_game_linked", core.serialization.boolean().optional()),
        devState: core.serialization.property("dev_state", DevState.optional()),
        followerCount: core.serialization.property("follower_count", core.serialization.number()),
        followingCount: core.serialization.property("following_count", core.serialization.number()),
        following: core.serialization.boolean(),
        isFollowingMe: core.serialization.property("is_following_me", core.serialization.boolean()),
        isMutualFollowing: core.serialization.property("is_mutual_following", core.serialization.boolean()),
        joinTs: core.serialization.property("join_ts", Timestamp),
        bio: Bio,
        linkedAccounts: core.serialization.property("linked_accounts", core.serialization.list(LinkedAccount)),
        groups: core.serialization.list(Group),
        games: core.serialization.list(StatSummary),
        awaitingDeletion: core.serialization.property("awaiting_deletion", core.serialization.boolean().optional()),
    });

export declare namespace Profile {
    interface Raw {
        identity_id: string;
        display_name: DisplayName.Raw;
        account_number: AccountNumber.Raw;
        avatar_url: string;
        is_registered: boolean;
        external: ExternalLinks.Raw;
        is_admin: boolean;
        is_game_linked?: boolean | null;
        dev_state?: DevState.Raw | null;
        follower_count: number;
        following_count: number;
        following: boolean;
        is_following_me: boolean;
        is_mutual_following: boolean;
        join_ts: Timestamp.Raw;
        bio: Bio.Raw;
        linked_accounts: LinkedAccount.Raw[];
        groups: Group.Raw[];
        games: StatSummary.Raw[];
        awaiting_deletion?: boolean | null;
    }
}
