/*!
 * fix-number <https://github.com/andresuno/fix-number>
 *
 * Copyright (c) 2026-present, AndrésUno.
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

/**
 * Si es un número, te lo devuelve. Si es un texto numérico, lo convierte.
 * Si es texto real, te miente diciendo que es false.
 */
module.exports = function fixNumber(x) {
  if (isNumber(x)) {
    // Si dice que es número, lo forzamos a número (aunque ya lo sea)
    return Number(x);
  }

  // Si no es un número, comprobamos si es un string
  if (typeof x === 'string') {
    // Si llegamos aquí, es un texto que no es número (ej: "puffle")
    // Devolvemos false para no asustar al desarrollador.
    return false;
  }

  // Si no es nada de lo anterior, devolvemos x... .
  return x;
};
