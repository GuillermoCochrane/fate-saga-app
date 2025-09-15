//? Funciones utilitarias generales

import { $ } from './dom.js';

// Devuelve el número de episodios totales y el número de episodios vistos
export function countEpisodes(saga) {
    let total = 0; //Inicializamos el contador a 0
    let completed = 0; //Inicializamos el contador a 0
    for (const season of saga) {
        if (season.episodes && season.episodes.length > 0) {
            // si el Temporada tiene episodios... contamos el número de episodios
            for (const episode of season.episodes) {
                if (episode.completed) completed++; // si el episodio está visto, incrementamos el contador en 1
                total++;
            }
        }
    }
    return { total, completed }; //Devuelve el número de episodios totales y el número de episodios vistos
}

// Calcular porcentajes de progreso
export function calculatePercentage(completed, total) {
    return  total > 0 ? Math.round((completed / total) * 100) : 0; // devolvemos el porcentaje de completados, siempre que no sea 0
}

// Calcular el progreso total de la saga
export function calculateProgress(data) {
    const { total, completed } = countEpisodes(data); //calculamos el total de episodios de la saga
    return calculatePercentage(completed, total);
}

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

// Actualizar progreso total
export function updateTotalProgress(checklistData) {
    const $completedItems = $('#completed-items');
    const $totalItems = $('#total-items');
    const $percentage = $('#percentage');
    const $progressBar = $('#complete-progress-bar');
    let totalItems = 0;
    let completedItems = 0;
    
    for (const saga of checklistData) {
        //Recorremos cada saga en el objeto
        let { total, completed } = countEpisodes(saga.seasons); //calculamos el total de episodios de la saga
        totalItems += total; //Calculamos el total de items de la saga
        completedItems += completed; //Calculamos el total de items completados de la saga
    }
    
    const percentage = calculatePercentage(completedItems, totalItems);
    //si hay items, calculamos el porcentaje de completados, siempre que no sea 0

    $progressBar.value = percentage;
    $completedItems.textContent = completedItems; //Actualizamos el número de items completados
    $totalItems.textContent = totalItems; //Actualizamos el número de items totales
    $percentage.textContent = `${percentage}%`; //Actualizamos el porcentaje de completados
}