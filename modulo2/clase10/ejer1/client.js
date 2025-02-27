const net = require('net');
const readline = require('readline');

const client = net.createConnection({port: 5000, host: 'localhost'});

client.on('connect', () => {
    console.log('Connectedado al servidor');
    sendLine();
});

client.on('data', (data) => {
    console.log('Servidor respondió: ', data.toString());
    sendLine();
});

client.on('close', () => {
    console.log('Desconectado del servidor');
});

client.on('error', (err) => {
    console.error('Error:', err);
})

function sendLine(){
    let line = readline.question('Ingrese un mensaje: ');
    if (line == '0'){
        client.end();
    } else {
        client.write(line);
    }
}