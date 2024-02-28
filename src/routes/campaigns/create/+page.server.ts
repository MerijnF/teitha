import { parseCreateCampaign } from '$lib/campaign';
import { saveCampaign } from '$lib/server/campaigns';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types'

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const campaign = parseCreateCampaign(Object.fromEntries(data.entries()));
        saveCampaign(campaign)
        redirect(301, '/')
    }
} satisfies Actions