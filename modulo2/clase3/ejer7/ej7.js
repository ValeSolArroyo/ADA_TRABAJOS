// Actividad 7: Control de tareas diarias
// Consigna: Crea un programa para gestionar tus tareas diarias. El
// programa debe permitirte:
// 1. Agregar una tarea diaria: Registrar una nueva tarea con su
// descripción y estado.
// 2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
// 3. Marcar una tarea como completada: Cambiar el estado de una
// tarea de "pendiente" a "completada".

const fs = require('fs');
const filePath = './tareasDiarias.json';

function leerTareas() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const data = fs.readFileSync(filePath, 'utf-8')
    try {
        return JSON.parse(data || '[]')
    } catch (error) {
        console.log('Error al leer el archivo');
        return [];
    }
};

function escribirTareas(tarea) {
    fs.writeFileSync(filePath, JSON.stringify(tarea,null,2),'utf-8')
};

function añadirTarea(descripción, estado) {
    const tareas = leerTareas();
    tareas.push({id: tareas.length + 1, descripción, estado});
    escribirTareas(tareas);
    console.log('Se agrego la tarea');
};

function listarTarea() {
    const tareas = leerTareas();
    console.log('Listado de tareas:');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripción} - ${tarea.estado}`);
    });
};

function marcarTarea(idTarea) {
    const tareas = leerTareas();
    const tareaEncontrada = tareas.find(tarea => tarea.id === parseInt(idTarea));
    if (tareaEncontrada) {
        tareaEncontrada.estado = tareaEncontrada.estado === 'pendiente'? 'completada' : 'pendiente';
        escribirTareas(tareas);
        console.log('Tarea marcada como completada');
    } else {
        console.log('No se encontró la tarea');
    }
};

// Ejemplos de uso

añadirTarea('Comprar pan', 'pendiente');
listarTarea();
marcarTarea(1);
listarTarea();