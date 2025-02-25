/* Ejercicio 7: Servidor de Chat Grupal
Consigna:
Crea un servidor TCP que permita a múltiples clientes conectarse y enviar
mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a
todos los demás clientes conectados. El servidor debe notificar cuando
un cliente se conecta o desconecta.
 */

const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado');
    
    clients.push(socket);
    
    clients.forEach((client) => {
        client.write(`Nuevo cliente conectado: ${clients.length}\n`);
    });
    
    socket.on('data', (data) => {
        console.log('Datos recibidos: ', data.toString());
        
        clients.forEach((client) => {
            client.write(data);
        });
    });
    
    socket.on('end', () => {
        console.log('Cliente desconectado');
        clients.splice(clients.indexOf(socket), 1);
    });
})

server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});

