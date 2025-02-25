//Ejer 1
const net = require('net');

const client = net.createConnection({port: 5000, host: 'localhost'});

client.on('connection', () => {
    console.log('Conectado al servidor');
    client.write('Hola, servidor!');
})

client.on('data', (data) => {
    console.log(`Datos recibidos del servidor: ${data.toString()}`);
    client.end();
})

//Ejer 2
client.setTimeout(5000, () => {
    console.log('Tiempo de espera agotado');
    client.end();
})

//Ejer 3
client.on('data', (data) => {
    console.log(`Datos recibidos del servidor: ${data.toString}`);
    client.pause();
    setTimeout(() => {
        console.log('Reanudando recepción de datos');
        client.resume();
    }, 3000);
});

//Ejer 4
client.on('error', (err) => {
    console.error('Error:', err.message);
    client.end();
});

client.on('close', () => {
    console.log('Conexión cerrada inesperadamente');
});

//Ejer 5 
client.write('¿Sigues ahí, servidor?');

client.on('end', () => {
    console.log('Servidor cerró la conexión');
})

//Ejer 6
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function enviarMensaje() {
    rl.question('Ingresa un mensaje: ', (mensaje) => {
        if (mesaje === 'salir') {
            client.end();
            rl.close();
        } else {
            client.write(mensaje);
            enviarMensaje();
        }
    });
};
client.on('connect', enviarMensaje()); 

//Ejer 7
client.on('error', () => {
    console.log('Conexión destruida');
    client.destroy();
});

//Ejer 8
client.unref();
setTimeout(() => {
    client.ref();
}, 5000);

//Ejer 9
function reconentar() {
    setTimeout(() => {
        console.log('Intentando reconexión...');
        client.connect({port: 5000, host: 'localhost'});
    }, 3000);
};

client.on('error', reconectar());

//Ejer 10
setTimeout(() => {
    console.log('No hay datos del servidor');
    client.end();
}, 10000)