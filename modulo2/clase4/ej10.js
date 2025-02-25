// Ejercicio 10: ¡Haz un respaldo de tus metas!
// Consigna:
// Nunca está de más guardar una copia de seguridad. Escribe un programa
// que copie el contenido de metas.json en un archivo llamado
// respaldo_metas.json.

const fs = require('fs');
const filePath = './metas.json';
const backupFilePath = './respaldo_metas.json';

fs.copyFile(filePath, backupFilePath);

console.log('Respaldo realizado con éxito!');