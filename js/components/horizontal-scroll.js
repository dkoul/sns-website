/**
 * Horizontal Scroll Gallery
 * Handles horizontal scrolling galleries with progress indicator
 */

class HorizontalScroll {
  constructor(element) {
    this.gallery = element;
    this.viewport = element.querySelector('.horizontal-gallery__viewport');
    this.track = element.querySelector('.horizontal-gallery__track');
    this.progressBar = element.querySelector('.horizontal-gallery__progress-bar');
    this.init();
  }

  init() {
    if (!this.viewport) return;

    this.setupScrollListener();
    this.updateProgress();
  }

  setupScrollListener() {
    this.viewport.addEventListener('scroll', App.throttle(() => {
      this.updateProgress();
    }, 50), { passive: true });
  }

  updateProgress() {
    if (!this.progressBar) return;

    const scrollWidth = this.viewport.scrollWidth - this.viewport.clientWidth;
    const scrollLeft = this.viewport.scrollLeft;
    const progress = (scrollLeft / scrollWidth) * 100;

    this.progressBar.style.width = `${progress}%`;
  }

  /**
   * Scroll to a specific item
   */
  scrollToItem(index) {
    const items = this.track.querySelectorAll('.horizontal-gallery__item');
    if (items[index]) {
      items[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }
}

// Initialize all horizontal galleries when DOM is ready
function initHorizontalGalleries() {
  const galleries = document.querySelectorAll('[data-horizontal-scroll]');
  galleries.forEach(gallery => {
    new HorizontalScroll(gallery);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHorizontalGalleries);
} else {
  initHorizontalGalleries();
}

window.HorizontalScroll = HorizontalScroll;
