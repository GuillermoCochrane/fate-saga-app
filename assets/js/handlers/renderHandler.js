import { $, createElement } from '../utilities/dom.js';
import { sagaSummaryCreator, sagaCreator } from '../components/saga.js';
import { calculateProgress } from '../handlers/progressHandler.js';

// Renderizar la checklist completa
export function renderChecklist(checklistData, currentFilter, handleToggleCheckbox) {
    //Capturemos el contenedor donde vamos a renderizar y lo borramos
    const $container = $('#checklist-container');
    $container.innerHTML = '';

    // recorremos cada saga en el objeto
    for (const sagaData of checklistData) {
        const sagaName = sagaData.saga;
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