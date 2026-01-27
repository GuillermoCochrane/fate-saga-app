//Manejo de los cambios de filtro
export function handleFilterClick(event, $buttons) {
    for (const $button of $buttons) {
         $button.classList.remove('active'); //para cada botón, quitamos la clase active
    }
    event.target.classList.add('active'); //ponemos la clase active al botón que se ha seleccionado
    return event.target.dataset.filter; //actualizamos el filtro actual
}

// Determinar si un item debe mostrarse según el filtro actual
export function shouldShowItem(item, currentFilter) {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return item.completed;
    if (currentFilter === 'incomplete') return !item.completed;
    return true;
}