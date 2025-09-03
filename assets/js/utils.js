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
function createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}

//funcion que calcula porcentajes
function calculatePercentage(completed, total) {
    return  totalItems > 0 ? Math.round((completed / total) * 100) : 0; // devolvemos el porcentaje de completados, siempre que no sea 0
}

//funcion que calcula el porcentaje de completados
function calculateProgress(data) {
    const totalItems = countItems(data); //calculamos el total de items de la saga
    const completedItems = countCompletedItems(data); //calculamos el total de items completados de la saga
    return calculatePercentage(completedItems, totalItems);
}

// aplica tema oscuro
const enableDarkMode   = () => {
    const { $globalTag, $themeToggle } = themeElements();
    $globalTag.setAttribute('data-theme', 'dark'); // <html data-theme="dark">
    $themeToggle.textContent = '☀️';
}

// aplica tema claro
const enableLightMode = () => {
    const { $globalTag, $themeToggle } = themeElements();
    $globalTag.removeAttribute('data-theme');
    console.log($globalTag, $themeToggle);
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

// Contar items totales (incluyendo episodios)
function countItems(items) {
    let count = 0; //Inicializamos el contador a 0
    items.forEach(item => {
        count++; // recorremos cada item e incrementamos el contador en 1
        if (item.episodes && item.episodes.length > 0) {
            // si el item tiene episodios... 
            count += item.episodes.length; //incrementamos el contador en el número de episodios
        }
    });
    return count; //Devuelve el número de items totales
}

// Contar items completados (incluyendo episodios)
function countCompletedItems(items) {
    let count = 0; //Inicializamos el contador a 0
    items.forEach(item => {
    // Recorremos cada item
        if (item.completed) count++; // si el item está completo, incrementamos el contador en 1
        if (item.episodes && item.episodes.length > 0) {
            // si el item tiene episodios...
            item.episodes.forEach(episode => {
                if (episode.completed) count++; // si el episodio está completo, incrementamos el contador en 1
            });
        }
    });
    return count; //Devuelve el número de items completados
}

// Determinar si un item debe mostrarse según el filtro actual
function shouldShowItem(item) {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return item.completed;
    if (currentFilter === 'incomplete') return !item.completed;
    return true;
}