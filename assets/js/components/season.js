//? funcion de creacion de componente season (temporada)

import { createElement, createDetails, createLabel, createCheckbox, $ } from '../utilities/dom.js';
import { episodeCreator } from './episode.js';

// Crear elemento de la temporada con sus episodios
export function seasonContainerCreator(season, sagaID, handleToggleCheckbox) {
    //Creacion de los elementos
    const $seasonDiv = createElement('div', 'season-item');
    const $details = createDetails('season-details', season.opened); //creamos el elemento details, abierto cuando corresponda
    $details.dataset.seasonId = season.id;
    $details.dataset.sagaId = sagaID;

    const $summary = seasonSummaryCreator(sagaID, season, handleToggleCheckbox);  //creamos el summary de la temporada
    const $seasonContainer = episodeListCreator(season, sagaID, handleToggleCheckbox); //creamos el contenedor de la temporada
    
    $details.appendChild($summary);         //agregamos el summary al details
    $details.appendChild($seasonContainer); //Agregamos el contenedor de la temporada al details
    $seasonDiv.appendChild($details);        //agregamos el details al contenedor general de la temporada
    /*
        hasta aca tendriamos (
        <div class="season-item">
            <details class="season-details">
                --- con todo lo de summary ---
                <div class="checklist">
                    <div class="episode-list">
                        --- todos los episodios de la temporada ---
                    </div>
                </div>
            </details>
        </div>
    */
    return $seasonDiv; //devuelve el contendeor de la temporada completo, con todos sus elementos hijos
}

// Crear el listado de episodios de la temporada
function episodeListCreator(season, sagaName, handleToggleCheckbox, parentSagaID) {
    const $episodeList = createElement('section', 'episode-list'); //creamos el contenedor de episodios
    if (season.episodes && season.episodes.length > 0) { //si la temporada tiene episodios...
        for (const episode of season.episodes) { //recorremos todos los episodios del item
            const $episodeItem = episodeCreator(episode, season.id, sagaName, handleToggleCheckbox, parentSagaID); //creamos el capitulo
            $episodeList.appendChild($episodeItem); //lo agregamos al contenedor de episodios
        }
    } else { //sino...
        const $noItemsMsg = createElement('p', "empty-list", "La temporada no tiene episodios");
        $episodeList.appendChild($noItemsMsg); // agregamos un mensaje de que no hay episodios
    }
    return $episodeList;
}

// Crear el summary de la temporada
function seasonSummaryCreator(sagaName, season, handleToggleCheckbox) {
    const $summary = createElement('summary', 'season-summary');
    const checkboxID = `main-${season.id}`; //id del checkbox
    const checkBoxEventHandler = () => handleToggleCheckbox(season.id, sagaName); //funcion que se ejecuta al cambiar el estado del checkbox
    //const checkBoxEventHandler = () => toggleSeasonComplete(season.id, sagaName, checklistdata); //funcion que se ejecuta al cambiar el estado del checkbox
    // Checkbox para la temporada completa
    const $seasonCheckbox = createCheckbox(checkboxID, season.completed, checkBoxEventHandler);

    const $label = createLabel(season.label, checkboxID, 'season-label');              //label del checkbox 
    const $formatSpan = createElement('span', 'season-format', `${season.format}`);    //span con el formato de la temporada
    const $titleContainer = createElement('div', 'season-title-container');          //contenedor para el label y el formato
    
    // Agregamos el label y el span al contenedor de título
    $titleContainer.appendChild($label);
    $titleContainer.appendChild($formatSpan);
    /*  <div class="season-title-container">
            <label for="main-1" class="season-label">Titulo de la temporada</label>
            <span class="season-format">Formato de la temporada</span>
        </div> 
    */
    // Agregamos el checkbox y el contenedor de título al summary
    $summary.appendChild($seasonCheckbox);
    $summary.appendChild($titleContainer);
    /* 
        hasta aca tendriamos (1)
        <summary class="season-summary">
            <input type="checkbox" id="main-1">
            <div class="season-title-container">
                <label for="main-1" class="season-label">Titulo de la temporada</label>
                <span class="season-format">Formato de la temporada</span>
            </div>
        </summary>
    */    
    return $summary;
}