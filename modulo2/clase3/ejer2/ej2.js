// Actividad 2: Seguimiento de series de televisión
// Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa
// que permita:
// 1. Registrar una serie: Se debe registrar una serie con su nombre y
// la cantidad de temporadas.
// 2. Listar las series: Muestra todas las series registradas.
// 3. Actualizar las temporadas de una serie: Permite actualizar la
// cantidad de temporadas de una serie.

const fs = require('fs');
const filePath = './series.json';

// leer series desde el archivo
function leerSeries() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const data = fs.readFileSync(filePath, 'utf8');
    try {
        return JSON.parse(data || '[]');
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return [];
    }
};

// escribir series en el archivo
function escribirSerie(serie) {
    fs.writeFileSync(filePath, JSON.stringify(serie,null,2));
};

// registrar serie
function registrarSerie(nomSerie, temporada) {
    const series = leerSeries();
    series.push({id: series.length + 1, nombre: nomSerie, temporadas: temporada});
    escribirSerie(series);
};  

// listar series
function listarSerie() {
    const series = leerSeries();
    console.log('Listado de series');
    series.forEach((serie, index) => {
        console.log(`${index + 1}. ${serie.nombre} - ${serie.temporadas} temporadas`);
    });
};

// actualizar temporadas de una serie
function actualizarTemporadas(idSerie, actTemporadas) {
    const series = leerSeries();
    const serie = series.find(s => s.id === idSerie);
    if (serie) {
        serie.temporadas = actTemporadas;
        escribirSerie(series);
        console.log(`Temporadas actualizadas en la serie ${serie.nombre}`);
    } else {
        console.log('No se encontró la serie');
    }

};

registrarSerie('Better call Saul', 4);

listarSerie();

actualizarTemporadas(2, 5);

listarSerie();