// Ejercicio 1: ¡Crea tu perfil digital!
// Consigna:
// Imagina que acabas de unirte a una red social donde puedes crear tu
// perfil digital básico. Tu misión es:
// 1. Crear un archivo llamado perfil.json.
// 2. Dentro de este archivo, guarda información sobre ti: nombre, edad
// y tu ciudad favorita.
// 3. Usa el módulo fs para escribir este archivo desde Node.js

const fs = require('fs')

const perfil = {
    nombre: "Valentina",
    edad: 20,
    ciudadFav: "Londres"
}

fs.writeFileSync('./perfil.json', JSON.stringify(perfil,null,2));
if (fs.existsSync('./perfil.json')) {
    console.log("El archivo se ha creado correctamente");
} else {
    console.log("Hubo un problema al crear el archivo");
}