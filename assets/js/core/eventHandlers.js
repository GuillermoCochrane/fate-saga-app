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