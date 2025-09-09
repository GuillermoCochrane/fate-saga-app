//? Funciones para manejar eventos

// Alternar estado completo de una temporada
export function toggleSeasonComplete(seasonID, sagaName, checklistData) {
    const newData = JSON.parse(JSON.stringify(checklistData));
    const seasons = newData[sagaName].seasons.find(season => season.id === seasonID);
    //Buscamos la temporada con ese id en el objeto
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
    const season = newData[sagaName].seasons.find(season => season.id === seasonID);
    //Buscamos la temporada con ese id en el objeto
    if (season && season.episodes) {
        //Si se encuentra el temporada y tiene episodios...
        const episode = season.episodes.find(episode => episode.id === episodeID);
        //Buscamos el episodio con ese id en el temporada
        if (episode) {
            //Si se encuentra el episodio...
            episode.completed = !episode.completed;
            //Le cambiamos el estado del episodio

            // Verificar si todos los episodios están completos para marcar la temporada como completa
            const allEpisodesCompleted = season.episodes.every(episode => episode.completed);
            //Verificamos si todos los episodios están completos para marcar la temporada como completa
            season.completed = allEpisodesCompleted;
            //Actualizamos el estado de la temporada
            return newData; //devuelve el objeto con los cambios
        }
    }
    return checklistData; //devuelve el original si no se ha cambiado nada
}

//manejo de los cambios de filtro
export function handleFilterClick(event, $button) {
    $button.forEach(button => button.classList.remove('active')); //para cada botón, quitamos la clase active
    event.target.classList.add('active'); //ponemos la clase active al botón que se ha seleccionado
    return event.target.dataset.filter; //actualizamos el filtro actual
}