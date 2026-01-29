// Alternar estado completo de una temporada
export function toggleSeasonComplete(seasonID, sagaID, checklistData) {
    const newData = JSON.parse(JSON.stringify(checklistData));
    const saga = newData.find(saga => saga.id === sagaID); // Buscamos el saga con ese id
    const seasons = saga.seasons.find(season => season.id === seasonID); // Buscamos la temporada con ese id

    if (seasons) {
        //Si se ecnuetra la temporada...
        seasons.completed = !seasons.completed;
        //Le cambiamos el estado de la temporada

        if (seasons.completed && seasons.episodes) {
            //Si la temporada está completo y tiene episodios...
            seasons.episodes.forEach(episode => {
                episode.completed = true;
            }); 
            //marcamos todos los episodios como completos
        } else if (!seasons.completed && seasons.episodes) {
            //Si la temporada no está completo y tiene episodios...
            seasons.episodes.forEach(episode => {
                episode.completed = false;
            });
            //desmarcamos todos los episodios como completos
        }
        return newData; //devuelve el objeto con los cambios
    }
    return checklistData; //devuelve el original si no se ha cambiado nada
}

// Alternar estado completo de un episodio
export function toggleEpisodeComplete(episodeID, seasonID, sagaName, checklistData) {
    const newData = JSON.parse(JSON.stringify(checklistData));
    const saga = newData.find(saga => saga.saga === sagaName); // Buscamos el saga con ese nombre
    const season = saga.seasons.find(season => season.id === seasonID); // Buscamos la temporada con ese id

    if (season && season.episodes) {
        //Si se encuentra el temporada y tiene episodios...
        const episode = season.episodes.find(episode => episode.id === episodeID); //Buscamos el episodio con ese id en el temporada
        if (episode) {
            //Si se encuentra el episodio...
            episode.completed = !episode.completed; //Le cambiamos el estado del episodio
            const allEpisodesCompleted = season.episodes.every(episode => episode.completed); //Verificamos si todos los episodios están completos para marcar la temporada como completa
            season.completed = allEpisodesCompleted; //Actualizamos el estado de la temporada
            return newData; //devuelve el objeto con los cambios
        }
    }
    return checklistData; //devuelve el original si no se ha cambiado nada
}

//Maneja los cambios de estado de details, con Event delegation 
export function handleDetails(event, checklistData) {
    const newData = JSON.parse(JSON.stringify(checklistData));
    if (event.target.tagName === 'DETAILS') {
        //si se hizo click en un details
        const details = event.target;//guardamos el elemento
        const isOpen = details.open; //guardamos si el details abierto o cerrado
        
        // Encontrar el ID del elemento y actualizar su estado opened
        if (details.classList.contains('saga-details')) {
            //si el details tiene la clase saga-details
            const sagaName = details.querySelector('.saga-title').textContent; //guardamos el texto del título
            const saga = newData.find(saga => saga.saga === sagaName); // Buscamos el saga con ese nombre
            if (saga) {
                saga.opened = isOpen; //actualizamos el objeto, guardando el estado del details
                return newData; //devuelve el objeto con los cambios
            }
        } 
        else if (details.classList.contains('season-details')) {
            //si el details tiene la clase season-details
            const seasonID = details.querySelector('input[type="checkbox"]').id.replace('main-', ''); //guardamos el id del checkbox
            
            // recorrremos todas las sagas en localStorage
            for (const sagaData of newData) {
                const season = sagaData.seasons.find(season => season.id === seasonID); // capturamos la temporada con ese id
                if (season) {
                    //si encuentra la temporada
                    season.opened = isOpen; //actualizamos el estado abierto
                    return newData; // devuelve el objeto con los cambios
                }
            }
        }
    }
    return checklistData; //devuelve el original si no se ha cambiado nada
}

// Función para resetear progreso
export function resetProgress(checklistData) {
    const newData = JSON.parse(JSON.stringify(checklistData));

    for (const saga of newData) {
        for (const season of saga.seasons) {
            season.completed = false;
            if (season.episodes) {
                for (const episode of season.episodes) {
                    episode.completed = false;
                }
            }
        }
    }

    return newData;
}