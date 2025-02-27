// DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado

// Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras
// 20 segundos.
// El cliente debe:
// Conectarse y enviar un mensaje inicial.
// Enviar un mensaje "Mensaje automático" cada 5 segundos.
// Escuchar el evento 'data' y mostrar los datos recibidos.
// Cerrar la conexión con client.end() tras 20 segundos.

const net = require('net');

const client = net.createConnection({port:5000, host:'localhost'});

client.write('Hola, servidor!');

let timerId = setInterval(() => {
    client.write('Mensaje automático');
}, 5000);

client.on('data', (data) => {
    console.log('Servidor dice:', data.toString());
});

setTimeout(() => {
    clearInterval(timerId);
    client.end();
}, 20000);