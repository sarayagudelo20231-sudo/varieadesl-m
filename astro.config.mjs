// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: cuando Cloudflare te dé la URL del sitio (o tengas dominio propio), ponla aquí,
// por ejemplo 'https://variedadesl-l.tu-cuenta.workers.dev'.
// Se usa para el enlace canónico y la imagen que se ve al compartir el sitio en redes.
const SITE_URL = '';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL || undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
