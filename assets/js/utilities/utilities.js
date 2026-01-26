//? Funciones utilitarias generales
import { $ } from './dom.js';

// Determinar si un item debe mostrarse según el filtro actual
export function shouldShowItem(item, currentFilter) {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return item.completed;
    if (currentFilter === 'incomplete') return !item.completed;
    return true;
}

// Handler de notificaciones
export function showNotification(message, isError = false) {
    const $notification = $('#notification');
    $notification.textContent = message; // Capturamos el elemento con id notification y le cambiamos el texto

    if (isError) {
        $notification.style.borderLeftColor = 'var(--error-notification)'; // Si es un error, cambiamos el color de error
    } else {
        $notification.style.borderLeftColor = 'var(--completed-color)'; // Si no es un error, cambiamos al color de completado
    }

    $notification.classList.add('show'); //Agregamos la clase show al elemento $notification

    setTimeout(() => {
        $notification.classList.remove('show');
    }, 3000); //Eliminamos la clase show del elemento notification en 3 segundos
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