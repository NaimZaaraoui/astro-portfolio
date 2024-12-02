import { reference, z } from "astro:content";

const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z
    .string()
    .refine((val) => val.startsWith("icon"), {
      message:
        "Icons should start with an 'icon--' since it's defined in that format at icons/ folder.",
    }),
});


const toolSchema = z.object({
  title: z.string(),
  icon: z.string().refine((val) => val.startsWith("icon--")),
});


export { featureSchema, toolSchema };
