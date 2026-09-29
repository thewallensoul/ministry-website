import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  publicDir: './public',
  outDir: './dist',
  build: { format: 'file' },
});
