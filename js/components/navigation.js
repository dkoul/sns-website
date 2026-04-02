/**
 * Navigation Component
 * Handles mobile menu toggle and interactions
 */

class Navigation {
  constructor() {
    this.nav = null;
    this.toggle = null;
    this.menu = null;
    this.isOpen = false;
    this.init();
  }

  init() {
    // Wait for shared components to load
    const checkNav = setInterval(() => {
      this.nav = document.querySelector('[data-nav]');
      this.toggle = document.querySelector('[data-nav-toggle]');
      this.menu = document.querySelector('[data-nav-menu]');

      if (this.nav && this.toggle && this.menu) {
        clearInterval(checkNav);
        this.setupEventListeners();
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => clearInterval(checkNav), 5000);
  }

  setupEventListeners() {
    // Mobile toggle button
    this.toggle.addEventListener('click', () => this.toggleMenu());

    // Close menu when clicking on a link
    const links = this.menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (this.isOpen) {
          this.closeMenu();
        }
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.nav.contains(e.target)) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.menu.classList.add('is-open');
    this.toggle.classList.add('is-active');
    this.isOpen = true;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Trap focus
    this.trapFocus();
  }

  closeMenu() {
    this.menu.classList.remove('is-open');
    this.toggle.classList.remove('is-active');
    this.isOpen = false;

    // Restore body scroll
    document.body.style.overflow = '';
  }

  trapFocus() {
    const focusableElements = this.menu.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    this.menu.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    });

    // Focus first element
    firstFocusable.focus();
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
  });
} else {
  new Navigation();
}
