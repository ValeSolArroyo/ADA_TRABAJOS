// Ejercicio 11: Sistema de gestión de contactos

// Consigna:
// Imagina que estás desarrollando una miniaplicación para gestionar
// contactos. Tu objetivo es:
// 1. Crear un archivo llamado contactos.json que almacene una lista de
// contactos.
// 2. Implementar funciones para:
// o Agregar un contacto: Cada contacto debe tener nombre,
// teléfono y email.
// o Listar todos los contactos.
// o Buscar un contacto por nombre.
// 3. Asegúrate de que los contactos no se repitan (valida el nombre
// antes de agregarlo).

const fs = require('fs');
const filePath = './contactos.json';

function leerContactos() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    };
    const data = fs.readFileSync(filePath, 'utf-8')
    try {
        return JSON.parse(data || '[]')
    } catch (error) {
        console.log('No se pudo leer el archivo', error.message);
        return [];
    };
};

function escribirContactos(contacto) {
    fs.writeFileSync(filePath, JSON.stringify(contacto,null, 2));
};

function agregarContacto(nombre, telefono, mail) {
    const contactos = leerContactos();
    if (contactos.some(contacto => contacto.nombre === nombre)) {
        console.log('El nombre del contacto ya existe');
        return;
    }
    contactos.push({id: contactos.length + 1, nombre, telefono, mail});
    escribirContactos(contactos);
    console.log('Contacto agregado con éxito');
};

function listarContactos() {
    const contactos = leerContactos();
    console.log('Listado de contactos:');
    contactos.forEach(contacto => {
        console.log(`${contacto.id}. ${contacto.nombre} - ${contacto.telefono} - ${contacto.mail}`);
    });
};

function buscarContactoPorNombre(nombre) {
    const contactos = leerContactos();
    const contactoEncontrado = contactos.find(contacto => contacto.nombre === nombre);
    if (contactoEncontrado) {
        console.log(`Contacto encontrado: ${contactoEncontrado.nombre} - ${contactoEncontrado.telefono} - ${contactoEncontrado.mail}`);
    } else {
        console.log('No se encontró el contacto');
    }
};

// Ejemplos de uso:

agregarContacto('Juan', '123456789', 'juan@example.com');
agregarContacto('Pedro', '987654321', 'pedro@example.com');

listarContactos();

buscarContactoPorNombre('Juan');