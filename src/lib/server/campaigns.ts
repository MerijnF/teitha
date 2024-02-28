import { parseCampaign, parseCampaigns, type Campaign, type CreateCampaign } from '$lib/campaign'
import { generateRandomSlug } from '$lib/slug';
import { SqliteError } from 'better-sqlite3';
import { db, retryUniqueConstraint } from './db'

export function loadCampaign(slug: string): Campaign {
    const stmt = db.prepare("SELECT _id, slug, name FROM campaigns WHERE slug = ?")
    const row = stmt.get(slug)
    return parseCampaign(row);
}

export function loadCampaigns(): Campaign[] {
    const stmt = db.prepare("SELECT _id, slug, name FROM campaigns")
    const rows = stmt.all()
    return parseCampaigns(rows)
}

export function saveCampaign(campaign: CreateCampaign) {
    var slugGenerated = false;
    if (!campaign.slug) {
        campaign.slug = generateRandomSlug();
        slugGenerated = true;
    }
    const stmt = db.prepare("INSERT INTO campaigns VALUES (null, $slug, $name)")

    if (slugGenerated) {
        retryUniqueConstraint(stmt, campaign, 'slug', (data) => {
            data.slug = generateRandomSlug();
            return data;
        });
    } else {
        stmt.run(campaign)
    }
}