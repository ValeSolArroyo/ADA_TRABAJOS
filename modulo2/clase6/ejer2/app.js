// Consigna:
// En este ejercicio, escribirás un programa que muestre información útil
// sobre el entorno donde se está ejecutando el programa.
// Requisitos del programa:
// 1. Debe mostrar la plataforma del sistema operativo (Linux, macOS o
// Windows).
// 2. Debe mostrar el directorio actual desde donde se ejecuta el
// programa.
// 3. Usa los métodos process.platform y process.cwd() para obtener
// esta información.

const plataforma = process.platform
const directorio = process.cwd()


console.log(`Plataforma: ${plataforma}`);
console.log(`Directorio: ${directorio}`);
