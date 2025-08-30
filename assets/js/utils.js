// Mostrar notificación
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    
    if (isError) {
        notification.style.borderLeftColor = '#f44336';
    } else {
        notification.style.borderLeftColor = 'var(--completed-color)';
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Exportar datos
function exportData() {
    const dataStr = JSON.stringify(checklistData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'fate-checklist.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Datos exportados con éxito');
}

// Importar datos
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            saveChecklistData(importedData);
            renderChecklist();
            updateTotalProgress();
            showNotification('Datos importados con éxito');
        } catch (error) {
            showNotification('Error al importar datos: formato inválido', true);
        }
    };
    reader.readAsText(file);
    
    // Reset input
    event.target.value = '';
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