// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fiduciaryhealthguide.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind-ui.js'],
      },
    },
  },
});
