// Ejercicio 2: Conversión de Objetos JavaScript a JSON
let estudiantes = {
    nombre: "Valentina",
    edad: 20,
    curso: "Javascript",
    notas: [7, 9, 10, 8]
};

let json = JSON.stringify(estudiantes); //JS -> JSON
console.log(json);

let objeto = JSON.parse(json); // JSON -> JS
console.log(objeto);

