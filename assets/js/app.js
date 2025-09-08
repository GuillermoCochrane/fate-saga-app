// Variables globales
let currentFilter = 'all';
let checklistData = {};

// Inicializar la aplicación
function initApp() {
    checklistData = loadChecklistData();
    setupEventListeners();
    renderChecklist();
    setupTheme();
    updateTotalProgress();
}

// Configurar event listeners
function setupEventListeners() {
    const $filterBtns = $$('.filter-btn');
    const $exportBtn = $('#export-btn');
    const $importBtn = $('#import-btn');
    const $fileInput = $('#file-input');

    // Selecciona el filtro, y le da la clase active al botón correspondiente
    $filterBtns.forEach(button => {
    //seleccionamos todos los .filter-btn 
        button.addEventListener('click', (e) => {
            //ponemos a escuchar el evento click 
            currentFilter = handleFilterClick(e, $filterBtns); // Delegamos en handleFilterClick, los cambios de estilos de los botones de filtro
            renderChecklist(); // renderizamos
        });
    });

    //Exporta los datos al hacer clic 
    $exportBtn.addEventListener('click', exportData);

    //Importa los datos al hacer clic
    $importBtn.addEventListener('click', () => {
    // capturamos el botón de de id import-btn y escuchamos el evento click
        $fileInput.click();
        //hacemos click en el input de id file-input, ya que el mismo no es visible
    });
    $fileInput.addEventListener('change', importData);
    //cuando se cambie file-input, se ejecuta el la funcion importData
    
    // Event delegation para cambios de estado de details
    document.addEventListener('toggle', (e) => { handleDetails(e, checklistData); }, true);
}

// Renderizar la checklist completa
function renderChecklist() {
    //Capturemos el contenedor donde vamos a renderizar y lo borramos
    const $container = $('#checklist-container');
    $container.innerHTML = '';

    // recorremos cada saga en el objeto
    for (const [sagaName, sagaData] of Object.entries(checklistData)) {

        const $sagaElement = createElement('div', 'saga');          // Creamos el elemento div con la clase saga
        const $details = createElement('details', 'saga-details');  //Creamos el elemento details, y le ponemos  el atributo open cuando corresponda, asi el details queda abierto
        if (sagaData.opened) {
            $details.setAttribute('open', 'true');
        }

        const percentage = calculateProgress(sagaData.seasons);       //calculamos el progreso de la saga
        const $summary = sagaSummaryCreator(sagaName, percentage);  // Creamos el summary de la saga
        const $contentDiv = sagaCreator(sagaData, sagaName);        // Creamos el contenedor de la seasons de la saga

        $details.appendChild($summary);
        $details.appendChild($contentDiv);
        /* 
            hasta aca tendriamos (2)
            <details class="saga-details" open>
                <summary class="saga-summary">
                    --- con todo lo del componente summary ---
                </summary>
                <div>
                    --- con todas las temporadas de la saga, o el mensaje de no hay items visibles ---
                </div>
            </details>
         */      
        $sagaElement.appendChild($details);     //agregamos el details  al contenedor .saga
        $container.appendChild($sagaElement);   //con cada iteración, agregamos la saga al contenedor
    }
}

// Alternar estado completo de un anime
function toggleAnimeComplete(animeId, sagaName) {
    const anime = checklistData[sagaName].seasons.find(a => a.id === animeId);
    //Buscamos el anime con ese id en el objeto
    if (anime) {
        //Si se ecnuetra el anime...
        anime.completed = !anime.completed;
        //Le cambiamos el estado del anime

        if (anime.completed && anime.episodes) {
            //Si el anime está completo y tiene episodios...
            anime.episodes.forEach(episode => {
                episode.completed = true;
            }); 
            //marcamos todos los episodios como completos
        } else if (!anime.completed && anime.episodes) {
            //Si el anime no está completo y tiene episodios...
            anime.episodes.forEach(episode => {
                episode.completed = false;
            });
            //desmarcamos todos los episodios como completos
        }
        saveChecklistData(checklistData); //Guardamos los datos en el localStorage
        renderChecklist(); //Volvemos a renderizar
        updateTotalProgress(); //Actualizamos el progreso total
    }
}

// Alternar estado completo de un episodio
function toggleEpisodeComplete(episodeId, animeId, sagaName) {
    const anime = checklistData[sagaName].seasons.find(a => a.id === animeId);
    //Buscamos el anime con ese id en el objeto
    if (anime && anime.episodes) {
        //Si se encuentra el anime y tiene episodios...
        const episode = anime.episodes.find(e => e.id === episodeId);
        //Buscamos el episodio con ese id en el anime
        if (episode) {
            //Si se encuentra el episodio...
            episode.completed = !episode.completed;
            //Le cambiamos el estado del episodio

            // Verificar si todos los episodios están completos para marcar el anime como completo
            const allEpisodesCompleted = anime.episodes.every(e => e.completed);
            //Verificamos si todos los episodios están completos para marcar el anime como completo
            anime.completed = allEpisodesCompleted;
            //Actualizamos el estado del anime
            
            saveChecklistData(checklistData); //Guardamos los datos en el localStorage
            renderChecklist(); //Volvemos a renderizar
            updateTotalProgress(); //Actualizamos el progreso total
        }
    }
}

// Actualizar progreso total
function updateTotalProgress() {
    const $totalProgressBar = $('#total-progress-bar');
    const $completedItems = $('#completed-items');
    const $totalItems = $('#total-items');
    const $percentage = $('#percentage');
    let totalItems = 0;
    let completedItems = 0;
    
    for (const saga of Object.values(checklistData)) {
        //Recorremos cada saga en el objeto
        let { total, completed } = countEpisodes(saga.seasons); //calculamos el total de episodios de la saga
        totalItems += total; //Calculamos el total de items de la saga
        completedItems += completed; //Calculamos el total de items completados de la saga
    }
    
    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    //si hay items, calculamos el porcentaje de completados, siempre que no sea 0
    
    $totalProgressBar.style.width = `${percentage}%`; //Actualizamos el progreso total
    $completedItems.textContent = completedItems; //Actualizamos el número de items completados
    $totalItems.textContent = totalItems; //Actualizamos el número de items totales
    $percentage.textContent = `${percentage}%`; //Actualizamos el porcentaje de completados
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);