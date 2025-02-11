import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.tbdh.dev",
  compressHTML: true,
});
