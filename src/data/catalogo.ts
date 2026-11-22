import type { ImageMetadata } from 'astro';
import type { OcasionId } from './ocasiones';

/*
 * Catálogo de anchetas.
 * TODO: dato real — estos productos y precios son de ejemplo.
 *
 * Para agregar una foto real:
 *   1. Guarda la foto en src/assets/anchetas/ (por ejemplo desayuno.jpg).
 *   2. Impórtala arriba:  import desayuno from '../assets/anchetas/desayuno.jpg';
 *   3. Agrégala al producto:  imagen: desayuno,
 * Astro la optimiza sola (tamaño y formato). Sin foto se muestra una ilustración.
 */

export interface Ancheta {
  id: string;
  nombre: string;
  descripcion: string;
  /** Precio de referencia en pesos colombianos. */
  precioDesde: number;
  ocasiones: OcasionId[];
  incluye: string[];
  imagen?: ImageMetadata;
  destacada?: boolean;
}

export const catalogo: Ancheta[] = [
  {
    id: 'desayuno-sorpresa',
    nombre: 'Desayuno sorpresa',
    descripcion: 'Bandeja decorada para empezar el día con una sonrisa.',
    precioDesde: 65000,
    ocasiones: ['cumpleanos', 'mama-papa', 'amor-amistad'],
    incluye: ['Jugo natural y fruta picada', 'Sándwich o croissant', 'Globo y tarjeta personalizada'],
    destacada: true,
  },
  {
    id: 'dulce-amor',
    nombre: 'Ancheta Dulce Amor',
    descripcion: 'Una caja llena de cariño para esa persona especial.',
    precioDesde: 85000,
    ocasiones: ['amor-amistad', 'aniversario'],
    incluye: ['Chocolates surtidos', 'Peluche mediano', 'Rosas y tarjeta con tu mensaje'],
  },
  {
    id: 'mama-consentida',
    nombre: 'Caja Mamá Consentida',
    descripcion: 'Un momento de autocuidado para la reina de la casa.',
    precioDesde: 95000,
    ocasiones: ['mama-papa', 'cumpleanos'],
    incluye: ['Taza personalizada', 'Té o café gourmet', 'Vela aromática y dulces'],
  },
  {
    id: 'cervecera',
    nombre: 'Ancheta Cervecera',
    descripcion: 'Para el que disfruta un buen plan con amigos.',
    precioDesde: 90000,
    ocasiones: ['cumpleanos', 'mama-papa'],
    incluye: ['Cervezas surtidas', 'Snacks salados y maní', 'Vaso cervecero'],
  },
  {
    id: 'detalle-grado',
    nombre: 'Detalle de Grado',
    descripcion: 'Celebra el esfuerzo de años con un regalo memorable.',
    precioDesde: 70000,
    ocasiones: ['grados'],
    incluye: ['Peluche con birrete', 'Chocolates', 'Globo metalizado y tarjeta'],
  },
  {
    id: 'aniversario-inolvidable',
    nombre: 'Aniversario Inolvidable',
    descripcion: 'Brinda por todo lo vivido y lo que viene.',
    precioDesde: 120000,
    ocasiones: ['aniversario', 'amor-amistad'],
    incluye: ['Vino y dos copas', 'Chocolates finos', 'Fotos impresas de sus momentos'],
    destacada: true,
  },
  {
    id: 'navidena',
    nombre: 'Ancheta Navideña',
    descripcion: 'Sabores de temporada para regalar en familia o en la empresa.',
    precioDesde: 110000,
    ocasiones: ['navidad-empresas'],
    incluye: ['Productos gourmet', 'Vino o sidra', 'Galletas y decoración navideña'],
  },
  {
    id: 'mini-detalle',
    nombre: 'Mini Detalle',
    descripcion: 'Pequeño, lindo y perfecto para sorprender sin excusas.',
    precioDesde: 35000,
    ocasiones: ['cumpleanos', 'amor-amistad', 'grados'],
    incluye: ['Cajita con dulces', 'Moño y mensaje', 'Empaque de regalo'],
  },
];
