//? Funciones utilitarias generales
import { $ } from './dom.js';

// Determinar si un item debe mostrarse según el filtro actual
export function shouldShowItem(item, currentFilter) {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return item.completed;
    if (currentFilter === 'incomplete') return !item.completed;
    return true;
}

// Actualizar el título de la página
export function updateChecklistTitle(title) {
    const $tabtitle = $("title")    
    const $franchiseMainTitle = $('#franchise-main-title');
    const $franchiseText = $('#franchise-text');

    $tabtitle.textContent = title + ' - Checklist';
    $franchiseMainTitle.textContent = title;
    $franchiseText.textContent = title;
}