let estudiantes = require('./estudiantes');

estudiantes.forEach(estudiante => console.log(estudiante.nombre))

let promedioNotas = (estudiante) => {
    let suma = estudiante.notas.reduce((total, nota) => total + nota, 0);
    return suma / estudiante.notas.length;
}

console.log(`el promedio de ${estudiantes[0].nombre} es: ${promedioNotas(estudiantes[0])}`);

estudiantes.push({nombre: 'Sofia', edad: '20', curso: 'Quimica', notas: [8, 7, 7]});

console.log(JSON.stringify(estudiantes, null, 3));
