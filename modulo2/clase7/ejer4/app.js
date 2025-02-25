// Ejercicio 4: Servidor con Manejo de Errores
// Consigna:
// Crea un servidor TCP que maneje errores de conexión de manera
// adecuada. Si ocurre un error en la conexión con un cliente, el servidor
// debe imprimir un mensaje de error en la consola y cerrar la conexión con
// ese cliente. Además, el servidor debe seguir funcionando y aceptando
// nuevas conexiones.

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado');
    
    socket.on('data', (data) => {
        console.log('Datos recibidos: ', data.toString());
        socket.write(data);
    });
    
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error(`Error en la conexión con el cliente: ${err.message}`);
        socket.destroy();
    });
});

server.listen(5000, () => {
    console.log('Servidor escucha en el puerto 5000');
});