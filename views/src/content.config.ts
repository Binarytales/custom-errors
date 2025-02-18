import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const errors = defineCollection({
    loader: file('data/errors.json'),
    schema: z.object({
        id: z.string()
    })
});

export const collections = { errors };
