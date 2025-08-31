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
    const themeToggle = document.getElementById('themeToggle'); // capturamos el elemento con id themeToggle
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches; // comprobamos si la preferencia de tema es oscuro con la Api matchMedia
    
    // Establecer tema inicial basado en preferencias del sistema
    if (prefersDarkScheme) {
        // Si la preferencia de tema es oscura, establecemos el tema en oscuro, y cambiamos el icono de alternar tema
        document.documentElement.setAttribute('data-theme', 'dark'); // <html data-theme="dark">
        // document.documentElement === document.querySelector('html')
        themeToggle.textContent = '☀️';
    } else {
        // si no es oscuro, establecemos el tema en claro, y cambiamos el icono de alternar tema
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    }
    
    // Alternar tema al hacer clic
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        //recuperamos el valor del atributo data-theme (tema actual)
        if (currentTheme === 'dark') {
            // si el tema actual es oscuro...
            document.documentElement.removeAttribute('data-theme'); // le removemos el atributo data-theme
            themeToggle.textContent = '🌙'; // cambiamos el icono
            localStorage.setItem('theme', 'light'); // guardamos el tema en localStorage
        } else {
            // si no es oscuro...
            document.documentElement.setAttribute('data-theme', 'dark'); // le agregamos el atributo data-theme = dark
            themeToggle.textContent = '☀️'; // cambiamos el icono
            localStorage.setItem('theme', 'dark'); // guardamos el tema en localStorage
        }
    });
    
    // Respeta la selección previa del usuario si existe
    const savedTheme = localStorage.getItem('theme'); // recuperamos el tema guardado en localStorage
    if (savedTheme) {
        // si el tema existe en localStorage...
        if (savedTheme === 'dark') {
            // si el tema es oscuro...
            document.documentElement.setAttribute('data-theme', 'dark'); // le agregamos el atributo data-theme = dark
            themeToggle.textContent = '☀️'; // cambiamos el icono
        } else {
            // si no es oscuro...
            document.documentElement.removeAttribute('data-theme'); // le removemos el atributo data-theme
            themeToggle.textContent = '🌙'; // cambiamos el icono
        }
    }
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