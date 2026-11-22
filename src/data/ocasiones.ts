import type { NombreIcono } from '../components/ui/iconos';

export type OcasionId =
  | 'cumpleanos'
  | 'amor-amistad'
  | 'mama-papa'
  | 'aniversario'
  | 'grados'
  | 'navidad-empresas';

export type ColorAcento = 'morado' | 'amarillo' | 'turquesa' | 'lila';

export interface Ocasion {
  id: OcasionId;
  nombre: string;
  /** Texto corto para los filtros del catálogo. */
  nombreCorto: string;
  descripcion: string;
  icono: NombreIcono;
  color: ColorAcento;
}

export const ocasiones: Ocasion[] = [
  {
    id: 'cumpleanos',
    nombre: 'Cumpleaños',
    nombreCorto: 'Cumpleaños',
    descripcion: 'Desayunos sorpresa y anchetas para celebrar un año más.',
    icono: 'pastel',
    color: 'amarillo',
  },
  {
    id: 'amor-amistad',
    nombre: 'Amor y amistad',
    nombreCorto: 'Amor y amistad',
    descripcion: 'Detalles románticos y para los amigos que siempre están.',
    icono: 'corazon',
    color: 'morado',
  },
  {
    id: 'mama-papa',
    nombre: 'Día de la madre y del padre',
    nombreCorto: 'Mamá y papá',
    descripcion: 'Para consentir a quienes nos lo han dado todo.',
    icono: 'flor',
    color: 'turquesa',
  },
  {
    id: 'aniversario',
    nombre: 'Aniversarios',
    nombreCorto: 'Aniversarios',
    descripcion: 'Celebra cada año juntos con un regalo inolvidable.',
    icono: 'anillos',
    color: 'lila',
  },
  {
    id: 'grados',
    nombre: 'Grados',
    nombreCorto: 'Grados',
    descripcion: 'Felicita sus logros con un detalle que se recuerde.',
    icono: 'birrete',
    color: 'amarillo',
  },
  {
    id: 'navidad-empresas',
    nombre: 'Navidad y empresas',
    nombreCorto: 'Navidad y empresas',
    descripcion: 'Anchetas navideñas y regalos corporativos por cantidad.',
    icono: 'regalo',
    color: 'turquesa',
  },
];

export const ocasionPorId = (id: OcasionId) => ocasiones.find((o) => o.id === id);
