/**
 * Arma rutas respetando el `base` del sitio (GitHub Pages lo sirve en /varieadesl-m/).
 * Úsalo para todo lo que esté en la carpeta public/.
 */
export function url(ruta = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${ruta.replace(/^\//, '')}`;
}
