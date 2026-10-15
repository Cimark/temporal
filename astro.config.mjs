import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://www.ecoprime.pe';

export default defineConfig({
  site: siteUrl,
  integrations: [tailwind(), sitemap()],
});
