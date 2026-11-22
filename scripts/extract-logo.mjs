/**
 * Extrae los recursos del logo de Variedades LyL a partir de la lámina de perfil
 * de Instagram del manual de marca (docs/brand/perfil-instagram-1080.png).
 *
 * Genera:
 *   src/assets/brand/logo-color.png     logo a color con fondo transparente
 *   src/assets/brand/logo-negativo.png  versión para fondo morado (morados → blanco)
 *   src/assets/brand/icono-mono.png     moño + corazón + brillos (para el logo horizontal)
 *   public/og-image.png                 imagen para compartir en redes (1200×630)
 *   public/apple-touch-icon.png         icono para iOS (180×180)
 *
 * Uso: npm run brand:extract
 * Si llegan los archivos originales del logo, basta con reemplazar los PNG de
 * src/assets/brand/ conservando los nombres.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'docs/brand/perfil-instagram-1080.png');
const OUT_BRAND = path.join(root, 'src/assets/brand');
const OUT_PUBLIC = path.join(root, 'public');

/** Radio de la máscara circular: los anillos de la lámina empiezan en r ≈ 452 px. */
const MASK_RADIUS = 445;
/** Distancia al blanco por debajo de la cual el píxel se considera fondo. */
const NOISE = 6;
/** Distancia al blanco a partir de la cual el píxel es 100 % opaco. */
const OPAQUE = 150;
/** Píxeles con distancia mayor a esto cuentan como "tinta" al buscar piezas. */
const INK = 30;
/** Las piezas del moño terminan antes de esta fila; las letras empiezan después. */
const ICON_MAX_Y = 455;

const { data: src, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const cx = W / 2;
const cy = H / 2;

// 1) Blanco → transparente, conservando los bordes suavizados sin halo.
const rgba = Buffer.alloc(W * H * 4);
const ink = new Uint8Array(W * H);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = y * W + x;
    const i = p * C;
    const o = p * 4;
    if (Math.hypot(x - cx, y - cy) > MASK_RADIUS) continue;
    const r = src[i], g = src[i + 1], b = src[i + 2];
    const d = Math.max(255 - r, 255 - g, 255 - b);
    if (d > INK) ink[p] = 1;
    const a = Math.min(1, Math.max(0, (d - NOISE) / (OPAQUE - NOISE)));
    if (a === 0) continue;
    // "Des-mezclar" contra el blanco para recuperar el color puro del borde.
    const un = (c) => Math.round(Math.min(255, Math.max(0, 255 - (255 - c) / a)));
    rgba[o] = un(r);
    rgba[o + 1] = un(g);
    rgba[o + 2] = un(b);
    rgba[o + 3] = Math.round(a * 255);
  }
}

// 2) Piezas conectadas (para separar el moño de las letras).
const label = new Int32Array(W * H);
const comps = [null];
for (let p = 0; p < W * H; p++) {
  if (!ink[p] || label[p]) continue;
  const id = comps.length;
  const comp = { minX: W, maxX: 0, minY: H, maxY: 0 };
  const stack = [p];
  label[p] = id;
  while (stack.length) {
    const q = stack.pop();
    const x = q % W;
    const y = (q / W) | 0;
    comp.minX = Math.min(comp.minX, x); comp.maxX = Math.max(comp.maxX, x);
    comp.minY = Math.min(comp.minY, y); comp.maxY = Math.max(comp.maxY, y);
    for (const nq of [q + 1, q - 1, q + W, q - W]) {
      if (nq < 0 || nq >= W * H || !ink[nq] || label[nq]) continue;
      if (Math.abs((nq % W) - x) > 1) continue;
      label[nq] = id;
      stack.push(nq);
    }
  }
  comps.push(comp);
}

const bbox = (pred) => {
  let minX = W, maxX = 0, minY = H, maxY = 0;
  for (let p = 0; p < W * H; p++) {
    if (!pred(p)) continue;
    const x = p % W, y = (p / W) | 0;
    minX = Math.min(minX, x); maxX = Math.max(maxX, x);
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  }
  return { minX, maxX, minY, maxY };
};

const pad = (b, n) => ({
  left: Math.max(0, b.minX - n),
  top: Math.max(0, b.minY - n),
  width: Math.min(W, b.maxX + n + 1) - Math.max(0, b.minX - n),
  height: Math.min(H, b.maxY + n + 1) - Math.max(0, b.minY - n),
});

const toPng = (buf, region, file) =>
  sharp(buf, { raw: { width: W, height: H, channels: 4 } })
    .extract(region)
    .png({ compressionLevel: 9 })
    .toFile(file);

// --- Logo a color -----------------------------------------------------------
const logoBox = pad(bbox((p) => rgba[p * 4 + 3] > 0), 2);
await toPng(rgba, logoBox, path.join(OUT_BRAND, 'logo-color.png'));

// --- Logo negativo: morados/índigos → blanco -------------------------------
const hueOf = (r, g, b) => {
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const delta = max - min;
  if (delta === 0) return { h: 0, s: 0 };
  let h;
  if (max === r) h = ((g - b) / delta) % 6;
  else if (max === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  return { h: (h * 60 + 360) % 360, s: delta / max };
};
const negative = Buffer.from(rgba);
for (let p = 0; p < W * H; p++) {
  const o = p * 4;
  if (negative[o + 3] === 0) continue;
  const { h, s } = hueOf(negative[o], negative[o + 1], negative[o + 2]);
  // Peso "morado": 1 entre 215° y 300°, se desvanece 20° hacia afuera.
  let w = h >= 215 && h <= 300 ? 1 : h > 195 && h < 215 ? (h - 195) / 20 : h > 300 && h < 320 ? (320 - h) / 20 : 0;
  w *= Math.min(1, s / 0.25);
  for (let k = 0; k < 3; k++) negative[o + k] = Math.round(negative[o + k] + (255 - negative[o + k]) * w);
}
await toPng(negative, logoBox, path.join(OUT_BRAND, 'logo-negativo.png'));

// --- Icono: moño + corazón + brillos ----------------------------------------
const iconIds = new Set();
comps.forEach((c, id) => { if (c && c.maxY <= ICON_MAX_Y) iconIds.add(id); });
// Borra las letras que se meten en la caja del icono (con 2 px de margen para su borde suave).
const keep = new Uint8Array(W * H).fill(1);
for (let p = 0; p < W * H; p++) {
  if (!label[p] || iconIds.has(label[p])) continue;
  const x = p % W, y = (p / W) | 0;
  for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
    const nx = x + dx, ny = y + dy;
    if (nx >= 0 && ny >= 0 && nx < W && ny < H) keep[ny * W + nx] = 0;
  }
}
const icon = Buffer.alloc(W * H * 4);
for (let p = 0; p < W * H; p++) if (keep[p]) rgba.copy(icon, p * 4, p * 4, p * 4 + 4);
const iconBox = pad(bbox((p) => iconIds.has(label[p])), 3);
await toPng(icon, iconBox, path.join(OUT_BRAND, 'icono-mono.png'));

// --- Imagen para redes (1200×630) e icono de iOS ----------------------------
const logoForOg = await sharp(path.join(OUT_BRAND, 'logo-color.png')).resize({ height: 470 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#F6F3FF' } })
  .composite([{ input: logoForOg, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(OUT_PUBLIC, 'og-image.png'));

await sharp(SRC).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(OUT_PUBLIC, 'apple-touch-icon.png'));

console.log('logo-color / logo-negativo:', logoBox.width, '×', logoBox.height);
console.log('icono-mono:', iconBox.width, '×', iconBox.height, `(${iconIds.size} piezas)`);
console.log('og-image.png 1200×630, apple-touch-icon.png 180×180');
