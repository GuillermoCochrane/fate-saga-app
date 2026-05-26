//? funcion de creación de componente saga

import { createElement } from '../utilities/dom.js';
import { shouldShowItem } from "../handlers/filterHandlers.js";
import { calculateProgress } from '../handlers/progressHandler.js';
import { seasonContainerCreator } from './season.js';


// Crear las temporadas de la saga
export function sagaCreator(sagaData, sagaID, handleToggleCheckbox, currentFilter){

    const $details = createElement('details', 'saga');  //Creamos el elemento details, y le ponemos  el atributo open cuando corresponda, asi el details queda abierto
    $details.dataset.sagaId = sagaData.id;              //le ponemos el atributo data-saga-id con el id de la saga
    if (sagaData.opened) {
        $details.setAttribute('open', 'true');
    }

    const percentage = calculateProgress(sagaData.seasons);       //calculamos el progreso de la saga
    const $summary = sagaSummaryCreator(sagaData.saga, percentage, sagaData.id);  // Creamos el summary de la saga
    $details.appendChild($summary);

    let hasVisibleItems = false; 

    for (const season of sagaData.seasons) {
        //recorremos cada season de la saga
        if (shouldShowItem(season, currentFilter)) {
            //si se debe mostrar la season
            hasVisibleItems = true;  //lo ponemos visible ( valor booleano), para no crear el contendor del mensaje de no hay items visibles      
            const $seasonContainer = seasonContainerCreator(season, sagaID, handleToggleCheckbox); //creamos el capitulo
            $details.appendChild($seasonContainer); //lo agregamos al contenedor
        }
    } // devuelve todas las temporadas de la saga, con sus episodios

    if (!hasVisibleItems) {
        //si no hay items visibles
        const $noItemsMsg = createElement('p', "empty-list", "No hay elementos que coincidan con el filtro");
        $details.appendChild($noItemsMsg); // agregamos un mensaje de que no hay items visibles
    }

    /* 
        hasta aca tendriamos (2)
        <details class="saga-details" open>
            <summary class="saga-summary">
                --- con todo lo del componente summary ---
            </summary>
            --- todas las temporadas de la saga, o el mensaje de no hay items visibles ---
        </details>
    */      
    return $details;
}

// Crear el Summary de la saga, con el progreso de la misma
export function sagaSummaryCreator(sagaName, progress, sagaID){              
    const $summary = createElement('summary', 'saga-summary');              // Creamos el elemento summary con la clase saga-summary
    const $summaryContent = createElement('div', 'summary-content');        // Contenedor flexible para título y progreso
    const $sagaTitle = createElement('span', 'saga-title', sagaName);       // Título de la saga
    /*         <progress id="complete-progress-bar" class="progress-bar" value="0" max="100"></progress> */
    const progressHTML =  `<span class="progress-text" id="saga-progress-text-${sagaID}">${progress}%</span>\n
                            <progress  class="progress-bar" value="${progress}" max="100" id="saga-progress-${sagaID}"></progress>\n`;// Contenedor de progreso
    const $progressContainer = createElement('div', 'progress-container', progressHTML, true); // Creamos el elemento div con la clase progress-container

    $summaryContent.appendChild($sagaTitle);         // agregamos  el titulo 
    $summaryContent.appendChild($progressContainer); // agregamos el contenedor de progreso
    $summary.appendChild($summaryContent);           // agregamos summaryContent al summary

    /* 
        hasta aca tendriamos (1)
        <summary class="saga-summary">
            <div class="summary-content">
                <span class="saga-title">Saga X</span>
                <div class="progress-container">
                    <span class="progress-text">100%</span>
                    <progress  class="progress-bar" value="0" max="100"></progress>
                </div>
            </div>
        </summary>
        */

    return $summary;
}