// Ejercicio 3: Servidor de Mensajes Personalizados
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar mensajes. El
// servidor debe responder con un mensaje personalizado dependiendo
// del contenido del mensaje recibido:
// • Si el cliente envía "Hola", el servidor debe responder
// "¡Bienvenido!".
// • Si el cliente envía "Adiós", el servidor debe responder "¡Hasta
// luego!" y cerrar la conexión.
// • Para cualquier otro mensaje, el servidor debe responder "Mensaje
// recibido: [mensaje del cliente]".

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('data', (data) => {
        const message = data.toString().trim();

        if (message === 'Hola') {
            socket.write('Bienvenido!');
        } else if (message === 'Adiós') {
            socket.write('Hasta luego!');
            socket.end();
        } else {
            socket.write(`Mensaje recibido: ${message}`);
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});