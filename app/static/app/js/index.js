// Script específico para la página de inicio

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar elementos animados
    initAnimations();
    
    // Añadir efectos de hover a las tarjetas de proyectos
    initProjectCards();
});

// Función para inicializar las animaciones
function initAnimations() {
    // Animación para los elementos con la clase fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Función para verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
        );
    }
    
    // Función para animar elementos cuando entran en el viewport
    function checkVisibility() {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
    }
    
    // Comprobar visibilidad inicial
    checkVisibility();
    
    // Comprobar visibilidad al hacer scroll
    window.addEventListener('scroll', checkVisibility);
}

// Función para inicializar efectos en las tarjetas de proyectos
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Detectar cuando el mouse entra en la tarjeta
        card.addEventListener('mouseenter', function() {
            // Añadir una clase para efectos adicionales si es necesario
            this.classList.add('hovered');
        });
        
        // Detectar cuando el mouse sale de la tarjeta
        card.addEventListener('mouseleave', function() {
            // Remover la clase de hover
            this.classList.remove('hovered');
        });
    });
}

// Función para alternar entre modo claro/oscuro (base para futuras implementaciones)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Guardar preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Comprobar si el usuario ya tenía modo oscuro activado
function checkDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Ejecutar la comprobación del modo oscuro
checkDarkModePreference();