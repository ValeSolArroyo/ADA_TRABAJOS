// Ejercicio 3: ¡Actualiza tu estilo!
// Consigna:
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
// tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
// en el archivo perfil.json.

const fs = require('fs');
const filePath = './perfil.json';

const data = fs.readFileSync(filePath,'utf-8'); // leer el archivo 

if (data) {
    const perfil = JSON.parse(data);
    perfil.hobby = 'Dibujar';
    fs.writeFileSync(filePath, JSON.stringify(perfil,null, 2));
    console.log('Hobby actualizado con éxito');
} else {
    console.error('No se pudo leer el archivo');
}

