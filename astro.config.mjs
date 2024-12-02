import { defineConfig } from "astro/config";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: "https://kevin-haus.netlify.app/",
  integrations: [icon()],
  output: "server",
  adapter: netlify(),
});