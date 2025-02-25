// Actividad 8: Seguimiento de proyectos
// Consigna: Crea un programa para gestionar proyectos. El programa debe
// permitirte:
// 1. Agregar un proyecto: Registrar un proyecto con su nombre y
// estado (en progreso o en progreso).
// 2. Listar los proyectos: Mostrar todos los proyectos registrados.
// 3. Actualizar el estado de un proyecto: Cambiar el estado de un
// proyecto a "finalizado" o "en progreso".

const fs = require('fs');
const filePath = './proyectos.json';

function leerProyecto() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    };
    const data = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(data || '[]');
    } catch (error) {
        console.log('No se pudo leer el archivo', error.mesagge);
        return [];
    }
};

function escribirProyectos(proyecto) {
    fs.writeFileSync(filePath, JSON.stringify(proyecto,null,2));
};

function añadirProyecto(nombre, estado) {
    const proyectos = leerProyecto();
    proyectos.push({id: proyectos.length+1, nombre, estado})
    escribirProyectos(proyectos)
    console.log('Se agregó el proyecto con exito');
};

function listar() {
    const proyectos = leerProyecto();
    proyectos.forEach(proyecto => {
        console.log(`${proyecto.id}. ${proyecto.nombre}: ${proyecto.estado}`); 
    });
};

function estadoProyecto(idProyecto) {
    const proyectos = leerProyecto();
    const proyectoFind = proyectos.find(proyecto => proyecto.id === parseInt(idProyecto));
    if (proyectoFind) {
        proyectoFind.estado = proyectoFind.estado === 'en progreso' ? 'finalizada' : 'en progreso'
        escribirProyectos(proyectos);
        console.log('El estado del proyecto se actualizó con éxito');
    } else {
        console.log('No se encontro el proyecto');
    }
};



añadirProyecto('Proyecto 1', 'en progreso');
listar();
estadoProyecto(1);
listar();