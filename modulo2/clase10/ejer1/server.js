const net = requiere('net');

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    
    socket.on('data', (data) => {
        console.log(`El cliente ${socket.remoteAdress, socket.remotePort} dice: ${data}`);
        socket.write('Mensaje recibido');       
    });
    
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
    
    socket.on('close', () => {
        console.log('Conexión cerrada');
    });

    socket.error(err => {
        console.error('Error en el socket:', err);
    });
});

server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});