// Ejercicio 1: Servidor de Eco
// Consigna:
// Crea un servidor TCP que actúe como un servidor de eco. Cuando un
// cliente se conecte, el servidor debe recibir los datos enviados por el
// cliente y devolverlos exactamente igual (hacer un "eco"). Además, el
// servidor debe imprimir en la consola cada vez que un cliente se conecta,
// desconecta o envía datos.

const net = require('net')

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado');
    
    socket.on('data', (data) => {
        console.log('Datos recidos: ', data.toString);
        socket.write(data)
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('close', () => {
        console.log('Conexión cerrada');
    });
});

server.listen(5000, () => {
    console.log('Servidor escucha en el puerto 5000');
})