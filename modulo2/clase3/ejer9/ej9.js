// Actividad 9: Registro de eventos
// Consigna: Crea un programa para registrar eventos. El programa debe
// permitirte:
// 1. Agregar un evento: Registrar un evento con nombre, fecha y
// lugar.
// 2. Listar los eventos: Mostrar todos los eventos registrados.
// 3. Eliminar un evento: Eliminar un evento de la lista.

const fs = require('fs');
const filePath = './eventos.json'

function leerRegistro() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const data = fs.readFileSync(filePath, 'utf-8')
    try {
        return JSON.parse(data || '[]')
    } catch (error) {
        console.log('No se puedo leer el archivo');
        return [];
    }
};

function escribirRegistro(evento) {
    fs.writeFileSync(filePath, JSON.stringify(evento,null,2))
};

function añadirEvento(nombre, fecha, lugar) {
    const eventos = leerRegistro();
    eventos.push({id: eventos.length+1, nombre, fecha, lugar});
    escribirRegistro(eventos);
    console.log('Se agrego el  evento');
};

function listar() {
    const eventos = leerRegistro();
    console.log('Listado:');
    eventos.forEach(evento => {
        console.log(`${evento.id}. ${evento.nombre}: (${evento.fecha}) - ${evento.lugar}`); 
    });
}

function eliminar(idEvento) {
    let eventos = leerRegistro();
    eventos = eventos.filter(evento => evento.id !== idEvento);
    escribirRegistro(eventos);
    console.log('Se elimino el evento');
};


añadirEvento('Cumpleaños de Juan', '2022-12-25', 'Paris');
añadirEvento('Reunión de equipo', '2022-12-30', 'Casa de la Rosa');
listar();
eliminar(2);
listar();