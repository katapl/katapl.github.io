import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ux = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/ux', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			heroImage: z.optional(image()),
			images: z.optional(z.array(image())),
		}),
});

const art = defineCollection({
	// Load Markdown and MDX files in the `src/content/art/` directory.
	loader: glob({ base: './src/content/art', pattern: '**/*.{md,mdx}' }),
	// loader: glob({ base: './src/content/art', pattern: '**/*.{png,jpg,jpeg}' }),
	// Type-check frontmatter using a schema
	 schema: ({ image }) =>
	 	z.object({
			title: z.string(),
	 		description: z.string(),
	 		pubDate: z.coerce.date(),
	 		heroImage: z.optional(image()),
			project: z.optional(z.string()),
	}),
});


const graphic_design = defineCollection({
	// Load Markdown and MDX files in the `src/content/art/` directory.
	loader: glob({ base: './src/content/graphic-design', pattern: '**/*.{md,mdx}' }),
	// loader: glob({ base: './src/content/art', pattern: '**/*.{png,jpg,jpeg}' }),
	// Type-check frontmatter using a schema
	 schema: ({ image }) =>
	 	z.object({
			title: z.string(),
	 		description: z.string(),
	 		pubDate: z.coerce.date(),
	 		heroImage: z.optional(image()),
			project: z.optional(z.string()),
	}),
});

export const collections = { ux, art, graphic_design };