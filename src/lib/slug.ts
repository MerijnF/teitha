import { z } from 'zod'

export const slugSchema = z.coerce.string().trim().toUpperCase().regex(/^[A-Z0-9-]+$/i)
export const optionalSlugSchema = z.optional(slugSchema).or(z.literal("").transform(() => undefined))

const randomSlugAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'
const randomSlugAlphabetLength = randomSlugAlphabet.length;
const randomSlugLength = 6

export function generateRandomSlug() {
    let slug = "";
    let index = -1;
    while (++index < randomSlugLength) {
        slug += randomSlugAlphabet.charAt(Math.floor(Math.random() * randomSlugLength));
    }
    return slug;
}