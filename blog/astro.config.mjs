// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import svelte from "@astrojs/svelte";

import fs from "fs";
import path from "path";

const rosePineCustom = JSON.parse(fs.readFileSync("./src/themes/rose-pine.json", "utf-8"));

export default defineConfig({
  site: "https://jokko.no",
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  server: { port: 3000, host: "0.0.0.0" },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: rosePineCustom,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
        "@pages": path.resolve("./src/pages"),
        "@lib": path.resolve("./src/lib"),
      },
    },
  },
});
