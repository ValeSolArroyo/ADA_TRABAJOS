// Ejercicio 7: Filtrar palabras largas
// Escribe una función que reciba un array de palabras y un número, y
// devuelva las palabras que tienen más caracteres que el número dado.

function masCaracteres(palabras, num) {
    return palabras.filter(palabra => palabra.length > num);
};

let palabras = ['hola', 'mundo', 'esto', 'es', 'un', 'ejemplo'];

console.log(masCaracteres(palabras, 4));