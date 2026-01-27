// handlers/franchiseSelectorHandler.js
import { $ } from '../utilities/dom.js';
import { createOption } from '../utilities/dom.js';
import { checklistData } from '../../data/index.js';

export function renderFranchiseSelector() {
    const $select = $('#franchise-select');
    if (!$select) return;
    
    // Limpiar select
    $select.innerHTML = '';
    
    // Option por defecto
    $select.appendChild(createOption('', 'Selecciona una franquicia', true, true));
    
    // Opciones de cada franquicia
    for (const key in checklistData) {
        const $option = createOption(key, checklistData[key].franchise);
        $select.appendChild($option);
    }
};

// Actualizar el título de la página
export function updateChecklistTitle(title) {
    const $tabtitle = $("title")    
    const $franchiseMainTitle = $('#franchise-main-title');
    const $franchiseText = $('#franchise-text');

    $tabtitle.textContent = title + ' - Checklist';
    $franchiseMainTitle.textContent = title;
    $franchiseText.textContent = title;
}