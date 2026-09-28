import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clinicadrricardoxavier.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
});
