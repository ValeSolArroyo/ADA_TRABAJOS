// Ejercicio 6: Calculadora de promedio
// Escribe una función que reciba un array de números y devuelva el
// promedio.

function calcularPromedios(calificaciones) {
    let suma = 0; promedios = [];
    for (num in calificaciones) {
        suma += calificaciones[num];
        promedio = suma / calificaciones.length;
    };
    return promedio;
};

let calificaciones = [5, 7, 4, 10, 9, 8];
console.log(calcularPromedios(calificaciones));
