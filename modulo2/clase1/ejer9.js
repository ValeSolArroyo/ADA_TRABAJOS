// Ejercicio 9: Números únicos
// Escribe una función que reciba un array de números y devuelva un nuevo
// array sin números repetidos.


// Set colección de valores únicos (no duplicados)

function numerosUnicos2(numeros) {
    return [...new Set(numeros)]; // convierte un set a un array
};

let numeros = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6];
console.log(numerosUnicos2(numeros));