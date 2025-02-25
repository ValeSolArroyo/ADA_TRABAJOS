// En este ejercicio, crearás un programa que salude al usuario. El saludo
// será personalizado y dependerá de dos cosas:
// 1. Una variable de entorno llamada GREETING que define el tipo de
// saludo (por ejemplo, "Hola", "Bienvenido" o "¡Buenos días!").
// 2. El nombre del usuario, que se obtendrá como argumento desde la
// línea de comandos.
// Si no se proporciona un saludo en las variables de entorno o un nombre
// en la línea de comandos, el programa usará valores predeterminados.

require('dotenv').config();

const greeting = process.env.GREETING || 'Hola';

const name = process.argv[2] || 'Invitado';

console.log(`${greeting}, ${name}`);


