// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jokko.no',
	integrations: [mdx(), sitemap()],
	server: { port: 3000, host: "0.0.0.0" },
});
