// Funciones para manipular el DOM

// Obtener elemento DOM
export function $(selector) {
    return document.querySelector(selector);
}

// Obtener todos los elementos DOM
export function $$(selector) {
    return document.querySelectorAll(selector);
}

// Crea elemento DOM con su clase
export function createElement(tagName, className = null, content = null, isHTML = false, id = null) {
    const element = document.createElement(tagName);
    className && (element.className = className);
    id && (element.id = id);
    if (content !== null) {
        isHTML ? (element.innerHTML = content) : (element.textContent = content);
    }

    return element;
}

// Crea etiqueta Details
export function createDetails( className, open = false) {
    const details = createElement('details', className);
    open && (details.setAttribute('open', 'true'));
    return details;
}

// Crea etiqueta Label
export function createLabel(textContent, forId, className) {
    const label = createElement('label', className);
    forId && (label.htmlFor = forId);
    textContent && (label.textContent = textContent);
    return label;
}

// Crea etiqueta input tipo Checkbox
export function createCheckbox(id, checked = false, onChange = null, className = null, parentSagaID = null, ariaLabel = null) {
    const checkbox = createElement('input', className, null);
    checkbox.type = 'checkbox';
    id && (checkbox.id = id);
    checkbox.checked = checked;
    onChange && (checkbox.addEventListener('change', onChange));
    parentSagaID && (checkbox.dataset.parentSagaID = parentSagaID);
    ariaLabel && (checkbox.setAttribute('aria-label', ariaLabel));
    checkbox.setAttribute('role', 'checkbox');
    checkbox.setAttribute('aria-checked', checked);
    return checkbox;
}

export function createOption(value, text, selected = false, disabled = false) {
    const $option = createElement('option', null, text);
    $option.value = value;
    if (selected) $option.selected = true;
    if (disabled) $option.disabled = true;
    return $option;
}