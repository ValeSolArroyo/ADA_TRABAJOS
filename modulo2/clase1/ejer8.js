// Ejercicio 8: Contador de letras
// Crea una función que reciba una cadena de texto y una letra, y devuelva
// cuántas veces aparece esa letra en la cadena.

function contarLetra(texto, letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == letra) {
            contador++;
        };
    };
    return contador;
}

let texto = "Hola mundo";
console.log(contarLetra(texto, 'o')); // 2