import { $, createElement } from '../utilities/dom.js';
import { sagaSummaryCreator, sagaCreator } from '../components/saga.js';
import { calculateProgress } from './progressHandler.js';

// Renderizar la checklist completa
export function renderChecklist(checklistData, currentFilter, handleToggleCheckbox) {
    //Capturemos el contenedor donde vamos a renderizar y lo borramos
    const $container = $('#checklist-container');
    $container.innerHTML = '';

    // recorremos cada saga en el objeto
    for (const sagaData of checklistData) {
        // Creamos el contenedor de la seasons de la saga
        const $details = sagaCreator(sagaData,  sagaData.id, handleToggleCheckbox, currentFilter);
        //con cada iteración, agregamos la saga al contenedor
        $container.appendChild($details);   
    }
}