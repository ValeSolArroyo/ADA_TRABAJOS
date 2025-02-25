// Ejercicio 7: Encuentra tu meta perdida
// Consigna:
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.

const fs = require('fs');
const filePath = './metas.json'

const data = fs.readFileSync(filePath,'utf-8');
const metas = JSON.parse(data);
const meta = 'Viajar a Japón';

if (!metas.includes(meta)) {
    metas.push(meta);
    fs.writeFileSync(filePath, JSON.stringify(metas, null, 2));
    console.log(`La meta "${meta}" se agregó correctamente.`);
} else {
    console.log(`La meta "${meta}" ya se encuentra en la lista.`);
}

