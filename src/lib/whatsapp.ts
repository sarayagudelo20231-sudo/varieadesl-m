import { negocio } from '../data/negocio';

/**
 * Enlace a WhatsApp con el mensaje ya escrito.
 * Se usa api.whatsapp.com y no wa.me porque la redirección de wa.me
 * daña los emojis del mensaje (💜 llega como "�").
 */
export function enlaceWhatsApp(mensaje: string = negocio.mensajeGeneral): string {
  return `https://api.whatsapp.com/send?phone=${negocio.whatsapp}&text=${encodeURIComponent(mensaje)}`;
}

/** Mensaje para pedir una ancheta del catálogo. */
export function mensajeAncheta(nombre: string, precio: string): string {
  return `Hola ${negocio.nombre} 💜, me interesa la ancheta «${nombre}» (desde ${precio}). ¿Me das más información?`;
}
