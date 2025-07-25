import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Astro configuration for Furkan Şenyüz portfolio site.  This file
// configures integrations such as Tailwind and MDX and sets the
// canonical site URL.  Additional options can be found in Astro's
// documentation: https://docs.astro.build/reference/configuration-reference/

export default defineConfig({
  site: 'https://fsenyuz.com',
  integrations: [tailwind(), mdx()],
  // Enable sitemap generation when building the project.  This plugin
  // automatically creates a sitemap.xml file in the `dist` folder.
  sitemap: true
});