//? funcion de creación de componente episode

import { createElement, createCheckbox, createLabel } from '../utilities/dom.js';
import { toggleEpisodeComplete } from '../core/eventHandlers.js';

// Crear elemento de episodio individual
export function episodeCreator(episode, animeId, sagaName) {
    //Creamos el contendor con la clase check-item
    const $episodeDiv = createElement('div', 'check-item');

    //Creamos el checkbox, dejándolo marcado según corresponda
    const checkboxID = `${episode.id}`;
    const checkBoxEventHandler = () => toggleEpisodeComplete(episode.id, animeId, sagaName)
    const $checkbox = createCheckbox(checkboxID, episode.completed, checkBoxEventHandler);

    const episodeTag =  `<strong>Episodio ${episode.number}:</strong>`
    const $episodeNumber = createElement('span', 'episode-number', episodeTag, true); //Marcador del episodio en negrita

    const $label = createLabel('', checkboxID, 'episode-label');      //creamos el label
    $label.appendChild($episodeNumber);                               //agregamos el marcador del episodio al label
    $label.appendChild(document.createTextNode(` ${episode.label}`)); //agregamos el nombre del episodio al label


    $episodeDiv.appendChild($checkbox);  //agregamos el checkbox al contenedor de episodio
    $episodeDiv.appendChild($label);     //agregamos el label al contenedor de episodio
    /*
        Estructura HTML resultante:
        <div class="check-item">
            <input type="checkbox" id="main-1">
            <label for="main-1" class="episode-label">
                <span class="episode-number">
                    <strong>Episodio 1:</strong> 
                </span>
                Título del episodio
            </label>
        </div>
     */
    
    return $episodeDiv; //Devuelve el contendor del episodio
}