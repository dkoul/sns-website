# Sheen & Sozni by Bhawana

A luxury digital boutique for Kashmiri embroidery featuring an Apple-inspired liquid glass aesthetic.

## Overview

This website showcases the exquisite craftsmanship of Kashmiri Sozni and Kashida embroidery through a calm, immersive browsing experience. The design philosophy emphasizes **slow luxury** over aggressive e-commerce, with inquiry-based purchasing and heritage storytelling at its core.

## Design System

### Liquid Glass Aesthetic
- **Glassmorphism**: Frosted glass panels with backdrop blur
- **Minimal Design**: Lots of white space, nothing loud or flashy
- **Smooth Transitions**: Gentle fades, subtle parallax effects
- **Performance-First**: Optimized for load times under 3 seconds

### Color Palette
- Deep black backgrounds (#0a0a0a)
- Soft white text (#f5f5f5)
- Kashmiri gold accent (#c9a55d)
- Deep burgundy accent (#6b2c3e)

### Typography
- **Headings**: Cormorant Garamond (serif, elegant)
- **Body**: Inter (sans-serif, clean, readable)
- **Fluid Scale**: Responsive font sizes that adapt to screen size

## Pages

1. **Home** ([index.html](index.html))
   - Fullscreen hero with glass overlay
   - Horizontal scroll gallery of featured pieces
   - Craft highlight section
   - Brand values

2. **Collections** ([collections.html](collections.html))
   - Grid of product cards with glass effects
   - Hover interactions with image zoom

3. **Product Detail** ([product.html](product.html))
   - Large image gallery
   - Glass panel with product information
   - Inquiry CTA

4. **Our Story** ([story.html](story.html))
   - Brand narrative and philosophy
   - Founder's message
   - Glass quote blocks

5. **The Craft** ([craft.html](craft.html))
   - Education about Sozni and Kashida embroidery
   - Process breakdown
   - Artisan stories

6. **Contact** ([contact.html](contact.html))
   - Private viewing inquiry form
   - WhatsApp and email contact
   - Social media links

## Technology Stack

- **HTML5**: Semantic markup for SEO and accessibility
- **CSS3**: Custom properties, glassmorphism, no preprocessor
- **Vanilla JavaScript**: Core interactions without heavy frameworks
- **No Build Tools**: Direct development for simplicity

## File Structure

```
sns-website/
├── index.html
├── collections.html
├── product.html
├── story.html
├── craft.html
├── contact.html
│
├── css/
│   ├── reset.css                 # Modern CSS reset
│   ├── variables.css             # Design tokens
│   ├── glass-system.css          # Glassmorphism components
│   ├── typography.css            # Font styles
│   ├── layout.css                # Grid and spacing
│   ├── utilities.css             # Helper classes
│   ├── components/               # Component styles
│   │   ├── navigation.css
│   │   ├── footer.css
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── gallery.css
│   │   └── modals.css
│   └── pages/                    # Page-specific styles
│       ├── home.css
│       └── collections.css
│
├── js/
│   ├── core/
│   │   ├── shared-components.js  # Nav/footer injection
│   │   ├── scroll-manager.js     # Scroll effects
│   │   └── lazy-loader.js        # Image lazy loading
│   ├── components/
│   │   ├── navigation.js         # Mobile menu
│   │   └── horizontal-scroll.js  # Gallery scroll
│   └── main.js                   # App initialization
│
└── assets/
    ├── images/
    ├── videos/
    ├── fonts/
    └── icons/
```

## Key Features

### 1. Shared Component System
Navigation and footer are injected via JavaScript (`shared-components.js`), eliminating the need for a build system while maintaining DRY principles.

### 2. Glass Component Library
Reusable CSS classes for consistent glassmorphism:
- `.glass` - base glass effect
- `.glass--light` - subtle transparency
- `.glass--heavy` - more opaque
- `.glass--interactive` - hover effects

### 3. Scroll-Based Animations
- Intersection Observer for fade-in animations
- Navigation transforms from transparent to frosted on scroll
- Parallax effects on background elements

### 4. Lazy Loading
Images load only as they enter the viewport, improving performance.

### 5. Horizontal Scroll Gallery
Featured collection gallery with smooth scrolling and progress indicator.

### 6. Responsive Design
Mobile-first approach with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## How to View

### Option 1: Local Server (Recommended)
1. Open Terminal
2. Navigate to the project directory:
   ```bash
   cd /Users/dkoul/Documents/sns-website
   ```
3. Start a simple HTTP server:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # OR Python 2
   python -m SimpleHTTPServer 8000

   # OR if you have Node.js
   npx serve
   ```
4. Open browser to `http://localhost:8000`

### Option 2: Direct File Access
1. Open Finder
2. Navigate to `/Users/dkoul/Documents/sns-website`
3. Double-click `index.html`

**Note:** Some features (like lazy loading) work best with a local server.

## Performance Optimizations

- **CSS Containment**: `contain: layout style paint` on glass components
- **Lazy Loading**: Images load on-demand
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Mobile Optimization**: Reduced blur effects on mobile devices
- **Throttled Events**: Scroll listeners use `requestAnimationFrame`

## Browser Compatibility

- **Chrome/Edge**: 90+ ✅
- **Safari**: 14+ ✅
- **Firefox**: 103+ ✅
- **Mobile Safari**: iOS 14+ ✅

**Glassmorphism Fallbacks**: Solid backgrounds for browsers without `backdrop-filter` support.

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators with glass outline effect
- Screen reader friendly
- Color contrast meets WCAG AA standards

## Next Steps

### Content
- [ ] Replace placeholder images with real product photography
- [ ] Add actual product details and pricing
- [ ] Write full brand story content
- [ ] Create video content for hero and craft sections

### Features
- [ ] Add product filtering on Collections page
- [ ] Implement image zoom on Product Detail page
- [ ] Create blog/journal section for artisan stories
- [ ] Add newsletter signup
- [ ] Integrate with email service (Mailchimp/ConvertKit)
- [ ] Set up form backend (currently client-side only)

### Deployment
- [ ] Optimize and compress images (use WebP format)
- [ ] Minify CSS and JavaScript
- [ ] Add favicon and touch icons
- [ ] Create robots.txt and sitemap.xml
- [ ] Set up Google Analytics
- [ ] Deploy to Netlify/Vercel/Cloudflare Pages
- [ ] Configure custom domain

### Advanced
- [ ] Add page transitions (Barba.js)
- [ ] Implement virtual try-on (AR)
- [ ] Create appointment booking system
- [ ] Add headless CMS integration (Sanity.io)

## Credits

**Design & Development**: Sheen & Sozni by Bhawana
**Design System**: Liquid Glass + Kashmiri Heritage Minimalism
**Images**: Unsplash (placeholder content)
**Fonts**: Google Fonts (Inter, Cormorant Garamond)

## License

© 2026 Sheen & Sozni by Bhawana. All rights reserved.

---

**Built with care, pixel by pixel.**
*Where snow meets needle.*
