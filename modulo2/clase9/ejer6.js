// DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo
// de Fallos
//  Objetivo: Crear un cliente TCP que intente reconectarse si la
// conexión se pierde, pero que abandone después de 5 intentos fallidos.
//  El cliente debe:
//  Intentar conectarse al servidor.
//  Si se desconecta, volver a intentar cada 2 segundos.
//  Llevar un contador de intentos fallidos.
//  Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de
// error.
//  Manejar adecuadamente los eventos 'error', 'close' y 'data'.
//  PISTA: Usen un contador global de intentos y un setTimeout() para
// gestionar los reintentos.

const net = require('net');

let intentosFallidos = 0;

const client = net.createConnection({port:5000, host:'localhost'});

client.write('Hola, servidor!');

client.on('data', (data) => {
    console.log(`Recibido: ${data.toString()}`);
});

client.on('error', (err) => {
    console.log(`Error: ${err.message}`);
});

client.on('close', () => {
    console.log('Conexión cerrada');
    intentosFallidos++;
    if (intentosFallidos >= 5) {
        console.log('Se han superado los intentos fallidos, terminando el proceso');
        process.exit(1);
    }
    setTimeout(() => {
        console.log('Intentando reconectar...');
        client.connect({port:5000, host:'localhost'});
    }, 2000);
});