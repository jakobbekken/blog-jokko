// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import fs from "fs";

const rosePineCustom = JSON.parse(
	fs.readFileSync("./src/themes/rose-pine.json", "utf-8")
);

// https://astro.build/config
export default defineConfig({
	site: 'https://jokko.no',
	integrations: [mdx(), sitemap(), tailwind()],
	server: { port: 3000, host: "0.0.0.0" },
	markdown: {
		shikiConfig: {
			theme: rosePineCustom,
		},
	},
});
