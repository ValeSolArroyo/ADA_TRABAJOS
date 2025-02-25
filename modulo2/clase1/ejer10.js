// Ejercicio 10: Invertir palabras
// Crea una función que reciba una cadena de texto y devuelva otra cadena
// con las palabras en orden inverso.

function invertir(cadena) {
    let palabras = cadena.split(" ");
    let invertida = palabras.reverse().join(" ");
    return invertida;
};

let cadena = "programar es divertido";
console.log(invertir(cadena));
