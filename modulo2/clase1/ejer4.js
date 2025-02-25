// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.

function contarVocales(texto) {
    let vocales = ['a', 'e', 'i', 'o', 'u']
    texto = texto.toLowerCase();
    let contador = 0
    for (let i=0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
};

let texto = "HoLA mundO";
console.log(contarVocales(texto));
