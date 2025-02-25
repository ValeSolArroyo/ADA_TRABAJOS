// Ejercicio 8: Cuenta tus metas
// Consigna:
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu
// archivo metas.json y cuente cuántas metas tienes actualmente.

const fs = require('fs');
const filePath = './metas.json';

const data = fs.readFileSync(filePath,'utf-8');
const metas = JSON.parse(data);

console.log('Tienes ', metas.length, ' metas');

