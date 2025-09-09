//? funcion de creacion de componente season (temporada)

import { createElement, createDetails, createLabel, createCheckbox } from '../utilities/dom.js';
import { toggleAnimeComplete } from '../core/eventHandlers.js';
import { episodeCreator } from './episode.js';

// Crear elemento de anime con sus episodios
export function seasonContainerCreator(season, sagaName) {
    //Creacion de los elementos
    const $animeDiv = createElement('div', 'anime-item');
    const $details = createDetails('anime-details', season.opened); //creamos el elemento details, abierto cuando corresponda
    const $summary = seasonSummaryCreator(sagaName, season);  //creamos el summary de la temporada
    const $seasonContainer = seasonCreator(season, sagaName); //creamos el contenedor de la temporada
    
    $details.appendChild($summary);         //agregamos el summary al details
    $details.appendChild($seasonContainer); //Agregamos el contenedor de la temporada al details
    $animeDiv.appendChild($details);        //agregamos el details al contenedor general de la teporada
    /*
        hasta aca tendriamos (
        <div class="anime-item">
            <details class="anime-details">
                --- con todo lo de summary ---
                <div class="checklist">
                    <div class="episode-list">
                        --- todos los episodios del anime ---
                    </div>
                </div>
            </details>
        </div>
    */
    return $animeDiv; //devuelve el contendeor de la temporada completo, con todos sus elementos hijos
}

// Crear el contenedor de la temporada
export function seasonCreator(season, sagaName) {
    const $seasonContainer = createElement('div', 'checklist');  //creamos el contenedor del la temporada
    if (season.episodes && season.episodes.length > 0) {
    //si la temporada tiene episodios...
        const $episodeList = createElement('div', 'episode-list'); //creamos el contenedor de episodios

        for (const episode of season.episodes) {
            //recorremos todos los episodios del item
            const $episodeItem = episodeCreator(episode, season.id, sagaName); //creamos el capitulo
            $episodeList.appendChild($episodeItem);                             //lo agregamos al contenedor de episodios
        }

        $seasonContainer.appendChild($episodeList); //lo agregamos al contenedor de la temporada
    }
    return $seasonContainer;
}

// Crear el summary de la temporada
export function seasonSummaryCreator(sagaName, season) {
    const $summary = createElement('summary', 'anime-summary');
    const checkboxID = `main-${season.id}`; //id del checkbox
    const checkBoxEventHandler = () => toggleAnimeComplete(season.id, sagaName); //funcion que se ejecuta al cambiar el estado del checkbox
    // Checkbox para el anime completo
    const $animeCheckbox = createCheckbox(checkboxID, season.completed, checkBoxEventHandler);

    const $label = createLabel(season.label, checkboxID, 'anime-label');              //label del checkbox 
    const $formatSpan = createElement('span', 'anime-format', `${season.format}`);    //span con el formato del anime
    const $titleContainer = createElement('div', 'anime-title-container');          //contenedor para el label y el formato
    
    // Agregamos el label y el span al contenedor de título
    $titleContainer.appendChild($label);
    $titleContainer.appendChild($formatSpan);
    /*  <div class="anime-title-container">
            <label for="main-1" class="anime-label">Titulo del anime</label>
            <span class="anime-format">Formato del anime</span>
        </div> 
    */
    // Agregamos el checkbox y el contenedor de título al summary
    $summary.appendChild($animeCheckbox);
    $summary.appendChild($titleContainer);
    /* 
        hasta aca tendriamos (1)
        <summary class="anime-summary">
            <input type="checkbox" id="main-1">
            <div class="anime-title-container">
                <label for="main-1" class="anime-label">Titulo del anime</label>
                <span class="anime-format">Formato del anime</span>
            </div>
        </summary>
    */    
    return $summary;
}