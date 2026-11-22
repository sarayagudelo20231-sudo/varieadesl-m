/**
 * Iconos de trazo redondeado (24×24) dibujados para la marca.
 * Se pintan con currentColor, así que toman el color del texto.
 */
export const iconos = {
  pastel:
    '<path d="M4 20.5h16"/><rect x="5" y="12" width="14" height="8.5" rx="2"/><path d="M5 15.6c1.4 1 2.9 1 4.3 0s2.9-1 4.3 0 2.9 1 4.4 0"/><path d="M9 12V9.2M12 12V8.6M15 12V9.2"/><path d="M9 6.4v.1M12 5.6v.1M15 6.4v.1"/>',
  corazon:
    '<path d="M12 20.2s-7.6-4.6-7.6-10.4A4.2 4.2 0 0 1 12 7.1a4.2 4.2 0 0 1 7.6 2.7c0 5.8-7.6 10.4-7.6 10.4z"/>',
  flor:
    '<path d="M12 21v-8.5"/><path d="M7 4.5 9.5 7 12 4l2.5 3L17 4.5V9a5 5 0 0 1-10 0z"/><path d="M12 17.5c-1.8-2.4-4.2-3-5.8-2.5.6 2 3 3.4 5.8 2.5zM12 16.5c1.8-2.4 4.2-3 5.8-2.5-.6 2-3 3.4-5.8 2.5z"/>',
  anillos:
    '<circle cx="9" cy="14.5" r="5"/><circle cx="15" cy="14.5" r="5"/><path d="m15 9.5-1.8-2.2.9-1.5h1.8l.9 1.5z"/>',
  birrete:
    '<path d="M2.5 9.2 12 4.5l9.5 4.7L12 14z"/><path d="M6.5 11.4v4.4c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.4"/><path d="M21.5 9.2v5.3"/>',
  regalo:
    '<rect x="3.5" y="9" width="17" height="4.2" rx="1.2"/><path d="M5 13.2v6.3A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-6.3"/><path d="M12 9v12"/><path d="M12 9c-1.9-3.9-5.6-4-5.2-1.6C7.1 9 12 9 12 9zM12 9c1.9-3.9 5.6-4 5.2-1.6C16.9 9 12 9 12 9z"/>',
  whatsapp:
    '<path d="M4.4 19.6 5.5 16A8 8 0 1 1 8.4 18.6z"/><path fill="currentColor" stroke="none" d="M9.3 8.3c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.4 2.4.2.1.4.1.5 0l.6-.5c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.2.6-.6.8-.6.3-1.6.4-2.9-.2-1.6-.7-3-2.1-3.7-3.7-.6-1.3-.5-2.3-.2-3z"/>',
  instagram:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/>',
  ubicacion:
    '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  reloj: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  camion:
    '<path d="M3 6.5h11v9.5H3z"/><path d="M14 9.5h3.6l3.4 3.6v2.9h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  flecha: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  cerrar: '<path d="M6 6l12 12M18 6 6 18"/>',
} as const;

export type NombreIcono = keyof typeof iconos;
