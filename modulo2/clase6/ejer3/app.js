// Tu tarea es escribir un programa interactivo que permita al usuario
// ingresar dos números y calcule su suma. Este ejercicio te ayudará a
// practicar el uso del módulo readline para leer entradas del usuario en la
// consola.
// Requisitos del programa:
// 1. Usa el módulo readline para crear una interfaz interactiva.
// 2. Pide al usuario que ingrese dos números, uno a la vez.
// 3. Calcula y muestra la suma de los dos números.
// 4. Finaliza el programa con un mensaje de agradecimiento.

const readline = require('readline');

const rl = readline.createInterface({ // Interfaz
    input: process.stdin,
    output: process.stdout,
});

rl.question('Primer num: ', (num1) => {
    rl.question('Segundo num: ', (num2) => {
        const suma = parseFloat(num1) + parseFloat(num2);
        console.log('La suma es ', suma);
        rl.close();
    })
})

rl.on('close', () => {
    console.log('Se cierra el programa');
    process.exit(0)
})

