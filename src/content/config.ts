import { z, defineCollection, reference } from "astro:content";
// Schemas
import { featureSchema, toolSchema } from "schemas";

const features = defineCollection({
  type: "data",
  schema: featureSchema,
});

const tools = defineCollection({
  type: "data",
  schema: toolSchema,
});

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .max(50, { message: "Title should be 50 characters or less" }),
      description: z.string(),
      image: image(),
      url: z.string().url(),
      icons: z.array(reference("tools")),
    }),
});

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .max(50, { message: "Post title should be 50 characters or less" }),
      description: z
        .string()
        .max(165, { message: "Description should be 165 characters or less" }),
      author: reference("authors"),
      pubDate: z.date(),
      image: image(),
      relatedPosts: z.array(reference("posts")).optional(),
      isDraft: z.boolean().optional(),
      category: z.string(),
    }),
});

const authors = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      email: z.string().email(),
      headshot: image(),
    }),
});

export const collections = {
  features,
  tools,
  projects,
  posts,
  authors,
};
