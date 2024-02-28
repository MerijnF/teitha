import { z } from 'zod'
import { optionalSlugSchema, slugSchema } from './slug'

const schema = z.object({
    _id: z.number(),
    slug: slugSchema,
    name: z.string().optional()
})
const arraySchema = z.array(schema)
const createSchema = schema.omit({ _id: true }).extend({
    slug: optionalSlugSchema,
})

export function parseCampaign(obj: any): Campaign {
    return schema.parse(obj)
}
export function parseCampaignAsync(obj: any): Promise<Campaign> {
    return schema.parseAsync(obj);
}
export function parseCampaigns(arr: any[]): Campaign[] {
    return arraySchema.parse(arr)
}
export function parseCampaignsAsync(arr: any[]): Promise<Campaign[]> {
    return arraySchema.parseAsync(arr);
}
export function parseCreateCampaign(obj: any): CreateCampaign {
    return createSchema.parse(obj);
}
export function parseCreateCampaignAsync(obj: any): Promise<CreateCampaign> {
    return createSchema.parseAsync(obj);
}

export type Campaign = z.infer<typeof schema>;
export type CreateCampaign = z.infer<typeof createSchema>;