// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";

import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), react()],
  output: "server",
  adapter: cloudflare(),
});