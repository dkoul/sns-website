/**
 * Lazy Loader
 * Handles lazy loading of images with Intersection Observer
 */

class LazyLoader {
  constructor() {
    this.imageObserver = null;
    this.init();
  }

  init() {
    // Check for Intersection Observer support
    if ('IntersectionObserver' in window) {
      this.setupObserver();
      this.observeImages();
    } else {
      // Fallback: load all images immediately
      this.loadAllImages();
    }
  }

  /**
   * Setup Intersection Observer
   */
  setupObserver() {
    const options = {
      rootMargin: '200px 0px', // Start loading images 200px before they enter viewport
      threshold: 0.01
    };

    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.imageObserver.unobserve(entry.target);
        }
      });
    }, options);
  }

  /**
   * Observe all lazy-load images
   */
  observeImages() {
    const images = document.querySelectorAll('img[data-src], img.lazy-load');
    images.forEach(img => {
      if (this.imageObserver) {
        this.imageObserver.observe(img);
      }
    });
  }

  /**
   * Load a single image
   */
  loadImage(img) {
    const src = img.dataset.src || img.src;

    // Create a temporary image to preload
    const tempImg = new Image();

    tempImg.onload = () => {
      img.src = src;
      img.classList.add('is-loaded');

      // Remove data-src attribute
      if (img.dataset.src) {
        delete img.dataset.src;
      }

      // Emit custom event
      img.dispatchEvent(new CustomEvent('imageLoaded', {
        detail: { src }
      }));
    };

    tempImg.onerror = () => {
      console.warn('Failed to load image:', src);
      img.classList.add('load-error');
    };

    tempImg.src = src;
  }

  /**
   * Fallback: load all images immediately
   */
  loadAllImages() {
    const images = document.querySelectorAll('img[data-src], img.lazy-load');
    images.forEach(img => this.loadImage(img));
  }

  /**
   * Manually trigger lazy load for dynamically added images
   */
  refresh() {
    this.observeImages();
  }
}

// Initialize when DOM is ready
let lazyLoader;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    lazyLoader = new LazyLoader();
  });
} else {
  lazyLoader = new LazyLoader();
}

// Export for use in other scripts
window.LazyLoader = LazyLoader;
window.lazyLoader = lazyLoader;
