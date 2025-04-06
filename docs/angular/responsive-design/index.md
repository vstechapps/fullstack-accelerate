# [Angular](../) > Responsive Design

---

## Responsive Design

Master **Responsive Web Design (RWD)** — an approach that makes web pages render well on all screen sizes and devices. Learn how to use flexible grids, media queries, and modern CSS units to build adaptive UIs.

---

### Topics Covered

#### 🧠 What is Responsive Design?

- Adapts layout to screen size, resolution, and orientation
- Uses flexible grids and images
- No need for separate mobile/desktop sites
- Core principles:
  - Fluid grids
  - Flexible images
  - Media queries

---

#### 📐 Viewport & Meta Tags

- Set viewport for scaling on mobile devices
- Prevent unwanted zoom or width clipping
````html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
````
---

#### 📏 Relative Units (%, em, rem, vw, vh)

- `%` for container-relative sizing
- `em`, `rem` for font scaling
- `vw`, `vh` for viewport-based layout
````html
    .container {
      width: 90%;
      padding: 2rem;
    }

    h1 {
      font-size: 3vw;
    }
````
---

#### 🧰 CSS Media Queries

- Customize styles for different breakpoints
- Common breakpoints:
  - Small (`max-width: 576px`)
  - Medium (`min-width: 768px`)
  - Large (`min-width: 992px`)
  - XL (`min-width: 1200px`)
````html
    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
      }
    }

    @media (min-width: 992px) {
      .hero {
        font-size: 2rem;
      }
    }
````
---

#### 📱 Mobile-First Design

- Start with styles for mobile screens
- Use `min-width` media queries to scale up
- Benefits:
  - Performance optimized
  - Better UX on smaller devices

---

#### 🧩 Responsive Layouts with Flexbox & Grid

- Flexbox: auto-wrap and align
- CSS Grid: define areas and columns
````html
    .container {
      display: flex;
      flex-wrap: wrap;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
````
---

#### 🌆 Responsive Images

- Use `max-width: 100%` and `height: auto`
- `<picture>` and `srcset` for art direction
````html
    <img src="hero.jpg" style="max-width: 100%; height: auto;">

    <picture>
      <source media="(min-width: 768px)" srcset="hero-large.jpg">
      <img src="hero-small.jpg" alt="Responsive image">
    </picture>
````
---

#### 🛠️ Testing & Tools

- Chrome DevTools device mode
- [Responsively App](https://responsively.app/)
- Online tools: Screenfly, BrowserStack

---

### References

- [MDN Responsive Design Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Google Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
- [CSS Tricks - Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

---
