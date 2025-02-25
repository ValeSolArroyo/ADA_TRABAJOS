/* Ejercicio 2: Menú Interactivo con readline-sync
Crea un script de Node.js que muestre un menú de opciones usando
readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
ver un mensaje de bienvenida, generar un hash de un texto, o salir.
 */

const readlineSync = require('readline-sync');

const welcomeMessage = 'Bienvenido al menú interactivo!';
const hashMessage = 'Has generado un hash: ';

console.log(welcomeMessage);

const options = ['Ver mensaje de bienvenida', 'Generar hash', 'Salir'];

const opcionSeleccionada = ()