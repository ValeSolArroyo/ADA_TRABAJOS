// Actividad 1: Registro de libros favoritos
// Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos en un archivo JSON. Implementa las siguientes funciones:
// 1. Agregar un libro: Se debe agregar un libro a la lista de favoritos Para esto, el libro tendrá solo un campo: su nombre.
// 2. Listar los libros: Muestra todos los libros registrados.

const fs = require('fs');
const filePath = './libros.json';

// Leer libro desde el archivo
function leerLibro() {
    if (!fs.existsSync(filePath)) { // Si el archivo existe, crea un archivo vacio con un arreglo
        fs.writeFileSync(filePath, '[]');
    }
    const data = fs.readFileSync(filePath, 'utf8');
    try {
        return JSON.parse(data || '[]'); // Parceamos el archivo o devolvemos un arreglo vacio
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return []; // Retorna un arreglo vacio si da error
    }
}

// Escribir libros en el archivo
function escribirLibro(libro) {
    fs.writeFileSync(filePath, JSON.stringify(libro, null, 2), 'utf8');
};

// Agregar un archivo
function agregarLibro(nomLibro){
    const libros = leerLibro();
    libros.push({id: libros.length + 1, nombre: nomLibro});
    escribirLibro(libros);
    console.log(`El libro "${nomLibro}" ha sido agregado.`);
}

// Listar lo libros
function listarLibros() {
    const libros = leerLibro();
    console.log('Libros favoritos:');
    libros.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro.nombre}`);
    });
};

agregarLibro('La odisea');
listarLibros();