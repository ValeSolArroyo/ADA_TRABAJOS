// Ejercicio 1: Crear el servidor básico
// Objetivo: Configurar un servidor TCP que escuche en el puerto 5000

const net = require('net');
let clientesConectados = 0;

const server = net.createServer((socket) => {
    clientesConectados++

    console.log('¡Un cliente se ha conectado! Clientes conectados: ', clientesConectados);
    
    //Manejar datos recibidos
    socket.on('data', (data) => {
        console.log('Datos recibidos: ', data.toString()); // Un buffer es una forma especial que usa Node para manejar datos binarios. Cuando el servidor recibe datos del cliente, llegan como un buffer. Para convertirlo en texto legible, utilizaremos el método .toString()
        
        //Enviar mensaje al cliente
        socket.write('Hola cliente');
    });

    //Manejar el cierre de conexión
    socket.on('end', () => {
        clientesConectados--
        console.log('Cliente desconectado');
    });

});

server.listen(5000, () => {
    console.log('Servidor escucha en el puerto 5000');   
});