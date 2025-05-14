// Script específico para la página de detalle de proyecto

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones
    initAnimations();
    
    // Inicializar efectos de parallax
    initParallax();
    
    // Inicializar efectos de tecnologías
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
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
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
}

// Función para inicializar efectos de parallax
function initParallax() {
    // Efecto para la imagen principal
    const projectImageContainer = document.querySelector('.project-image-container');
    const projectImage = document.querySelector('.project-image');
    
    if (projectImageContainer && projectImage) {
        projectImageContainer.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 768) { // Solo en pantallas grandes
                const containerRect = this.getBoundingClientRect();
                const mouseX = e.clientX - containerRect.left;
                const mouseY = e.clientY - containerRect.top;
                
                // Calcular posición relativa del mouse (0-1)
                const relativeX = mouseX / containerRect.width;
                const relativeY = mouseY / containerRect.height;
                
                // Aplicar movimiento suave a la imagen (máx 15px en cada dirección)
                const moveX = (relativeX - 0.5) * 15;
                const moveY = (relativeY - 0.5) * 15;
                
                projectImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
                
                // Mover la decoración en dirección opuesta
                const imageDecoration = this.querySelector('.image-decoration');
                if (imageDecoration) {
                    imageDecoration.style.transform = `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
                    imageDecoration.style.opacity = 0.4 + (relativeY * 0.2);
                }
            }
        });
        
        // Restablecer al salir
        projectImageContainer.addEventListener('mouseleave', function() {
            projectImage.style.transform = '';
            const imageDecoration = this.querySelector('.image-decoration');
            if (imageDecoration) {
                imageDecoration.style.transform = '';
                imageDecoration.style.opacity = '';
            }
        });
    }
    
    // Efecto para las imágenes de contenido
    const contentImages = document.querySelectorAll('.content-image');
    
    contentImages.forEach(container => {
        const image = container.querySelector('img');
        
        if (image) {
            container.addEventListener('mousemove', function(e) {
                if (window.innerWidth > 768) {
                    const containerRect = this.getBoundingClientRect();
                    const mouseX = e.clientX - containerRect.left;
                    const mouseY = e.clientY - containerRect.top;
                    
                    // Calcular posición relativa
                    const relativeX = mouseX / containerRect.width;
                    const relativeY = mouseY / containerRect.height;
                    
                    // Movimiento más sutil para estas imágenes
                    const moveX = (relativeX - 0.5) * 10;
                    const moveY = (relativeY - 0.5) * 10;
                    
                    image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
                }
            });
            
            container.addEventListener('mouseleave', function() {
                image.style.transform = '';
            });
        }
    });
    
    // Efecto de parallax para el contenedor de conclusión
    const conclusionContainer = document.querySelector('.conclusion-container');
    const conclusionIcon = document.querySelector('.conclusion-icon');
    
    if (conclusionContainer && conclusionIcon) {
        conclusionContainer.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 768) {
                const containerRect = this.getBoundingClientRect();
                const mouseX = e.clientX - containerRect.left;
                const mouseY = e.clientY - containerRect.top;
                
                const relativeX = mouseX / containerRect.width;
                const relativeY = mouseY / containerRect.height;
                
                const moveX = (relativeX - 0.5) * 20;
                const moveY = (relativeY - 0.5) * 20;
                
                conclusionIcon.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        conclusionContainer.addEventListener('mouseleave', function() {
            conclusionIcon.style.transform = '';
        });
    }
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
            // Crear efecto de pulsación suave - distinto timing para cada icono
            const delay = 3000 + Math.random() * 2000;
            setInterval(() => {
                icon.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 1000);
            }, delay);
            
            // Asegurar transición suave
            icon.style.transition = 'transform 0.5s ease-in-out';
        }
    });
}

// Actualizar los enlaces de navegación entre proyectos
function updateProjectNavigationLinks() {
    // Esta función puede ser mejorada con lógica backend para obtener proyectos reales
    // Por ahora solo usamos enlaces genéricos
    
    const prevLink = document.querySelector('.prev-project');
    const nextLink = document.querySelector('.next-project');
    
    if (prevLink && nextLink) {
        // Obtener el ID actual de la URL
        const currentUrl = window.location.pathname;
        const projectId = parseInt(currentUrl.match(/\/(\d+)\/$/)?.[1]);
        
        if (projectId) {
            // Actualizar enlaces con IDs relativos
            prevLink.href = `/proyectos/${projectId - 1}/`;
            nextLink.href = `/proyectos/${projectId + 1}/`;
            
            // Desactivar "anterior" si estamos en el primero
            if (projectId === 1) {
                prevLink.classList.add('disabled');
                prevLink.setAttribute('aria-disabled', 'true');
                prevLink.style.opacity = '0.5';
                prevLink.style.pointerEvents = 'none';
            }
        }
    }
}

// Detectar cuando se hace scroll para añadir efectos
window.addEventListener('scroll', function() {
    const header = document.querySelector('.project-header');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (header) {
        // Efecto de parallax en el encabezado al hacer scroll
        header.style.backgroundPositionY = scrollTop * 0.5 + 'px';
    }
    
    // Efecto de revelación para bloques de contenido
    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach(block => {
        const rect = block.getBoundingClientRect();
        const isVisible = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8;
        
        if (isVisible) {
            block.classList.add('in-view');
        }
    });
});

// Actualizar el año actual en el footer si existe
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}