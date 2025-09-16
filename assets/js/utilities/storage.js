// Funciones para manipular la carga y guardado de datos

import { fateChecklistData } from '../../data/data.js';

// Cargar datos guardados en localStorage de la checklist o usar el predeterminado
export function loadChecklistData() {
    const savedData = localStorage.getItem('checklist'); //Capturamos los datos guardados en localStorage
    return savedData ? JSON.parse(savedData) : [...fateChecklistData.sagas]; //Si los datos existen. los devuelve, si no, devuelve los datos por defecto
}

// Guardar datos en localStorage
export function saveChecklistData(data) {
    localStorage.setItem('checklist', JSON.stringify(data)); //Convertimos los datos a un string JSON y lo guardamos en localStorage en el key 'checklist'
}

// Exportar datos
export function exportData(checklistData) {
    const dataStr = JSON.stringify(checklistData, null, 2); //Guardamos los datos de la checklist en un string JSON
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr); //Creamos un URI para el string de datos
    
    const exportFileDefaultName = 'fate-checklist.json'; //Nombre del archivo por defecto
    
    const linkElement = document.createElement('a'); //Creamos el un enlace
    linkElement.setAttribute('href', dataUri); //Asignamos el URI al atributo href del enlace
    linkElement.setAttribute('download', exportFileDefaultName); //Asignamos el nombre del archivo por defecto al atributo download del enlace
    linkElement.click(); //Hacemos click en el enlace para iniciar la descarga del archivo
}

// Importar datos
export function importData(event) {
    //Trabajamos con un promesa, ya que la original era un procedimineto que no devolvia datos, y esta es una funcion que si devuelve
    return new Promise((resolve, reject) => {
        const file = event.target.files[0];
        if (!file) return reject('No file selected');
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                resolve(importedData); // ← Devuelve datos
            } catch (error) {
                reject(error); // ← Devuelve error
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    });
}