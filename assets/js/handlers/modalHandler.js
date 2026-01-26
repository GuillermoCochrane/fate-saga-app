import { $ } from '../utilities/dom.js';

// Devuelve los diferentes tipos de secciones del modal
function modalSections() {
    return ['help', 'dynamic', 'confirm', 'selection']
}

// Oculta todas las secciones del modal
function sectionsHide() {
    const sections = modalSections();

    for (const section of sections) {
        const $section = $(`#${section}-section`);
        if ($section){
            $section.setAttribute('aria-hidden', true);
            $section.hidden = true;
        }
    }
}

// Abre el modal con la sección indicada visible
export function modalSectionHandler(sectionToShow) {
    const $modal = $('#multifunction-modal');
    const $section = $(`#${sectionToShow}-section`);
    if (!$section || !$modal) return;
    const sectionTitle =`${sectionToShow}-title`
    sectionsHide();


    $section.setAttribute('aria-hidden', false);
    $section.hidden = false;
    $modal.setAttribute('aria-labelledby', sectionTitle);
    $modal.setAttribute('aria-hidden', false);
    $modal.showModal();
}

// Abre el modal con la sección de confrimación visible
export function modalConfirmHandler(message, action) {
    const $confirmActionBtn = $('#confirm-action-btn');
    const $confirmMessage = $('#confirm-message');
    $confirmActionBtn?.setAttribute('data-action', action);
    $confirmMessage && ($confirmMessage.textContent = message);
    modalSectionHandler('confirm');
}

// Cierra el modal y oculta todas las secciones
export function modalCloser() {
    sectionsHide();
    const $modal = $('#multifunction-modal');
    if (!$modal) {
        $modal.setAttribute('aria-hidden', true);
        $modal.close();
    }
}