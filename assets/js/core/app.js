//? Funciones encargada de manejar la aplicación

import { handleFilterClick, handleDetails, toggleSeasonComplete, toggleEpisodeComplete } from './eventHandlers.js';
import { setupTheme } from '../utilities/theme.js';
import { $, $$, createElement } from '../utilities/dom.js';
import { importData, exportData, saveChecklistData, loadChecklistData } from '../utilities/storage.js';
import { updateTotalProgress, calculateProgress, showNotification } from '../utilities/utilities.js';
import { sagaSummaryCreator, sagaCreator } from '../components/saga.js';

// 📁 core/app.js
export let currentFilter = 'all';
export let checklistData = {};

function initApp() {
    checklistData = loadChecklistData();
    setupEventListeners();
    renderChecklist();
    setupTheme();
    updateTotalProgress(checklistData);
}

// Configurar event listeners
function setupEventListeners() {
    const $filterBtns = $$('.filter-btn');
    const $exportBtn = $('#export-btn');
    const $importBtn = $('#import-btn');
    const $fileInput = $('#file-input');

    // Selecciona el filtro, y le da la clase active al botón correspondiente
    $filterBtns.forEach(button => {
    //seleccionamos todos los .filter-btn 
        button.addEventListener('click', (e) => {
            //ponemos a escuchar el evento click 
            currentFilter = handleFilterClick(e, $filterBtns); // Delegamos en handleFilterClick, los cambios de estilos de los botones de filtro
            renderChecklist(); // renderizamos
        });
    });

    //Exporta los datos al hacer clic 
    $exportBtn.addEventListener('click', () => {
        exportData(checklistData); // ← Pasar explícitamente
        showNotification('Datos exportados con éxito'); // ← Notificación aquí
    });

    //Importa los datos al hacer clic
    $importBtn.addEventListener('click', () => {
    // capturamos el botón de de id import-btn y escuchamos el evento click
        $fileInput.click();
        //hacemos click en el input de id file-input, ya que el mismo no es visible
    });

    //cuando se cambie file-input, se ejecuta el la funcion importData
    $fileInput.addEventListener('change', async (event) => {
        try {
            const importedData = await importData(event);
            checklistData = importedData;
            saveChecklistData(checklistData);
            renderChecklist();
            updateTotalProgress(checklistData);
            showNotification('Datos importados con éxito');
        } catch (error) {
            showNotification('Error al importar: ' + error.message, true);
        }
    });
    
    // Event delegation para cambios de estado de details
    document.addEventListener('toggle', (e) => { 
        const newData = handleDetails(e, checklistData);
        if (newData !== checklistData) { // ← Si hubo cambios
            checklistData = newData;
            saveChecklistData(checklistData);
            // NO necesita renderizar (solo cambia estado opened)
        }
    }, true);
}

// Renderizar la checklist completa
function renderChecklist() {
    //Capturemos el contenedor donde vamos a renderizar y lo borramos
    const $container = $('#checklist-container');
    $container.innerHTML = '';

    // recorremos cada saga en el objeto
    for (const [sagaName, sagaData] of Object.entries(checklistData)) {

        const $sagaElement = createElement('div', 'saga');          // Creamos el elemento div con la clase saga
        const $details = createElement('details', 'saga-details');  //Creamos el elemento details, y le ponemos  el atributo open cuando corresponda, asi el details queda abierto
        if (sagaData.opened) {
            $details.setAttribute('open', 'true');
        }

        const percentage = calculateProgress(sagaData.seasons);       //calculamos el progreso de la saga
        const $summary = sagaSummaryCreator(sagaName, percentage);  // Creamos el summary de la saga
        const $contentDiv = sagaCreator(sagaData, sagaName, handleToggleCheckbox, currentFilter);        // Creamos el contenedor de la seasons de la saga

        $details.appendChild($summary);
        $details.appendChild($contentDiv);
        /* 
            hasta aca tendriamos (2)
            <details class="saga-details" open>
                <summary class="saga-summary">
                    --- con todo lo del componente summary ---
                </summary>
                <div>
                    --- con todas las temporadas de la saga, o el mensaje de no hay items visibles ---
                </div>
            </details>
         */      
        $sagaElement.appendChild($details);     //agregamos el details  al contenedor .saga
        $container.appendChild($sagaElement);   //con cada iteración, agregamos la saga al contenedor
    }
}

function handleToggleCheckbox(seasonID, sagaName, isEpisode = false, episodeID = null) {
    checklistData = isEpisode ? 
        toggleEpisodeComplete(episodeID, seasonID, sagaName, checklistData) : 
        toggleSeasonComplete(seasonID, sagaName, checklistData);
    saveChecklistData(checklistData);
    renderChecklist();
    updateTotalProgress(checklistData);
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);