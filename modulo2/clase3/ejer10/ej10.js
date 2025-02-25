// Actividad 10: Gestión de compras
// Consigna: Crea un programa que registre las compras realizadas. El
// programa debe permitirte:
// 1. Agregar una compra: Registrar una compra con su nombre y
// precio.
// 2. Listar las compras: Mostrar todas las compras registradas.
// 3. Eliminar una compra: Eliminar una compra de la lista.

const fs = require('fs');
const filePath = './compras.json';

function leerCompras() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(data || '[]');
    } catch (error) {
        console.error('Error leyendo compras:', error.message);
        return [];
    }
}

function escribirCompras(compras) {
    fs.writeFileSync(filePath, JSON.stringify(compras, null, 2));
}


function agregarCompra(nombre, precio) {
    const compras = leerCompras();
    compras.push({ id: compras.length + 1, nombre, precio });
    escribirCompras(compras);
    console.log(`Compra agregada: ${nombre} - ${precio}`);
}

function listarCompras() {
    const compras = leerCompras();
    console.log('Listado de compras:');
    compras.forEach((compra) => {
        console.log(`${compra.id}. ${compra.nombre} - $${compra.precio}`);
    });
}

function eliminarCompra(idCompra) {
    let compras = leerCompras();
    compras = compras.filter(compra => compra.id !== idCompra);
    escribirCompras(compras);
    console.log('Compra eliminada');
};


agregarCompra('Pan', 1.5);
agregarCompra('Leche', 2);
listarCompras();
eliminarCompra(1);
listarCompras();