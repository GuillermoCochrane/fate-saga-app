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
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderChecklist();
        });
    });

    // Importar/Exportar
    document.getElementById('export-btn').addEventListener('click', exportData);
    document.getElementById('import-btn').addEventListener('click', () => {
        document.getElementById('file-input').click();
    });
    document.getElementById('file-input').addEventListener('change', importData);
    
    // Event delegation para cambios de estado de details
    document.addEventListener('toggle', (e) => {
        if (e.target.tagName === 'DETAILS') {
            const details = e.target;
            const isOpen = details.open;
            
            // Encontrar el ID del elemento y actualizar su estado opened
            if (details.classList.contains('saga-details')) {
                const sagaName = details.querySelector('.saga-title').textContent;
                if (checklistData[sagaName]) {
                    checklistData[sagaName].opened = isOpen;
                    saveChecklistData(checklistData);
                }
            } 
            else if (details.classList.contains('anime-details')) {
                const animeId = details.querySelector('input[type="checkbox"]').id.replace('main-', '');
                
                // Buscar en todas las sagas este anime
                for (const [sagaName, sagaData] of Object.entries(checklistData)) {
                    const anime = sagaData.items.find(a => a.id === animeId);
                    if (anime) {
                        anime.opened = isOpen;
                        saveChecklistData(checklistData);
                        break;
                    }
                }
            }
        }
    }, true);
}

// Renderizar la checklist completa
function renderChecklist() {
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';

    for (const [sagaName, sagaData] of Object.entries(checklistData)) {
        const sagaElement = document.createElement('div');
        sagaElement.className = 'saga';
        
        const details = document.createElement('details');
        details.className = 'saga-details';
        if (sagaData.opened) {
            details.setAttribute('open', 'true');
        }
        
        const summary = document.createElement('summary');
        summary.className = 'saga-summary';
        
        // Calcular progreso de la saga
        const totalItems = countItems(sagaData.items);
        const completedItems = countCompletedItems(sagaData.items);
        const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
        
        // Contenedor flexible para título y progreso
        const summaryContent = document.createElement('div');
        summaryContent.className = 'summary-content';
        
        // Título de la saga
        const sagaTitle = document.createElement('span');
        sagaTitle.className = 'saga-title';
        sagaTitle.textContent = sagaName;
        
        // Contenedor de progreso
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        progressContainer.innerHTML = `
            <span class="progress-text">${percentage}%</span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        
        summaryContent.appendChild(sagaTitle);
        summaryContent.appendChild(progressContainer);
        summary.appendChild(summaryContent);
        
        const contentDiv = document.createElement('div');
        
        // Renderizar items de la saga (filtrando si es necesario)
        let hasVisibleItems = false;
        
        sagaData.items.forEach(item => {
            if (shouldShowItem(item)) {
                hasVisibleItems = true;
                contentDiv.appendChild(createAnimeItem(item, sagaName));
            }
        });
        
        if (!hasVisibleItems) {
            const noItemsMsg = document.createElement('p');
            noItemsMsg.style.padding = '15px';
            noItemsMsg.style.textAlign = 'center';
            noItemsMsg.style.color = '#888';
            noItemsMsg.textContent = 'No hay elementos que coincidan con el filtro';
            contentDiv.appendChild(noItemsMsg);
        }
        
        details.appendChild(summary);
        details.appendChild(contentDiv);
        sagaElement.appendChild(details);
        container.appendChild(sagaElement);
    }
}

// Crear elemento de anime con sus episodios
function createAnimeItem(item, sagaName) {
    const animeDiv = document.createElement('div');
    animeDiv.className = 'anime-item';
    
    const details = document.createElement('details');
    details.className = 'anime-details';
    if (item.opened) {
        details.setAttribute('open', 'true');
    }
    
    const summary = document.createElement('summary');
    summary.className = 'anime-summary';
    
    // Checkbox para el anime completo
    const animeCheckbox = document.createElement('input');
    animeCheckbox.type = 'checkbox';
    animeCheckbox.id = `main-${item.id}`;
    animeCheckbox.checked = item.completed || false;
    animeCheckbox.addEventListener('change', () => toggleAnimeComplete(item.id, sagaName));
    
    // Contenedor para título y formato
    const titleContainer = document.createElement('div');
    titleContainer.className = 'anime-title-container';
    
    const label = document.createElement('label');
    label.htmlFor = `main-${item.id}`;
    label.textContent = item.label;
    
    const formatSpan = document.createElement('span');
    formatSpan.className = 'anime-format';
    formatSpan.textContent = `${item.format}`;
    
    titleContainer.appendChild(label);
    titleContainer.appendChild(formatSpan);
    
    summary.appendChild(animeCheckbox);
    summary.appendChild(titleContainer);
    
    const checklist = document.createElement('div');
    checklist.className = 'checklist';
    
    // Si hay episodios, renderizarlos
    if (item.episodes && item.episodes.length > 0) {
        const episodeList = document.createElement('div');
        episodeList.className = 'episode-list';
        
        item.episodes.forEach(episode => {
            episodeList.appendChild(createEpisodeItem(episode, item.id, sagaName));
        });
        
        checklist.appendChild(episodeList);
    }
    
    details.appendChild(summary);
    details.appendChild(checklist);
    animeDiv.appendChild(details);
    
    return animeDiv;
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