// Ejercicio 12: Sistema de registro de tareas
// Consigna:
// Crea un programa que maneje un archivo tareas.json con las siguientes
// funcionalidades:
// 1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y
// estado (pendiente o completa).
// 2. Completar una tarea: Cambia el estado de una tarea a completa.
// 3. Listar tareas por estado: Muestra las tareas agrupadas por su
// estado (pendiente o completa).
//  Pista: Utiliza métodos como filter y map para manipular la lista de
// tareas.

const fs = require('fs');
const filePath = './tareas.json';

function leerTareas() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const data = fs.readFileSync(filePath, 'utf8');
    try {
        return JSON.parse(data || '[]');
    } catch (error) {
        console.error('Error leyendo el archivo de tareas:', error);
        return [];
    }
}

function escribirTareas(tareas) {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2));
}

function agregarTarea(nombre, descripcion, estado) {
    const tareas = leerTareas();
    tareas.push({ id: tareas.length + 1, nombre, descripcion, estado });
    escribirTareas(tareas);
    console.log('Tarea agregada exitosamente');
}

function completarTareas(tareas) {
    const completadas = tareas.filter((tarea) => tarea.estado === 'completa');
    
};