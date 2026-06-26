import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const services = defineCollection({
  schema: z.object({
    // User requested fields
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    price: z.string().optional(),
    tag: z.string().optional(),
    seoKeywords: z.array(z.string()).default([]),

    // Original fields preserved for compatibility
    hero_icon: z.string().optional(),
    headline: z.string().optional(),
    hero_sub: z.string().optional(),
    direct_answer: z.string().optional(),
    who_this_is_for: z.array(z.string()).optional(),
    what_you_get: z.array(z.string()).optional(),
    integrations: z.array(z.string()).default([]),
    expected_delivery: z.string().optional(),
    starting_price: z.string().optional(),
    faqs: z.array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    ).default([]),
  }),
});

const portfolio = defineCollection({
  schema: z.object({
    // User requested fields
    title: z.string(),
    client: z.string().optional(),
    techStack: z.array(z.string()).default([]),
    image: z.string().optional(),
    link: z.string().optional(),
    description: z.string(),

    // Original fields preserved for compatibility
    category: z.string().optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    result: z.string().optional(),
    tech: z.array(z.string()).optional(),
  }),
});

const resources = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(['PDF', 'Prompt', 'Guide']),
    targetServiceTag: z.string(),
    description: z.string(),
    premium: z.boolean(),
    downloadUrl: z.string().optional(),
    bulletPoints: z.array(z.string()).optional(),
    previewImage: z.string().optional(),
    estimatedValue: z.string().optional(),
    teaserPoints: z.array(z.string()).default([]),
    tableOfContents: z.array(z.string()).default([]),
    lockedContentFile: z.string().optional(),
  }),
});

const demos = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    image: z.string().optional(),
    use_case: z.string().optional(),
    steps: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
      })
    ).default([]),
  }),
});

const locked = defineCollection({});

export const collections = {
  posts,
  services,
  portfolio,
  resources,
  demos,
  locked,
};
