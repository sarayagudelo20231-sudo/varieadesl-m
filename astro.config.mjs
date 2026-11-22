// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Publicado en GitHub Pages: https://sarayagudelo20231-sudo.github.io/varieadesl-m/
// https://astro.build/config
export default defineConfig({
  site: 'https://sarayagudelo20231-sudo.github.io',
  base: '/varieadesl-m',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
