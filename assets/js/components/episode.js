//? funcion de creación de componente episode
import { createElement, createCheckbox, createLabel } from '../utilities/dom.js';

// Crear elemento de episodio individual
export function episodeCreator(episode, seasonID, sagaID, handleToggleCheckbox) {
    //Creamos el contendor con la clase check-item
    const $episodeArticle = createElement('article', 'check-item');

    //Creamos el checkbox, dejándolo marcado según corresponda
    const checkboxID = `${episode.id}`;
    const checkBoxEventHandler = () => handleToggleCheckbox(seasonID, sagaID , true, episode.id);

    const labelData = typeof episode.label === 'object' ?  episode.label.en : episode.label;

    const ariaLabel = `Episodio ${episode.number}: ${labelData}` 
    const $checkbox = createCheckbox(checkboxID, episode.completed, checkBoxEventHandler, null, sagaID, ariaLabel);
    
    //creamos el label con sus componentes internos
    const $label = createLabel('', checkboxID);                       
    const $episode =  createElement('span', null, "Episodio ");
    const $episodeTag = createElement('strong', 'episode-number'); //Marcador del episodio en negrita
    $episodeTag.appendChild($episode);                                      //agregamos el texto "Episodio" al strong
    $episodeTag.appendChild(document.createTextNode(`${episode.number}:`)); //agregamos el numero del episodio al strong
    $label.appendChild($episodeTag);                               //agregamos el marcador del episodio al label

    $label.appendChild(document.createTextNode(` ${labelData}`)); //agregamos el nombre del episodio al label


    $episodeArticle.appendChild($checkbox);  //agregamos el checkbox al contenedor de episodio
    $episodeArticle.appendChild($label);     //agregamos el label al contenedor de episodio
    /*
        Estructura HTML resultante:
        <article class="check-item">
            <input type="checkbox" id="main-1">
            <label for="main-1" class="episode-label">
                <strong class="episode-number">Episodio 1:</strong> 
                Título del episodio
            </label>
        </article>
     */
    
    return $episodeArticle; //Devuelve el contendor del episodio
}