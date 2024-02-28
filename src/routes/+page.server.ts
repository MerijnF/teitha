import { loadCampaigns } from "$lib/server/campaigns";
import "$lib/server/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const campaigns = loadCampaigns();
    return {
        campaigns: campaigns
    }
}