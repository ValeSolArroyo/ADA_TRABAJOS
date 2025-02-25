// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El
// programa debe permitirte:
// 1. Agregar una tarea: Registrar una tarea pendiente con su
// descripción.
// 2. Listar las tareas: Mostrar todas las tareas registradas.
// 3. Eliminar una tarea: Eliminar una tarea de la lista.

const fs = require('fs');
const filePath = './tareas.json';

// Leer tareas
function leerTarea() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    };
    const data = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(data || '[]');
    } catch (error) {
        console.error('Error al leer el archivo JSON: ', error.message);
        return [];
    }
};

// Escribir tareas en el archivo
function escribirTarea(tareas) {
    fs.writeFileSync(filePath, JSON.stringify(tareas,null,2))
}

// Añadir tarea
function añadirTarea(descrip) {
    const tareas = leerTarea();
    tareas.push({id: tareas.length + 1, descripcion: descrip});
    escribirTarea(tareas);
};

// Listar tareas
function listarTareas() {
    const tareas = leerTarea();
    console.log('Listado de tareas:');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripcion}`);
    });
};

// Eliminar tarea
function eliminarTarea(idTarea) {
    let tareas = leerTarea();
    tareas = tareas.filter(tarea => tarea.id !== idTarea);
    escribirTarea(tareas);
    console.log('Tarea eliminada');
};

añadirTarea('Comprar pan');
listarTareas();
eliminarTarea(1);
listarTareas()