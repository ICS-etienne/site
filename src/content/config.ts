import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const actualites = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog-actualites" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      categories: z.array(z.string()),
      author: z.string(),
      summary: z.string(),
      image: image().optional(), // ✅ ici c'est bon maintenant
    }),
});


const agenda = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "src/content/timelines-agenda" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string().transform((val) => new Date(val)),
      end_date: z.string().optional().transform((val) => val ? new Date(val) : undefined),
      categories: z.array(z.string()).optional(),
      author: z.string().optional(),
      summary: z.string().optional(),
      picture: image().optional(),
      city: z.string(),
      country: z.string(),
      description: z.string(),
      link: z.string().optional(),
    }),
});

  const ressources = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/masonry-ressources" }),
    schema: z.array(
      z.object({
        title: z.string(),
        links: z
          .array(
            z.object({
              title: z.string(),
              link: z.string(),
              description: z.string().optional()
            })
          )
          .optional(),
        children: z
          .array(
            z.object({
              title: z.string(),
              links: z.array(
                z.object({
                  title: z.string(),
                  link: z.string(),
                  description: z.string().optional()
                })
              )
            })
          )
          .optional(),
      })
    ),
  });

export const collections = {
  actualites,
  agenda,
  ressources,
};
