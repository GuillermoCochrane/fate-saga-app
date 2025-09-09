//? funcion de creación de componente saga

import { createElement } from '../utilities/dom.js';
import { shouldShowItem } from '../utilities/utilities.js';
import { seasonContainerCreator } from './season.js';


// Crear las temporadas de la saga
export function sagaCreator(sagaData, sagaName){
    const $sagaContainer = createElement('div'); //creamos el contendor de saga

    let hasVisibleItems = false; 

    for (const season of sagaData.seasons) {
        //recorremos cada season de la saga
        if (shouldShowItem(season)) {
            //si se debe mostrar la season
            hasVisibleItems = true;  //lo ponemos visible ( valor booleano), para no crear el contendor del mensaje de no hay items visibles      
            const $seasonContainer = seasonContainerCreator(season, sagaName); //creamos el capitulo
            $sagaContainer.appendChild($seasonContainer); //lo agregamos al contenedor
        }
    } // devuelve todas las temporadas de la saga, con sus episodios

    if (!hasVisibleItems) {
        //si no hay items visibles
        const $noItemsMsg = createElement('p', "empty-list", "No hay elementos que coincidan con el filtro");
        $sagaContainer.appendChild($noItemsMsg); // agregamos un mensaje de que no hay items visibles
    }
    return $sagaContainer;
}

// Crear el Summary de la saga, con el progreso de la misma
export function sagaSummaryCreator(sagaName, progress){              
    const $summary = createElement('summary', 'saga-summary');              // Creamos el elemento summary con la clase saga-summary
    const $summaryContent = createElement('div', 'summary-content');        // Contenedor flexible para título y progreso
    const $sagaTitle = createElement('span', 'saga-title', sagaName);       // Título de la saga
    const progressHTML =  `<span class="progress-text">${progress}%</span>\n<div class="progress-bar">\n    <div class="progress-fill" style="width: ${progress}%"></div>\n</div>\n`;// Contenedor de progreso
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
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </summary>
        */

    return $summary;
}