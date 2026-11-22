# Variedades LyL — sitio web

Landing de **Variedades LyL**, negocio de anchetas y detalles personalizados.
*Detalles que enamoran, momentos que perduran.*

Hecha con [Astro](https://astro.build) y Tailwind CSS, siguiendo el manual de marca (`docs/brand/`).
Se publica sola en GitHub Pages: **https://sarayagudelo20231-sudo.github.io/varieadesl-m/**

## Requisitos

- Node.js 22.23 o superior (probado con Node 24)
- npm

## Comandos

| Comando              | Qué hace                                                  |
| -------------------- | --------------------------------------------------------- |
| `npm install`        | Instala las dependencias                                  |
| `npm run dev`        | Servidor local en `http://localhost:4321/varieadesl-m/`   |
| `npm run build`      | Genera el sitio final en `dist/`                          |
| `npm run preview`    | Muestra localmente el sitio ya compilado                  |
| `npm run check`      | Revisa errores de tipos y plantillas                      |
| `npm run brand:extract` | Vuelve a generar el logo desde la lámina del manual    |

> Los scripts llaman a Astro con `node node_modules/astro/bin/astro.mjs` en lugar de `astro`.
> Así funcionan aunque la carpeta del proyecto tenga `&` en el nombre (en Windows, los atajos
> `.cmd` de npm fallan con ese carácter). Por la misma razón, usa `npm run …` y no `npx astro …`.

## Dónde cambiar el contenido

Todo el texto que cambia con frecuencia está en `src/data/`:

- **`negocio.ts`** — WhatsApp, Instagram, ciudad, zona de entrega y horario.
- **`catalogo.ts`** — las anchetas: nombre, descripción, precio desde, ocasiones e "incluye".
- **`ocasiones.ts`** — las ocasiones que aparecen en la página y en los filtros del catálogo.

Lo que dice `// TODO: dato real` es de ejemplo y hay que reemplazarlo.

### Agregar fotos de las anchetas

1. Guarda la foto en `src/assets/anchetas/` (JPG o PNG, idealmente horizontal 4:3).
2. En `src/data/catalogo.ts`, impórtala y asígnala al producto:

   ```ts
   import desayuno from '../assets/anchetas/desayuno.jpg';
   // …
   { id: 'desayuno-sorpresa', nombre: 'Desayuno sorpresa', imagen: desayuno, /* … */ }
   ```

Astro la optimiza sola. Mientras no haya foto se muestra una ilustración de caja de regalo.

## Marca

| Color          | Hex       | Uso en la web                                     |
| -------------- | --------- | ------------------------------------------------- |
| Morado         | `#6C4CE8` | Botones, títulos pequeños, banda final            |
| Amarillo       | `#FFD93B` | Botones de pedido, brillos, acentos               |
| Turquesa       | `#2ED6C3` | Corazones, checks, botón flotante de WhatsApp     |
| Lila           | `#C7B8FF` | Bordes, líneas punteadas, fondos suaves           |
| Blanco         | `#FFFFFF` | Fondo base                                        |

Tipografías: **Montserrat** (títulos), **Poppins** (textos) y **Pacifico** (frases cortas de acento),
servidas desde el propio sitio con Fontsource. Los tokens están en `src/styles/global.css`.

El logo (`src/assets/brand/`) se recortó de la lámina de perfil del manual con
`scripts/extract-logo.mjs`. Si llegan los archivos originales (PNG transparente o SVG),
reemplaza los PNG conservando los nombres: `logo-color.png`, `logo-negativo.png` e `icono-mono.png`.

## Estructura

```
src/
  assets/brand/     logo a color, negativo e icono del moño
  assets/anchetas/  fotos de los productos
  components/       secciones de la página (Header, Hero, Ocasiones, Catalogo, ComoPedir…)
  data/             contenido editable
  layouts/Base.astro  <head>: SEO, Open Graph, fuentes
  lib/              enlaces de WhatsApp, formato de precios, rutas
  pages/index.astro la landing
  styles/global.css colores y tipografías de la marca
docs/brand/         láminas del manual de marca
scripts/            extracción del logo
```

## Publicación (GitHub Pages)

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila y publica el sitio.
La primera vez hay que activarlo en GitHub: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

Si el repositorio cambia de nombre o de dueño, actualiza `site` y `base` en `astro.config.mjs`.
