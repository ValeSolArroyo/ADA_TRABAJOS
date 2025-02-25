// Consigna:
// Crea un programa interactivo que permita convertir temperaturas de
// grados Celsius a Fahrenheit. Además, incluye un mensaje personalizado de bienvenida
// configurado a través de variables de entorno.
// Requisitos del programa:
// 1. Usa una variable de entorno llamada WELCOME_MESSAGE para
// mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al
// conversor de temperaturas!" por defecto.
// 2. Usa el módulo readline para solicitar al usuario una temperatura en
// grados Celsius.
// 3. Calcula la conversión a Fahrenheit usando la fórmula:
// (Se pueden ayudar buscando como es la fórmula en código en
// internet)
// 4. Muestra el resultado en la consola.
// 5. Despídete del usuario al final. 

const readline = require('readline');
require('dotenv').config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE || 'Bienvenido al conversor de temperaturas!';

console.log(WELCOME_MESSAGE);

rl.question('Temp. en grados celcius: ', (celcius) => {
    const celsius = parseFloat(celcius);
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`La temperatura en grados fahrenheit es: ${fahrenheit}`);
    rl.close();
})

rl.on('close', () => {
    console.log('Hasta luego!');
    process.exit(0);
});

