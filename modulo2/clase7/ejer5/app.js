// Ejercicio 5: Servidor con Contador de Conexiones
// Consigna:
// Crea un servidor TCP que lleve un contador de cuántos clientes se han
// conectado. Cada vez que un nuevo cliente se conecta, el servidor debe
// enviarle un mensaje indicando cuántos clientes se han conectado hasta
// ese momento. Cuando un cliente se desconecta, el servidor debe reducir
// el contador.

const net = require('net');

let clientesConectados = 0;

const server = net.createServer((socket) => {
    clientesConectados++;
    console.log('Un cliente se ha conectado! Clientes conectados: ', clientesConectados);
    
    socket.on('data', (data) => {
        console.log('Datos recibidos: ', data.toString());
        socket.write(`Clientes conectados: ${clientesConectados}`);
    });
    
    socket.on('end', () => {
        clientesConectados--;
        console.log('Cliente desconectado! Clientes conectados: ', clientesConectados);
    });
    
    socket.on('close', () => {
        console.log('Conexión cerrada');
    });
});

server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});