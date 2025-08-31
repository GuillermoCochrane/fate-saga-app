// Mostrar notificación
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    // Capturamos el elemento con id notification y lo cambiamos el texto
    
    if (isError) {
        // Si es un error, cambiamos el color de error
        notification.style.borderLeftColor = '#f44336';
    } else {
        // Si no es un error, cambiamos al color de completado
        notification.style.borderLeftColor = 'var(--completed-color)';
    }
    
    notification.classList.add('show');
    //Agregamos la clase show al elemento notification
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
    //Eliminamos la clase show del elemento notification en 3 segundos
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

// Configurar el tema claro/oscuro
function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Establecer tema inicial basado en preferencias del sistema
    if (prefersDarkScheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    }
    
    // Alternar tema al hacer clic
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Respeta la selección previa del usuario si existe
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        }
    }
}

// Cargar datos guardados o usar los predeterminados
function loadChecklistData() {
    const savedData = localStorage.getItem('fateChecklist');
    if (savedData) {
        return JSON.parse(savedData);
    }
    return fateChecklistData;
}

// Guardar datos en localStorage
function saveChecklistData(data) {
    localStorage.setItem('fateChecklist', JSON.stringify(data));
    checklistData = data;
}

// Contar items totales (incluyendo episodios)
function countItems(items) {
    let count = 0;
    items.forEach(item => {
        count++;
        if (item.episodes && item.episodes.length > 0) {
            count += item.episodes.length;
        }
    });
    return count;
}

// Contar items completados (incluyendo episodios)
function countCompletedItems(items) {
    let count = 0;
    items.forEach(item => {
        if (item.completed) count++;
        if (item.episodes && item.episodes.length > 0) {
            item.episodes.forEach(episode => {
                if (episode.completed) count++;
            });
        }
    });
    return count;
}

// Determinar si un item debe mostrarse según el filtro actual
function shouldShowItem(item) {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return item.completed;
    if (currentFilter === 'incomplete') return !item.completed;
    return true;
}