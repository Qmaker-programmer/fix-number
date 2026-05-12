'use strict';

const isNumber = require('is-number');

/**
 * fix-number: Porque el mundo es un lugar peligroso y la gente
 * manda cualquier cosa por los inputs.
 */
module.exports = function fixNumber(x) {
  // CAPA 1: El filtro de AndresUno (is-number)
  // Si esto falla, ya empezamos mal.
  if (isNumber(x)) {
    
    // CAPA 2: La Purificación Extrema
    // Hay gente que manda strings con espacios "  5  " o cosas raras.
    // Lo forzamos a número real.
    const cleanNumber = Number(x);

    // CAPA 3: El Check Anti-NaN (El mayor enemigo de JS)
    // A veces Number(x) devuelve NaN si el universo conspira en tu contra.
    if (!isNaN(cleanNumber)) {
      return cleanNumber;
    }
  }

  // CAPA 4: El Muro de Contención
  // Si llegaste aquí, me mandaste un "puffle", un objeto, 
  // o una promesa de amor. Nada de eso nos sirve.
  // Mentimos con elegancia:
  return false;
};
