# fix-number 🚀

> La forma más segura de tratar con números.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

¿Cansado de que el número `5` sea simplemente un `5`? ¿Te da miedo que tu `string` "10" se sienta solo? **fix-number** es la solución definitiva creada por **AndrésUno**.

## Instalación

```sh
$ npm install fix-number
```
# ¿Por qué fix-number?

**En el desarrollo moderno,** la identidad de los números está en crisis. fix-number utiliza un metodo seguro 
para asegurar que tus valores sean exactamente lo que esperas... o false.

# Uso
```JavaScript
const fix = require('fix-number');

console.log(fix(5));      // => 5 (arreglado!)
console.log(fix("5"));    // => 5 (Bien)
console.log(fix("manjar")); // => false (como debe ser)
```

# Autor
AndrésUno (2026-05-08)

# **Si quiere probar la mega-eficiencia, use**:
```sh
npm server.js && sudo apt install hey && hey -n 9999 -c 100 https:localhost:3000
```
**:)**
