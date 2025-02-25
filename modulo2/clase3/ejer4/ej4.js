// Actividad 4: Control de inventario
// Consigna: Crea un programa para llevar el control de un inventario. El
// programa debe permitirte:
// 1. Agregar un producto: Registrar un producto con su nombre y
// cantidad disponible.
// 2. Listar los productos: Mostrar todos los productos registrados.
// 3. Actualizar la cantidad de un producto: Modificar la cantidad de
// un producto en el inventario.

const fs = require('fs');
const filepath = './productos.json';


// Leer productos
function leerProductos() {
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, '[]');
  };
  const data = fs.readFileSync(filepath, 'utf-8');
  try {
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error.message);
    return [];
  }
};

// Escribir productos
function escribirProductos (producto) {
    fs.writeFileSync(filepath, JSON.stringify(producto, null, 2));
};

// Agregar producto
function agregarProducto (producto, cant) {
    const productos = leerProductos();
    productos.push({id: productos.length + 1, nombre: producto, cantidad: cant});
    escribirProductos(productos);
    console.log(`El producto "${producto}" ha sido agregado con éxito.`);
};

// Listar productos
function listarProductos() {
    const productos = leerProductos();
    console.log('Listar productos: ');
    productos.forEach(producto => {
        console.log(`${producto.id}. ${producto.nombre} - ${producto.cantidad}`);
    });
    
}

// Actualizar cantidad de producto
function actualizarcantidad(idProducto, cant) {
    const productos = leerProductos();
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        producto.cantidad = cant;
        escribirProductos(productos);
        console.log(`La cantidad de "${producto.nombre}" ha sido actualizada.`);
    } else {
        console.log('Producto no encontrado.');
    }
}

agregarProducto('manzana', 4);
listarProductos();
actualizarcantidad(1, 3);
listarProductos();