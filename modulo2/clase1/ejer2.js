// Ejercicio 2: El menú del día 🍽️
// Escribe una función que reciba un objeto con platos y precios, y devuelva
// los platos cuyo precio sea menor a $20

function platosBaratos(menu) {
    let precio = 20;
    let baratos = [];
    for (let plato in menu) {
        if (menu[plato] <= precio) {
            baratos.push(plato);
        }
    }
    return baratos;
};

let menu = {
    "pizza": 24,
    "ensalada": 10,
    "pasta": 20,
    "cafe": 5,
    "postre": 8
}

console.log(platosBaratos(menu)); // ["ensalada", "pasta", "cafe", "postre"]