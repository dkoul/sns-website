/**
 * Shared Components
 * Injects navigation and footer templates across all pages
 */

const TEMPLATES = {
  nav: `
    <nav class="site-nav" data-nav>
      <div class="site-nav__container">
        <a href="./index.html" class="site-nav__logo">
          <span class="site-nav__logo-main">Sheen and Sozni</span>
          <span class="site-nav__logo-sub">by Bhawana</span>
        </a>

        <ul class="site-nav__menu" data-nav-menu>
          <li><a href="./collections.html" data-nav-link>Collections</a></li>
          <li><a href="./story.html" data-nav-link>Our Story</a></li>
          <li><a href="./craft.html" data-nav-link>The Craft</a></li>
          <li><a href="./contact.html" data-nav-link>Private Viewing</a></li>
        </ul>

        <button class="site-nav__toggle" aria-label="Toggle Navigation" data-nav-toggle>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,

  footer: `
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__content">
          <div class="site-footer__section">
            <h3>Sheen and Sozni</h3>
            <p>Preserving the timeless art of Kashmiri embroidery. Each piece is a labor of love, crafted by skilled artisans using techniques passed down through generations.</p>
          </div>

          <div class="site-footer__section">
            <h3>Explore</h3>
            <ul>
              <li><a href="./collections.html">Collections</a></li>
              <li><a href="./story.html">Our Story</a></li>
              <li><a href="./craft.html">The Craft</a></li>
              <li><a href="./contact.html">Contact</a></li>
            </ul>
          </div>

          <div class="site-footer__section">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="mailto:hello@sheensozni.com">hello@sheensozni.com</a></li>
            </ul>
          </div>
        </div>

        <div class="site-footer__bottom">
          <p>&copy; 2026 Sheen and Sozni by Bhawana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
};

/**
 * Inject shared components into the page
 */
function injectSharedComponents() {
  // Inject navigation
  const navPlaceholder = document.querySelector('[data-component="nav"]');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = TEMPLATES.nav;
  }

  // Inject footer
  const footerPlaceholder = document.querySelector('[data-component="footer"]');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = TEMPLATES.footer;
  }

  // Set active page in navigation
  setActivePage();
}

/**
 * Set active page indicator in navigation
 */
function setActivePage() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('[data-nav-link]');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPage.includes(linkPath) || (currentPage === '/' && linkPath === '/index.html')) {
      link.classList.add('is-active');
    }
  });
}

// Auto-execute when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSharedComponents);
} else {
  injectSharedComponents();
}
