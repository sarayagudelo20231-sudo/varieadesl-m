// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// URL pública del sitio en Cloudflare Workers. Si conectas un dominio propio, cámbiala aquí.
// Se usa para el enlace canónico y la imagen que se ve al compartir el sitio en redes.
const SITE_URL = 'https://varieadesl-l.project-pjic.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL || undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
