// Ejercicio 9: Filtra tus metas completas
// Consigna:
// Supongamos que cada meta tiene un estado: “completa” o “pendiente”.
// Filtra las metas que ya completaste y muéstralas en la consola.

const fs = require('fs');
const filePath = './metas.json';

const data = fs.readFileSync(filePath,'utf-8');
const metas = JSON.parse(data);


const metasCompletadas = metas.filter(meta => meta.estado === 'completa');

console.log('Metas completadas:', metasCompletadas);
