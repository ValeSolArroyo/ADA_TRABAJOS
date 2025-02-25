// Actividad 5: Registro de contactos
// Consigna: Crea un programa que permita registrar contactos con
// nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1. Agregar un contacto: Registrar un nuevo contacto.
// 2. Listar los contactos: Mostrar todos los contactos registrados.
// 3. Eliminar un contacto: Eliminar un contacto de la lista

const fs = require('fs');
const filePath = './contactos.json';

// Leer contactos
function leerContactos() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const data = fs.readFileSync(filePath, 'utf8');
    try {
        return JSON.parse(data || '[]')
    } catch (error) {
        console.log('Error al leer el archivo', error.message);
        return [];
    }
}

// Escribir los contactos en el archivo
function escribirContactos(contacto) {
    fs.writeFileSync(filePath, JSON.stringify(contacto,null,2), 'utf-8');
};

// Agregar contactos
function agregarContactos(nombre, telefono, correo) {
    const contactos = leerContactos();
    contactos.push({id: contactos.length + 1, nombre, telefono, correo});
    escribirContactos(contactos);
    console.log('Se agrego el contacto');
};

// Listar contactos
function listarContactos() {
    const contactos = leerContactos();
    console.log('Listado de contactos: ');
    
    contactos.forEach((contacto, i) => {
        console.log(`${contacto.id}. ${contacto.nombre} - ${contacto.telefono} - ${contacto.correo}`);
    });
};

// Eliminar contacto
function eliminarContacto(idContacto) {
    let contactos = leerContactos();
    contactos = contactos.filter((contacto) => contacto.id !== idContacto);
    escribirContactos(contactos);
    console.log(`Se elimino el contacto`);
    
};

agregarContactos('cata', '1169525468', 'cata@gmail.com')
listarContactos();
eliminarContacto(1);
listarContactos();