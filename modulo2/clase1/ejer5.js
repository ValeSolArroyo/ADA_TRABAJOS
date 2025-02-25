// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.

function generarIniciales(nombre) {
    let iniciales = nombre.split(" "); // ['juan', 'cruz']
    for (let i = 0; i < iniciales.length; i++) {
        iniciales[i] = iniciales[i][0].toUpperCase();
    }
    return iniciales.join("");

};

let nombre = "juan cruz"
console.log(generarIniciales(nombre));
