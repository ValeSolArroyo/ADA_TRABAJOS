// Actividad 6: Gestión de un diario personal
// Consigna: Crea un programa que te permita gestionar un diario
// personal. El programa debe permitirte:
// 1. Agregar una entrada al diario: Registrar una nueva entrada con
// la fecha y el texto.
// 2. Listar las entradas: Mostrar todas las entradas registradas.
// 3. Eliminar una entrada: Eliminar una entrada específica por su ID.

const fs = require('fs');
const filePath = './diario.json'; 

function leerDiario() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(data || '[]');
    } catch (error) {
        console.log('Error al leer el archivo');
        return [];
    }
};

function escribirDiario(diario) {
    fs.writeFileSync(filePath, JSON.stringify(diario,null,2), 'utf-8');
}

function añadirEntrada(fecha, texto) {
    const diario = leerDiario();
    diario.push({id: diario.length+1, fecha, texto})
    escribirDiario(diario);
    console.log('Se agrego una nota al diario');
}

function listarEntrada() {
    const diario = leerDiario();
    console.log('Listado de entradas del diario: ');
    diario.forEach((d) => {
        console.log(`${d.id}. ${d.fecha}: ${d.texto}`);
    });
};

function eliminarEntrada(idEntrada) {
    let entradas = leerDiario(); 
    entradas = entradas.filter(entrada => entrada.id !== idEntrada); 
    escribirDiario(entradas); 
    console.log(`Entrada eliminada.`);
};
añadirEntrada('20-01-25', 'Hoy compre un celular nuevo')
listarEntrada();
eliminarEntrada(2);
listarEntrada()