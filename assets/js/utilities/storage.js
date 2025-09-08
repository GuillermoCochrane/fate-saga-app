// Funciones para manipular la carga y guardado de datos

const fateChecklistData = require('../data/data.js');


// Cargar datos guardados en localStorage o usar los predeterminados
export function loadChecklistData() {
    const savedData = localStorage.getItem('fateChecklist'); //Capturamos los datos guardados en localStorage
    return savedData ? JSON.parse(savedData) : {...fateChecklistData}; //Si los datos existen. los devuelve, si no, devuelve los datos por defecto
}

// Guardar datos en localStorage
export function saveChecklistData(data) {
    localStorage.setItem('fateChecklist', JSON.stringify(data)); //Convertimos los datos a un string JSON y lo guardamos en localStorage en el key 'fateChecklist'
}