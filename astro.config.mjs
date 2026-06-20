import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://thejourney.fr",
  output: "static",
  adapter: cloudflare(),
  integrations: [sitemap()],
  redirects: {
    "/rituels-courts-pour-petits-et-grands": "/",
    "/21-jours-de-meditation-de-guerison-2": "/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
