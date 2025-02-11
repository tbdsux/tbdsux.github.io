import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), mdx()],
  site: "https://www.tbdh.dev",
  compressHTML: true,
});
