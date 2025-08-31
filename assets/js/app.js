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
    // Selecciona el filtro, y le da la clase active al botón correspondiente
    document.querySelectorAll('.filter-btn').forEach(btn => {
    //seleccionar todos los botones de clase filter-btn 
        btn.addEventListener('click', (e) => {
        //ponemos a escuchar el evento click
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            //para cada botón, quitamos la clase active de todos los botones de clase filter-btn
            e.target.classList.add('active');
            //ponemos la clase active al botón que se ha seleccionado
            currentFilter = e.target.dataset.filter;
            //actualizamos el filtro actual
            renderChecklist();
        });
    });

    //Exporta los datos al hacer clic 
    document.getElementById('export-btn').addEventListener('click', exportData);
    
    //Importa los datos al hacer clic
    document.getElementById('import-btn').addEventListener('click', () => {
    // capturamos el boton de de id import-btn y escuchamos el evento click
        document.getElementById('file-input').click();
        //hacemos click en el input de id file-input, ya que el mismo no es visible
    });
    document.getElementById('file-input').addEventListener('change', importData);
    //cuando se cambie file-input, se ejecuta el la funcion importData
    
    // Event delegation para cambios de estado de details
    document.addEventListener('toggle', (e) => {
        if (e.target.tagName === 'DETAILS') {
            //si se hizo click en un details
            const details = e.target;
            //guardamos el elemento
            const isOpen = details.open;
            //guardamos si el details abierto o cerrado
            
            // Encontrar el ID del elemento y actualizar su estado opened
            if (details.classList.contains('saga-details')) {
                //si el details tiene la clase saga-details
                const sagaName = details.querySelector('.saga-title').textContent;
                //guardamos el texto del titulo
                if (checklistData[sagaName]) {
                    //si el titulo existe en el objeto
                    checklistData[sagaName].opened = isOpen;
                    //actualizamos el objeto, guardando el estado abierto
                    saveChecklistData(checklistData);
                    //lo guardamos en el localStorage
                }
            } 
            else if (details.classList.contains('anime-details')) {
                //si el details tiene la clase anime-details
                const animeId = details.querySelector('input[type="checkbox"]').id.replace('main-', '');
                //guardamos el id del checkbox
                
                // recorrremos todas las sagas en localStorage
                for (const [sagaName, sagaData] of Object.entries(checklistData)) {
                    const anime = sagaData.items.find(a => a.id === animeId);
                    // capturamos el anime con ese id
                    if (anime) {
                        //si encuentra el anime
                        anime.opened = isOpen;
                        //actualizamos el estado abierto
                        saveChecklistData(checklistData);
                        //lo guardamos en el localStorage
                        break;
                    }
                }
            }
        }
    }, true);
}

// Renderizar la checklist completa
function renderChecklist() {
    //* pendiente: hacer diagrama de los contenedores que vamos generando para renderizar la checklist completa

    const container = document.getElementById('checklist-container');
    container.innerHTML = '';
    //Capturemos el contenedor donde vamos a renderizar y lo borramos

    for (const [sagaName, sagaData] of Object.entries(checklistData)) {
        // recorremos cada saga en el objeto

        const sagaElement = document.createElement('div');
        sagaElement.className = 'saga';
        //creamos el elemento div con la clase saga

        const details = document.createElement('details');
        details.className = 'saga-details';
        if (sagaData.opened) {
            details.setAttribute('open', 'true');
        }
        //creamos el elemento details con la clase saga-details, y le ponemos  el atributo open cuando corresponda, asi el details queda abierto

        const summary = document.createElement('summary');
        summary.className = 'saga-summary';
        //creamos el elemento summary con la clase saga-summary

        // Calcular progreso de la saga
        const totalItems = countItems(sagaData.items); //calculamos el total de items de la saga
        const completedItems = countCompletedItems(sagaData.items); //calculamos el total de items completados de la saga
        const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0; // calculamos el porcentaje de completados, siempre que no sea 0

        // Contenedor flexible para título y progreso
        const summaryContent = document.createElement('div');
        summaryContent.className = 'summary-content';
        //creamos el elemento div con la clase summary-content

        // Título de la saga
        const sagaTitle = document.createElement('span');
        sagaTitle.className = 'saga-title';
        sagaTitle.textContent = sagaName;
        //creamos el elemento span con la clase saga-title, y le ponemos el texto del titulo de la saga

        // Contenedor de progreso
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        progressContainer.innerHTML = `
            <span class="progress-text">${percentage}%</span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        //creamos el elemento div con la clase progress-container, y le ponemos el valor del porcentaje y la barra de progreso

        summaryContent.appendChild(sagaTitle);
        summaryContent.appendChild(progressContainer);
        summary.appendChild(summaryContent);
        //agregamos al contenido del summaryContent el titulo y el contenedor de progreso, y lo agregamos al summary

        const contentDiv = document.createElement('div');
        //creamos el elemento div 
        
        // Renderizar items de la saga (filtrando si es necesario)
        let hasVisibleItems = false;
        
        sagaData.items.forEach(item => {
            //recorremos cada item de la saga
            if (shouldShowItem(item)) {
                //si se debe mostrar el item
                hasVisibleItems = true;
                //lo ponemos visible ( valor booleano), para no crear el contendor del mensaje de no hay items visibles
                contentDiv.appendChild(createAnimeItem(item, sagaName));
                //lo agregamos al contenedor
            }
        });

        if (!hasVisibleItems) {
            //si no hay items visibles
            const noItemsMsg = document.createElement('p');
            noItemsMsg.style.padding = '15px';
            noItemsMsg.style.textAlign = 'center';
            noItemsMsg.style.color = '#888';
            noItemsMsg.textContent = 'No hay elementos que coincidan con el filtro';
            // agregamos un mensaje de no hay items visibles
            contentDiv.appendChild(noItemsMsg);
            //lo agregamos al contenedor
        }
        
        details.appendChild(summary);
        details.appendChild(contentDiv);
        //agregamos  el summary y el contenedor al details
        sagaElement.appendChild(details);
        //agregamos el details al elemento div de la saga
        container.appendChild(sagaElement);
        //lo agregamos al contenedor
    }
}

// Crear elemento de anime con sus episodios
function createAnimeItem(item, sagaName) {
    const animeDiv = document.createElement('div');
    animeDiv.className = 'anime-item';
    //creamos el elemento div con la clase anime-item
    
    const details = document.createElement('details');
    details.className = 'anime-details';
    if (item.opened) {
        details.setAttribute('open', 'true');
    }
    //creamos el elemento details con la clase anime-details, y le ponemos  el atributo open cuando corresponda, asi el details queda abierto
    
    const summary = document.createElement('summary');
    summary.className = 'anime-summary';
    //creamos el elemento summary con la clase anime-summary
    
    // Checkbox para el anime completo
    const animeCheckbox = document.createElement('input');
    animeCheckbox.type = 'checkbox';
    animeCheckbox.id = `main-${item.id}`;
    animeCheckbox.checked = item.completed || false;
    //creamos el checkbox y le ponemos el id del correspondiente, dejandolo marcado segun corresponda

    animeCheckbox.addEventListener('change', () => toggleAnimeComplete(item.id, sagaName));
    //Escuchamos el evento change del checkbox, y llamamos a la funcion toggleAnimeComplete
    
    // Contenedor para título y formato
    const titleContainer = document.createElement('div');
    titleContainer.className = 'anime-title-container';
    //creamos el elemento div con la clase anime-title-container
    
    const label = document.createElement('label');
    label.htmlFor = `main-${item.id}`; // 
    label.textContent = item.label;
    // creamos el label vinculandolo con el  checkbox correspondiente, y le agregamos el texto que corresponda
    
    const formatSpan = document.createElement('span');
    formatSpan.className = 'anime-format';
    formatSpan.textContent = `${item.format}`;
    //creamos el elemento span con la clase anime-format, y le ponemos el texto del formato del anime
    
    titleContainer.appendChild(label);
    titleContainer.appendChild(formatSpan);
    // Agregamos el label y el span al contenedor de título

    summary.appendChild(animeCheckbox);
    summary.appendChild(titleContainer);
    // Agregamos el checkbox y el contenedor de título al summary
    
    const checklist = document.createElement('div');
    checklist.className = 'checklist';
    //creamos el elemento div con la clase checklist
    
    // Si hay episodios, renderizarlos
    if (item.episodes && item.episodes.length > 0) {
    //si items tiene elementos...
        const episodeList = document.createElement('div');
        episodeList.className = 'episode-list';
        //creamos el elemento div con la clase episode-list
        
        item.episodes.forEach(episode => {
            episodeList.appendChild(createEpisodeItem(episode, item.id, sagaName));
        });
        //recorremos cada episodio del item, y lo agregamos al contenedor de episodios
        
        checklist.appendChild(episodeList);
        //lo agregamos al contenedor de clase checklist
    }
    
    details.appendChild(summary);
    details.appendChild(checklist);
    //agregamos el summary y el contenedor de clase checklist al details
    animeDiv.appendChild(details);
    //agregamos el details al elemento div de la anime

    return animeDiv; //devuelve el elemento padre completo, con todos sus elementos hijos
}

// Crear elemento de episodio individual
function createEpisodeItem(episode, animeId, sagaName) {
    const episodeDiv = document.createElement('div');
    episodeDiv.className = 'check-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = episode.id;
    checkbox.checked = episode.completed || false;
    checkbox.addEventListener('change', () => toggleEpisodeComplete(episode.id, animeId, sagaName));
    
    const label = document.createElement('label');
    label.htmlFor = episode.id;
    
    // Añadir número de episodio en negrita
    const episodeNumber = document.createElement('span');
    episodeNumber.className = 'episode-number';
    episodeNumber.innerHTML = `<strong>Episodio ${episode.number}:</strong>`;
    
    label.appendChild(episodeNumber);
    label.appendChild(document.createTextNode(` ${episode.label}`));
    
    episodeDiv.appendChild(checkbox);
    episodeDiv.appendChild(label);
    
    return episodeDiv;
}

// Alternar estado completo de un anime
function toggleAnimeComplete(animeId, sagaName) {
    const anime = checklistData[sagaName].items.find(a => a.id === animeId);
    if (anime) {
        anime.completed = !anime.completed;
        
        // Si se marca como completado, marcar todos los episodios como completados
        if (anime.completed && anime.episodes) {
            anime.episodes.forEach(episode => {
                episode.completed = true;
            });
        }
        
        saveChecklistData(checklistData);
        renderChecklist();
        updateTotalProgress();
    }
}

// Alternar estado completo de un episodio
function toggleEpisodeComplete(episodeId, animeId, sagaName) {
    const anime = checklistData[sagaName].items.find(a => a.id === animeId);
    if (anime && anime.episodes) {
        const episode = anime.episodes.find(e => e.id === episodeId);
        if (episode) {
            episode.completed = !episode.completed;
            
            // Verificar si todos los episodios están completos para marcar el anime como completo
            const allEpisodesCompleted = anime.episodes.every(e => e.completed);
            anime.completed = allEpisodesCompleted;
            
            saveChecklistData(checklistData);
            renderChecklist();
            updateTotalProgress();
        }
    }
}

// Actualizar progreso total
function updateTotalProgress() {
    let totalItems = 0;
    let completedItems = 0;
    
    for (const saga of Object.values(checklistData)) {
        totalItems += countItems(saga.items);
        completedItems += countCompletedItems(saga.items);
    }
    
    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    document.getElementById('total-progress-bar').style.width = `${percentage}%`;
    document.getElementById('completed-items').textContent = completedItems;
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('percentage').textContent = `${percentage}%`;
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);