// DESAFÍO 7: Cliente con Envío de Comandos, Validación y AutoDesconexión
//  Objetivo: Implementar un cliente TCP que permita al usuario ingresar
// comandos desde la terminal, los valide antes de enviarlos y cierre la
// conexión si se recibe una respuesta específica del servidor.
//  El cliente debe:
//  Conectarse al servidor en el puerto 5000.
//  Leer la entrada del usuario desde la terminal con readline.
//  Solo permitir comandos que empiecen con CMD_ (ejemplo:
// CMD_HOLA, CMD_ADIOS).
//  Enviar los comandos al servidor solo si son válidos.
//  Escuchar respuestas del servidor.
//  Si el servidor responde "EXIT", cerrar la conexión y terminar el
// programa.
//  PISTA: Usen readline para capturar la entrada del usuario y RegExp
// para validar los comandos.

const net = require('net');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = net.createConnection({port:5000, host:'localhost'});

client.write('Hola, servidor!');

client.on('data', (data) => {
    console.log('Datos recibidos:', data.toString());

    if (data.toString().trim() === 'EXIT') {
        console.log('Cerrando conexión...');
        client.end();
        rl.close();
    }
})  

client.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});

client.on('close', () => {
    console.log('Conexión cerrada');
    rl.close();
});

rl.on('line', (input) => {
    let comando = input.trim().toUpperCase();

    if (/^CMD_\w+$/.test(comando)) {
        client.write(comando + '\n');
    } else {
        console.log('Comando inválido. Ingrese un comando válido empezando con CMD_');
    }
});



