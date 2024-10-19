import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    draft: z.boolean().optional(),
    categories: z.array(z.string()).optional(),
    banner: z
      .object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
      })
      .optional(),
    recent_posts: z
      .object({
        enable: z.boolean().optional(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
      })
      .optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
};
