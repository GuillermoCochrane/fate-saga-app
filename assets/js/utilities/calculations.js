// Funciones que manjean el cálculo del progreso de la saga

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