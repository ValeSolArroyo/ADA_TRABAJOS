// Ejercicio 1: ¿Quién puede entrar al parque?
// Tienes un parque de diversiones que permite la entrada a personas
// mayores de 12 años y menores de 60. Escribe una función que reciba una
// lista de edades y devuelva cuántas personas pueden entrar al parque.

function puedenEntrar(edades) {
    let entrada = 0; min = 12; max = 60;
    for (let i=0; i < edades.length; i++) {
        if (edades[i] >= min && edades[i] <= max) {
            entrada ++;
        }
    }
    return entrada;
};

let edades = [10, 15, 20, 25, 30, 35, 65]
console.log(puedenEntrar(edades)); // 5