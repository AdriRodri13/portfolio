// Script sencillo para la página de proyectos

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar filtros
    initFilters();
    
    // Actualizar el año actual en el footer
    updateYear();
});

// Función para inicializar los filtros de proyectos
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Añadir event listener a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase activa al botón clicado
            this.classList.add('active');
            
            // Obtener el filtro seleccionado
            const filter = this.getAttribute('data-filter');
            
            // Mostrar u ocultar proyectos según filtro
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Función para actualizar el año en el footer
function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}