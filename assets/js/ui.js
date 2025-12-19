// =============================================================================
// UI.JS - Módulo de interfaz de usuario
// =============================================================================
// Responsable de toda la manipulación del DOM y efectos visuales
// NUEVO: Incluye sistema de Lightbox para galería
// =============================================================================

export class UI {
  
  // ===========================================================================
  // NAVEGACIÓN
  // ===========================================================================
  
  /**
   * Configura scroll suave para todos los enlaces internos
   */
  static configurarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      });
    });
  }
  
  /**
   * Aplica efecto de cambio al navbar cuando se hace scroll
   */
  static aplicarEfectoNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  /**
   * Cierra el menú mobile al hacer click en un link
   */
  static cerrarMenuMobile() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }
  
  // ===========================================================================
  // UTILIDADES
  // ===========================================================================
  
  /**
   * Scroll suave a una sección específica
   * @param {string} selector - Selector CSS de la sección destino
   */
  static scrollSuaveA(selector) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      elemento.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
  
  /**
   * Debounce function para optimizar eventos frecuentes
   * @param {Function} func - Función a ejecutar
   * @param {number} wait - Tiempo de espera en ms
   * @returns {Function}
   */
  static debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}