// Ejercicio 4: Ordenar una Lista de Números
// Crea un script en Node.js que permita al usuario ingresar una lista de
// números separados por comas. Ordena los números de menor a mayor y
// muestra la lista ordenada.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una lista de números separados por comas: ', (input) => {
    const numbers = input.split(',').map(Number);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    console.log('La lista ordenada es:', sortedNumbers);
    rl.close();
});

rl.on('close', () => {
  console.log('Adiós!');
  process.exit(0);
});
