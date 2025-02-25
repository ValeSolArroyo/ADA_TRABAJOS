// Ejercicio 6: Tu lista de metas
// Consigna:
// Es momento de planear tus metas. Crea un archivo llamado metas.json
// con una lista vacía al principio. Luego, agrega metas como: “Aprender
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.

const fs = require('fs');
const filePath = './metas.json'

if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]')
}

const data = fs.readFileSync(filePath, 'utf-8');

const metas = JSON.parse(data || '[]');

metas.push('Aprender Node.js');

metas.push('Viajar a Japón');

fs.writeFileSync(filePath, JSON.stringify(metas,null,2));


