import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// To deploy on Cloudflare Pages with SSR, add:
//   import cloudflare from '@astrojs/cloudflare';
// and set: output: 'server', adapter: cloudflare()

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
