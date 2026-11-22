const cop = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

/** 65000 → "$ 65.000" */
export const precioCOP = (valor: number): string => cop.format(valor);
