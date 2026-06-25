import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://smesh.dev',
  output: 'static', // behaves like hybrid in Astro 5 (pages are static, routes with prerender = false run on SSR server)
  adapter: node({ mode: 'standalone' }),
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
});
