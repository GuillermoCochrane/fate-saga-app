// Funciones para manipular la carga y guardado de datos
import { checklistData } from "../../data/index.js";

// Cargar datos guardados en localStorage de la checklist o usar el predeterminado
export function loadChecklistData(franchise = null) {
    const savedData = localStorage.getItem('checklist');
    // 1. Si hay datos guardados, usarlos siempre
    if (savedData) return JSON.parse(savedData);
    // 2. Si NO hay datos guardados PERO nos dieron franquicia
    if (franchise && checklistData[franchise]) return [...checklistData[franchise].sagas];
    // 3. Si no hay datos guardados y no nos dieron franquicia
    return []; // Devolver array vacío (para que initApp() muestre el modal)
}

export function loadChecklistTitle(franchise = null) {
    const savedData = localStorage.getItem('checklistTitle');
    if (savedData) return JSON.parse(savedData);
    if (franchise && checklistData[franchise]) return checklistData[franchise].franchiseName;
    return ''; // String vacío (para que initApp() muestre el modal)
}

// Cargar datos del la franquicia o usar el predeterminado
export function loadFranchiseData(franchise) {
    const savedData = localStorage.getItem('franchise'); //Capturamos los datos guardados en localStorage
    return savedData ? JSON.parse(savedData) : checklistData[franchise]?.franchise; //Si los datos existen. los devuelve, si no, devuelve los datos por defecto
}

// Guardar datos en localStorage
export function saveChecklistData(data) {
    localStorage.setItem('checklist', JSON.stringify(data)); //Convertimos los datos a un string JSON y lo guardamos en localStorage en el key 'checklist'
}

// Guardar el titulo de la franquicia en localStorage
export function saveChecklistTitle(title) {
    localStorage.setItem('checklistTitle', JSON.stringify(title)); //Convertimos el titulo a un string JSON y lo guardamos en localStorage en el key 'checklistTitle'
}

// Guardar el franchise en localStorage
export function saveFranchiseData(franchise) {
    localStorage.setItem('franchise', JSON.stringify(franchise)); //Convertimos el franchise a un string JSON y lo guardamos en localStorage en el key 'franchise'
}

// Exportar datos
export function exportData(checklistData, checklistTitle) {
    const data = {
        franchise: checklistTitle,
        sagas: checklistData
    }; //Creamos un objeto con los datos de la checklist y el titulo
    const dataStr = JSON.stringify(data, null, 2); //Guardamos los datos de la checklist en un string JSON
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr); //Creamos un URI para el string de datos
    
    const exportFileDefaultName = `${checklistTitle}-checklist.json`; //Nombre del archivo por defecto
    
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
                resolve({
                    checklistData: importedData.sagas,       // ← Array de sagas
                    checklistTitle: importedData.franchise   // ← String de título
                });
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    });
}