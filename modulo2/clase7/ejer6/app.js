// Ejercicio 6: Servidor de Comandos
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar comandos
// simples. Dependiendo del comando recibido, el servidor debe realizar
// una acción específica:
// • Si el cliente envía "fecha", el servidor debe responder con la fecha y
// hora actual.
// • Si el cliente envía "ip", el servidor debe responder con la dirección
// IP del cliente.
// • Si el cliente envía "salir", el servidor debe cerrar la conexión.
// • Para cualquier otro comando, el servidor debe responder
// "Comando no reconocido".

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado');
    
    socket.on('data', (data) => {
        const comando = data.toString().trim();

        switch(comando) {
            case 'fecha':
                socket.write(`Fecha y hora: ${new Date().toLocaleDateString()}`);
                break;
            case 'ip':
                socket.write('IP cliente: ', socket.remoteAddress);
                break;
            case 'salir':
                socket.write('Se cierra la conexión')
                socket.end();
                break;
            default:
                socket.write('Comando no reconocido')
        };
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(5000, () => {
    console.log('Servidor escucha en el puerto 5000');
});