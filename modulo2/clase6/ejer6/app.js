// Consigna:
// Escribe un programa interactivo que solicite varias palabras al usuario y las muestre
// en mayúsculas. El programa finalizará cuando el usuario escriba "salir".
// Requisitos del programa:
// 1. Usa rl.setPrompt() para personalizar el mensaje que se muestra al
// usuario.
// 2. Usa el evento 'line' para procesar cada palabra que el usuario
// ingrese.
// 3. Si el usuario escribe "salir", el programa debe despedirse y finalizar.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt('Escribe una palabra o "salir" para terminar: ');
rl.prompt();

rl.on('line', (input) => {
    if (input.toLowerCase() ==='salir') {
        console.log('Adiós!');
        rl.close();
    } else {
        console.log('Palabra en mayúscula: ',input.toUpperCase());
        rl.prompt();
    }
})

rl.on('close', () => {
    process.exit(0);
})