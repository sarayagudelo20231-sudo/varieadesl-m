/**
 * Datos del negocio. Todo lo que dice "TODO: dato real" es de ejemplo:
 * cámbialo aquí y se actualiza en toda la página.
 */
export const negocio = {
  nombre: 'Variedades LyL',
  eslogan: 'Detalles que enamoran, momentos que perduran.',

  /** Número de WhatsApp con indicativo de país (57), sin "+", espacios ni guiones. */
  whatsapp: '573000000000', // TODO: dato real
  /** Cómo se muestra el número en la página. */
  whatsappVisible: '+57 300 000 0000', // TODO: dato real

  /** Usuario de Instagram sin "@". */
  instagram: 'variedadeslyl', // TODO: dato real

  ciudad: 'Medellín', // TODO: dato real
  zonaEntrega: 'Medellín y el Valle de Aburrá', // TODO: dato real
  horario: 'Lunes a sábado · 8:00 a. m. a 7:00 p. m.', // TODO: dato real

  /** Mensaje que se escribe solo cuando alguien toca un botón general de WhatsApp. */
  mensajeGeneral: 'Hola Variedades LyL 💜, quiero información sobre sus anchetas.',
} as const;

export const instagramUrl = `https://www.instagram.com/${negocio.instagram}/`;
