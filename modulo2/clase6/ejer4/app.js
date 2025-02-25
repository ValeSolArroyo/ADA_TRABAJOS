// Consigna:
// Crea un programa interactivo que pregunte al usuario su nombre y lo
// use en un mensaje de despedida. Usa variables de entorno para
// personalizar el saludo inicial.
// Requisitos del programa:
// 1. Usa una variable de entorno llamada START_MESSAGE para
// configurar el saludo inicial.
// 2. Usa readline para preguntar el nombre del usuario.
// 3. Despídete del usuario con un mensaje personalizado.

const readline = require('readline');
require('dotenv').config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const START_MESSAGE = process.env.START_MESSAGE || 'Hola!';

rl.question('¿Cómo te llamas? ', (name) => {
    console.log(`${START_MESSAGE}`);
    console.log(`Hasta luego ${name}!`);
    
    rl.close();
});



rl.on('close', () => {
    console.log('Se cierra el programa');
    process.exit(0);
})