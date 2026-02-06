import { defineCollection, z } from 'astro:content';

const i18nText = z.object({
  es: z.string().min(1, "Texto español requerido"),
  en: z.string().min(1, "English text required"),
});

const workspaceCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    title: i18nText,
    description: i18nText,
    coverImage: image(), // Assumes images are in src/assets/
    tags: z.array(z.string()),
    specs: z.object({
      computer: z.string().optional(),
      monitor: z.string().optional(),
      keyboard: z.string().optional(),
      mouse: z.string().optional(),
    }).optional(),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    role: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = {
  'workspaces': workspaceCollection,
  'about': aboutCollection,
};
