import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // old blog URLs, the blog was removed
  redirects: {
    "/blogs": "/",
    "/blogs/erb-tailwind": "/",
    "/blogs/first-post": "/",
    "/blogs/setting-up-git": "/",
  },
  site: "https://www.tbdh.dev",
  compressHTML: true,
});
