/**
 * Scroll Manager
 * Handles scroll-based animations and effects
 */

class ScrollManager {
  constructor() {
    this.scrollY = 0;
    this.ticking = false;
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupScrollEffects();
  }

  /**
   * Intersection Observer for fade-in animations
   */
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all elements with data-fade-in attribute
    const fadeElements = document.querySelectorAll('[data-fade-in]');
    fadeElements.forEach(el => observer.observe(el));
  }

  /**
   * Setup scroll event listeners
   */
  setupScrollEffects() {
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          this.ticking = false;
        });
        this.ticking = true;
      }
    }, { passive: true });

    // Initial check
    this.handleScroll();
  }

  /**
   * Handle scroll events
   */
  handleScroll() {
    this.updateNavState();
    this.updateParallax();
  }

  /**
   * Update navigation state based on scroll position
   */
  updateNavState() {
    const nav = document.querySelector('[data-nav]');
    if (!nav) return;

    if (this.scrollY > 100) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  /**
   * Update parallax elements
   */
  updateParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach(el => {
      const speed = el.dataset.parallax || 0.5;
      const yPos = -(this.scrollY * speed);
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ScrollManager();
  });
} else {
  new ScrollManager();
}
