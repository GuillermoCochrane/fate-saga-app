//? Funciones utilitarias generales

// Determinar si un item debe mostrarse según el filtro actual
export function shouldShowItem(item, currentFilter) {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return item.completed;
    if (currentFilter === 'incomplete') return !item.completed;
    return true;
}