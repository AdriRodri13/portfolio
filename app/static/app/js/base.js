// Script específico para la página de inicio - Versión mejorada
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones
    initAnimations();
    
    // Añadir efectos a las tarjetas de proyectos
    initProjectCards();
    
    // Inicializar timeline
    initTimeline();
    
    // Inicializar contadores para tecnologías
    initTechItems();
});

// Función para inicializar las animaciones
function initAnimations() {
    // Animación para los elementos con la clase fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Función para verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Función para animar elementos cuando entran en el viewport
    function checkVisibility() {
        fadeElements.forEach((element, index) => {
            if (isInViewport(element)) {
                // Añadir un retraso incremental para efecto cascada
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 150);
            }
        });
    }
    
    // Comprobar visibilidad inicial después de un pequeño retraso
    setTimeout(checkVisibility, 300);
    
    // Comprobar visibilidad al hacer scroll con throttling para mejor rendimiento
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                checkVisibility();
                scrollTimeout = null;
            }, 100);
        }
    });
    
    // Animar elementos de la sección hero específicamente
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        setTimeout(() => {
            heroSection.classList.add('active');
        }, 100);
    }
}

// Función para inicializar efectos en las tarjetas de proyectos
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Efecto de seguimiento del mouse para las tarjetas
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const x = e.clientX - cardRect.left; // posición x dentro del elemento
            const y = e.clientY - cardRect.top;  // posición y dentro del elemento
            
            // Calcular rotación basada en la posición del mouse
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Aplicar la transformación
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        // Restablecer transformación al salir del elemento
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            setTimeout(() => {
                this.classList.remove('hovered');
            }, 100);
        });
        
        // Añadir clase de hover
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
    });
}

// Función para inicializar efectos en la línea de tiempo
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Animar elementos de la línea de tiempo cuando entran en el viewport
    function animateTimelineItems() {
        timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85;
            
            if (isVisible) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Configurar animación inicial
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Efecto hover para los iconos
        const icon = item.querySelector('.timeline-icon');
        if (icon) {
            item.addEventListener('mouseenter', function() {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.backgroundColor = 'var(--accent-color)';
                icon.style.color = 'var(--bg-dark)';
                icon.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                icon.style.transform = '';
                icon.style.backgroundColor = '';
                icon.style.color = '';
            });
        }
    });
    
    // Comprobar visibilidad inicial después de un retraso
    setTimeout(animateTimelineItems, 500);
    
    // Comprobar visibilidad al hacer scroll
    window.addEventListener('scroll', animateTimelineItems);
}

// Función para inicializar efectos en los elementos de tecnologías
function initTechItems() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        // Efecto de entrada escalonado
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 + index * 150);
        
        // Configuración inicial
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Efecto de pulsación para los iconos
        const icon = item.querySelector('.tech-icon');
        if (icon) {
            // Crear efecto de pulsación suave
            setInterval(() => {
                icon.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 1000);
            }, 3000);
            
            // Asegurar transición suave
            icon.style.transition = 'transform 0.5s ease-in-out';
        }
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

// Añadir efecto de partículas de fondo si se desea (descomentando este código)
/*
function initParticles() {
    const mainContent = document.querySelector('.main-content');
    const particles = 50;
    
    for(let i = 0; i < particles; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        
        // Posición aleatoria
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Tamaño aleatorio
        const size = Math.random() * 5 + 1;
        
        // Asignar propiedades
        particle.style.top = `${posY}%`;
        particle.style.left = `${posX}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Añadir al DOM
        mainContent.appendChild(particle);
    }
}
*/