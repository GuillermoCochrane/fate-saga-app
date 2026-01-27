//? Funciones encargada de manejar la aplicación

import { handleDetails, toggleSeasonComplete, toggleEpisodeComplete, resetProgress } from '../handlers/checklistHandlers.js';
import { handleFilterClick } from '../handlers/filterHandlers.js';
import { setupTheme } from '../handlers/themeHandler.js';
import { $, $$ } from '../utilities/dom.js';
import { importData, exportData, saveChecklistData, loadChecklistData, loadChecklistTitle, saveChecklistTitle } from '../utilities/storage.js'; 
import { updateChecklistTitle, renderFranchiseSelector} from '../handlers/selectHandler.js';
import { modalSectionHandler, modalCloser, modalConfirmHandler} from '../handlers/modalHandler.js';
import { exportTextReport } from '../handlers/reportHandler.js';
import { updateTotalProgress} from '../handlers/progressHandler.js';
import { showNotification } from '../handlers/notificationHandler.js';
import { renderChecklist } from '../handlers/renderHandler.js';

export let currentFilter = 'all';
export let checklistData = [];
export let checklistTitle = '';
let activeListener = false;
let shouldRenderTitle = true;

function initApp() {
    //Activamos los listeners y el theme, solo si no lo hicimos antes
    if (!activeListener){
        setupEventListeners();
        setupTheme();
        renderFranchiseSelector();
        activeListener = true;
    } 

    //Cargamos los datos de la checklist
    checklistData = loadChecklistData();
    checklistTitle = loadChecklistTitle();

    //Si no hay datos de la checklist, mostramos el modal de seleccion
    if (!checklistTitle || !checklistData.length){
        modalSectionHandler('selection');
        return;
    }

    // Actualizamos los datos de la app
    if (shouldRenderTitle) {
        updateChecklistTitle(checklistTitle);
        shouldRenderTitle = false;
    }

    renderChecklist(checklistData, currentFilter, handleToggleCheckbox);
    updateTotalProgress(checklistData);
}

// Configurar event listeners
function setupEventListeners() {
    const $filterBtns = $$('.filter-btn');
    const $exportBtn = $('#export-btn');
    const $importBtn = $('#import-btn');
    const $reportBtn = $('#report-btn');
    const $resetMemoryBtn = $('#reset-memory-btn');
    const $resetProgressBtn = $('#reset-progress-btn');
    const $confirmBtn = $('#confirm-action-btn');
    const $helpBtn = $('#help-btn');
    const $helpCloseBtn = $('#help-close-btn');
    const $cancelBtn = $('#cancel-action-btn');
    const $fileInput = $('#file-input');
    const $menu = $('#main-menu');
    const $summary = $menu.querySelector('summary');
    const $frachiseButton = $('#select-franchise-btn');

    // Selecciona el filtro, y le da la clase active al botón correspondiente
    $filterBtns.forEach(button => {
    //seleccionamos todos los .filter-btn 
        button.addEventListener('click', (e) => {
            //ponemos a escuchar el evento click 
            currentFilter = handleFilterClick(e, $filterBtns); // Delegamos en handleFilterClick, los cambios de estilos de los botones de filtro
            renderChecklist(checklistData, currentFilter, handleToggleCheckbox); // renderizamos
        });
    });

    //Cuando se cambie el estado del menú, actualizamos el estado de accesibilidad
    $menu.addEventListener('toggle', (e) => {
        $summary.setAttribute('aria-expanded', e.target.open);
    });

    //Confirma borrar memoria
    $resetMemoryBtn.addEventListener('click', () => {
        modalConfirmHandler('Estás a punto de borrar todos los datos de la memoria.', 'delete');
    });
    
    //Confirma resetear progreso
    $resetProgressBtn.addEventListener('click', () => {
        modalConfirmHandler('Estás a punto de resetear el progreso de la franquicia.', 'reset');
    });

    //Exporta los datos al hacer clic 
    $exportBtn.addEventListener('click', () => {
        exportData(checklistData, checklistTitle); // ← Pasar explícitamente
        showNotification('Datos exportados con éxito'); // ← Notificación aquí
    });

    //Confirma importar
    $importBtn.addEventListener('click', () => {
        modalConfirmHandler('Estás a punto de importar datos.', 'import');
    });

    //Eventos de confirmación multifuncional
    $confirmBtn.addEventListener('click', () => {
        const action = $confirmBtn.getAttribute('data-action'); // capturamos el atributo data-action
        if (action === 'import') {
            modalCloser();
            $fileInput.click(); //hacemos click en el input de id file-input, ya que el mismo no es visible
        }

        if (action === 'delete') {
            // Borra los datos guardados en localStorage
            modalCloser();
            localStorage.removeItem('checklist');
            localStorage.removeItem('checklistTitle');
            showNotification('Memoria borrada correctamente');
            setTimeout(() => {
                //location.reload();
                // aca tengo que abrir el modal de seleccion de franquicia en lugar de recargar
                modalSectionHandler('selection');
            }, 1000);
        }

        if (action === 'reset') {
            // Resetea el progreso de la franquicia
            modalCloser();
            checklistData = resetProgress(checklistData);
            saveChecklistData(checklistData);
            renderChecklist(checklistData, currentFilter, handleToggleCheckbox);
            updateTotalProgress(checklistData);
            showNotification('Progreso reseteado correctamente');
        }
    });

    // Cerrar modal y oculta todas las secciones
    $cancelBtn.addEventListener('click', () => {
        modalCloser();
    });

    //Genera el reporte
    $reportBtn.addEventListener('click', () => {
        exportTextReport(checklistData, checklistTitle);
        showNotification('Reporte generado con éxito');
    });

    //cuando se cambie file-input, se ejecuta el la funcion importData
    $fileInput.addEventListener('change', async (event) => {
        try {
            const importedData = await importData(event);
            checklistData = importedData.checklistData;
            checklistTitle = importedData.checklistTitle;
            shouldRenderTitle = true;
            saveChecklistData(checklistData);
            saveChecklistTitle(checklistTitle);
            renderChecklist(checklistData, currentFilter, handleToggleCheckbox);
            updateChecklistTitle(checklistTitle);
            updateTotalProgress(checklistData);
            showNotification('Datos importados con éxito');
        } catch (error) {
            showNotification('Error al importar: ' + error.message, true);
        }
    });
    
    // Abrir modal con la sección de ayuda visible
    $helpBtn.addEventListener('click', () => {
        modalSectionHandler('help');
    });

    // Cerrar modal y ocultar todas las secciones
    $helpCloseBtn.addEventListener('click', () => {
        modalCloser();
    });

    // Selecciona la franquicia
    $frachiseButton.addEventListener('click', (e) => {
        e.preventDefault();
        const $frachiseSelect = $('#franchise-select');
        // Guardamos el valor de la franquicia seleccionada
        const selectedValue = $frachiseSelect.value;
        if (!selectedValue) {
            showNotification('Por favor selecciona una franquicia', true);
            return;
        }

        // Cargamos los datos de la franquicia seleccionada
        checklistData = loadChecklistData(selectedValue);
        checklistTitle = loadChecklistTitle(selectedValue);
        
        // Actualizamos los datos en localStorage
        saveChecklistData(checklistData);
        saveChecklistTitle(checklistTitle);
        shouldRenderTitle = true;

        showNotification('Seleccionada la franquicia: ' + checklistTitle);
        modalCloser();
        initApp();
    });
    
    // Event delegation para cambios de estado de details
    document.addEventListener('toggle', (e) => { 
        const newData = handleDetails(e, checklistData);
        if (newData !== checklistData) { // ← Si hubo cambios
            checklistData = newData;
            saveChecklistData(checklistData);
            // NO necesita renderizar (solo cambia estado opened)
        }
    }, true);
}

// Renderizar la checklist completa

function handleToggleCheckbox(seasonID, sagaName, isEpisode = false, episodeID = null) {
    checklistData = isEpisode ? 
        toggleEpisodeComplete(episodeID, seasonID, sagaName, checklistData) : 
        toggleSeasonComplete(seasonID, sagaName, checklistData);
    saveChecklistData(checklistData);
    renderChecklist(checklistData, currentFilter, handleToggleCheckbox);
    updateTotalProgress(checklistData);
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);