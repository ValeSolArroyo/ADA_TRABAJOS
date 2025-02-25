// Ejercicio 4: ¿Existe tu perfil?
// Consigna:
// Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
// existe. Si no existe, crea uno nuevo con un perfil básico.

const fs = require('fs');
const filePath = './perfil.json';

if (!fs.existsSync(filePath)) {
    const perfil = {
        nombre: '',
        edad: 0,
        ciudadFav: '',
        hobbies: []
    }
    fs.writeFileSync(filePath, JSON.stringify(perfil, null, 2));
    console.log('Se ha creado un nuevo archivo con el perfil básico.');
} else {
    console.log('El archivo de tu perfil ya existe.');
}