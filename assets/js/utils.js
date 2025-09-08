// Referencias a elementos del DOM que se uttilizan frecuentemente
function themeElements() {
    return {
        $globalTag:     $('html'),
        $themeToggle:   $("#themeToggle")
    }
}

//* Utilidades

// Obtener elemento DOM
function $(selector) {
    return document.querySelector(selector);
}

// Obtener todos los elementos DOM
function $$(selector) {
    return document.querySelectorAll(selector);
}

// Crea elemento DOM con su clase
function createElement(tagName, className = null, content = null, isHTML = false, id = null) {
    const element = document.createElement(tagName);
    className && (element.className = className);
    id && (element.id = id);
    if (content !== null) {
        isHTML ? (element.innerHTML = content) : (element.textContent = content);
    }

    return element;
}

function createDetails( className, open = false) {
    const details = createElement('details', className);
    open && (details.setAttribute('open', 'true'));
    return details;
}

function createLabel(textContent, forId, className) {
    const label = createElement('label', className);
    forId && (label.htmlFor = forId);
    textContent && (label.textContent = textContent);
    return label;
}

function createCheckbox(id, checked = false, onChange = null, className) {
    const checkbox = createElement('input', className, null);
    checkbox.type = 'checkbox';
    id && (checkbox.id = id);
    checked && (checkbox.checked = checked);
    onChange && (checkbox.addEventListener('change', onChange));
    return checkbox;
}

// aplica tema oscuro
const enableDarkMode  = () => {
    const { $globalTag, $themeToggle } = themeElements();
    $globalTag.setAttribute('data-theme', 'dark'); // <html data-theme="dark">
    $themeToggle.textContent = '☀️';
}

// aplica tema claro
const enableLightMode = () => {
    const { $globalTag, $themeToggle } = themeElements();
    $globalTag.removeAttribute('data-theme');
    $themeToggle.textContent = '🌙';
}

// maneja el cambio de tema
const themeHandler = (settings, store = false) => {
    if (settings === 'dark') {
        enableDarkMode();
        if (store) localStorage.setItem('theme', 'dark');
    } else {
        enableLightMode();
        if (store) localStorage.setItem('theme', 'light');
    }
}

// Handler del tema de acuerdo a la preferencia del sistema, seleccion manual  del usuario o seleccion previa
function setupTheme() {
    const { $globalTag, $themeToggle } = themeElements();
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches; // comprobamos si la preferencia de tema es oscuro con la Api matchMedia
    
    // Establece tema inicial basado en preferencias del sistema
    themeHandler(prefersDarkScheme ? 'dark' : 'light'); 

    // Alternar tema al hacer clic
    $themeToggle.addEventListener('click', () => {
        const currentTheme = $globalTag.getAttribute('data-theme'); //recuperamos el valor del atributo data-theme (tema actual)
        themeHandler(currentTheme === 'dark' ? 'light' : 'dark', true); // cambiamos el tema
    });
    
    // Respeta la selección previa del usuario si existe
    const savedTheme = localStorage.getItem('theme'); // recuperamos el tema guardado en localStorage
    if (savedTheme) {
        // si el tema existe en localStorage...
        themeHandler(savedTheme); // establecemos el tema
    }
}

// Handler de notificaciones
function showNotification(message, isError = false) {
    const $notification = $('#notification');
    $notification.textContent = message; // Capturamos el elemento con id notification y le cambiamos el texto

    if (isError) {
        $notification.style.borderLeftColor = '#f44336'; // Si es un error, cambiamos el color de error
    } else {
        $notification.style.borderLeftColor = 'var(--completed-color)'; // Si no es un error, cambiamos al color de completado
    }

    $notification.classList.add('show'); //Agregamos la clase show al elemento $notification

    setTimeout(() => {
        $notification.classList.remove('show');
    }, 3000); //Eliminamos la clase show del elemento notification en 3 segundos
}

// Exportar datos
function exportData() {
    const dataStr = JSON.stringify(checklistData, null, 2); //Guardamos los datos de la checklist en un string JSON
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr); //Creamos un URI para el string de datos
    
    const exportFileDefaultName = 'fate-checklist.json'; //Nombre del archivo por defecto
    
    const linkElement = document.createElement('a'); //Creamos el un enlace
    linkElement.setAttribute('href', dataUri); //Asignamos el URI al atributo href del enlace
    linkElement.setAttribute('download', exportFileDefaultName); //Asignamos el nombre del archivo por defecto al atributo download del enlace
    linkElement.click(); //Hacemos click en el enlace para iniciar la descarga del archivo
    
    showNotification('Datos exportados con éxito'); //Mostramos una notificación con el mensaje de exportación exitosa
}

// Importar datos
function importData(event) {
    const file = event.target.files[0]; //Capturamos el primer archivo seleccionado
    if (!file) return; //Si no hay archivo, salimos de la función
    
    const reader = new FileReader(); //Creamos un objeto FileReader
    reader.onload = function(e) {
    // Cuando el archivo se cargue, ejecutamos la función
    // podemos sustituirlo con reader.addEventListener('load', function(e) {...})
        try {
            const importedData = JSON.parse(e.target.result); //Convertimos el JSON a un objeto
            saveChecklistData(importedData); //Guardamos los datos en el localStorage
            renderChecklist(); //Volvemos a renderizar
            updateTotalProgress(); //Actualizamos el progreso total
            showNotification('Datos importados con éxito'); //Mostramos una notificación con el mensaje de importación exitosa
        } catch (error) {
            showNotification('Error al importar datos: formato inválido', true); //Mostramos una notificación con el mensaje de error al importar datos
        }
    };
    reader.readAsText(file); //Leemos el archivo como texto
    
    // Reset input
    event.target.value = ''; //Reseteamos el input
}

// Cargar datos guardados o usar los predeterminados
function loadChecklistData() {
    const savedData = localStorage.getItem('fateChecklist'); //Capturamos los datos guardados en localStorage
    if (savedData) {
        return JSON.parse(savedData); //Si los datos existen, los convertimos a un objeto
    }
    return fateChecklistData; //Si no existen datos, devuelve los datos por defecto
}

// Guardar datos en localStorage
function saveChecklistData(data) {
    localStorage.setItem('fateChecklist', JSON.stringify(data)); //Convertimos los datos a un string JSON y lo guardamos en localStorage en el key 'fateChecklist'
    checklistData = data; //Actualizamos el objeto checklistData con los datos guardados
}

function countEpisodes(saga) {
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

//funcion que calcula porcentajes
function calculatePercentage(completed, total) {
    return  total > 0 ? Math.round((completed / total) * 100) : 0; // devolvemos el porcentaje de completados, siempre que no sea 0
}

//funcion que calcula el porcentaje de completados
function calculateProgress(data) {
    const { total, completed } = countEpisodes(data); //calculamos el total de episodios de la saga
    return calculatePercentage(completed, total);
}


// Determinar si un item debe mostrarse según el filtro actual
function shouldShowItem(item) {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return item.completed;
    if (currentFilter === 'incomplete') return !item.completed;
    return true;
}

// funcion que maneja los cambios de estado de details, con Event delegation 
function handleDetails(event, checklistData) {
    if (event.target.tagName === 'DETAILS') {
        //si se hizo click en un details
        const details = event.target;
        //guardamos el elemento
        const isOpen = details.open;
        //guardamos si el details abierto o cerrado
        
        // Encontrar el ID del elemento y actualizar su estado opened
        if (details.classList.contains('saga-details')) {
            //si el details tiene la clase saga-details
            const sagaName = details.querySelector('.saga-title').textContent;
            //guardamos el texto del título
            if (checklistData[sagaName]) {
                //si el título existe en el objeto
                checklistData[sagaName].opened = isOpen;
                //actualizamos el objeto, guardando el estado del details 
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
                const anime = sagaData.seasons.find(a => a.id === animeId);
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
}

//manejo de los cambios de filtro
function handleFilterClick(event, $button) {
    $button.forEach(button => button.classList.remove('active')); //para cada botón, quitamos la clase active
    event.target.classList.add('active'); //ponemos la clase active al botón que se ha seleccionado
    return event.target.dataset.filter; //actualizamos el filtro actual
}

// Crear las tempoaradas de la saga
function sagaCreator(sagaData, sagaName){
    const $sagaContainer = createElement('div'); //creamos el contendor de saga

    let hasVisibleItems = false; 

    for (const season of sagaData.seasons) {
        //recorremos cada season de la saga
        if (shouldShowItem(season)) {
            //si se debe mostrar la season
            hasVisibleItems = true;                             //lo ponemos visible ( valor booleano), para no crear el contendor del mensaje de no hay items visibles      
            const $animeItem = createAnimeItem(season, sagaName); //creamos el capitulo
            $sagaContainer.appendChild($animeItem);                //lo agregamos al contenedor
        }
    } // devuelve todas las temporadas de la saga, con sus episodios

    if (!hasVisibleItems) {
        //si no hay items visibles
        const $noItemsMsg = createElement('p', "empty-list", "No hay elementos que coincidan con el filtro");
        $sagaContainer.appendChild($noItemsMsg); // agregamos un mensaje de que no hay items visibles
    }
    return $sagaContainer;
}

// Crear el Summary de la saga, con el progreso de la misma
function sagaSummaryCreator(sagaName, progress){              
    const $summary = createElement('summary', 'saga-summary');              // Creamos el elemento summary con la clase saga-summary
    const $summaryContent = createElement('div', 'summary-content');        // Contenedor flexible para título y progreso
    const $sagaTitle = createElement('span', 'saga-title', sagaName);       // Título de la saga
    const progressHTML =  `<span class="progress-text">${progress}%</span>\n<div class="progress-bar">\n    <div class="progress-fill" style="width: ${progress}%"></div>\n</div>\n`;// Contenedor de progreso
    const $progressContainer = createElement('div', 'progress-container', progressHTML, true); // Creamos el elemento div con la clase progress-container

    $summaryContent.appendChild($sagaTitle);         // agregamos  el titulo 
    $summaryContent.appendChild($progressContainer); // agregamos el contenedor de progreso
    $summary.appendChild($summaryContent);           // agregamos summaryContent al summary

    /* 
        hasta aca tendriamos (1)
        <summary class="saga-summary">
            <div class="summary-content">
                <span class="saga-title">Saga X</span>
                <div class="progress-container">
                    <span class="progress-text">100%</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </summary>
        */

    return $summary;
}