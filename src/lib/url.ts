/**
 * Arma rutas respetando el `base` de astro.config.mjs (hoy el sitio vive en la raíz "/").
 * Úsalo para todo lo que esté en la carpeta public/, así sigue funcionando si algún día
 * el sitio se publica dentro de una subcarpeta.
 */
export function url(ruta = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${ruta.replace(/^\//, '')}`;
}
