// Funciones para manipular el tema
import { $ } from './dom.js';

// Referencias a elementos del DOM que se uttilizan frecuentemente
const themeElements = {
    get $globalTag() { return $('html'); },
    get $themeToggle() { return $("#themeToggle"); }
};

// aplica tema oscuro
export function enableDarkMode(){
    const { $globalTag, $themeToggle } = themeElements;
    $globalTag.setAttribute('data-theme', 'dark'); // <html data-theme="dark">
    $themeToggle.textContent = '☀️';
}

// aplica tema claro
export function enableLightMode() {
    const { $globalTag, $themeToggle } = themeElements;
    $globalTag.removeAttribute('data-theme');
    $themeToggle.textContent = '🌙';
}

// maneja el cambio de tema
export function themeHandler(settings, store = false) {
    if (settings === 'dark') {
        enableDarkMode();
        if (store) localStorage.setItem('theme', 'dark');
    } else {
        enableLightMode();
        if (store) localStorage.setItem('theme', 'light');
    }
}

// Handler del tema de acuerdo a la preferencia del sistema, seleccion manual  del usuario o seleccion previa
export function setupTheme() {
    const { $globalTag, $themeToggle } = themeElements;
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