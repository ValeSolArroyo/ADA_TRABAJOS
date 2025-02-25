// Ejercicio 2: Descubre tu perfil
// Consigna:
// Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste
// en el ejercicio anterior y muestra la información en la consola para
// asegurarte de que todo está correcto.

const fs = require('fs');

fs.readFile('perfil.json', 'utf8', function(err, data) {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    } else {
        const perfil = JSON.parse(data);
        console.log(perfil);
    }
});
