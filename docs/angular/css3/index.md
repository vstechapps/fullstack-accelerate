# [Angular](../) > CSS3

---

## Cascading Style Sheets

Learn to style web pages using **CSS3**, including layout, visual design, and responsive techniques.

---

### Topics Covered

#### 🎯 Alignment & Positioning

- `position`: static, relative, absolute, fixed, sticky
- `top`, `right`, `bottom`, `left`
- `z-index` and stacking context
- `text-align`, `vertical-align`

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
  z-index: 10;
  text-align: center;
}
```

---

#### 📦 Box Model & Layout

- `margin`, `padding`, `border`
- `width`, `height`, `max-width`, `min-height`
- `box-sizing: border-box`
- Overflow handling: `overflow`, `overflow-x`, `overflow-y`

```css
.container {
  margin: 20px;
  padding: 10px;
  border: 2px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
}
```

---

#### 💅 Visual Styling

- `color`, `background-color`, `background-image`
- `font-family`, `font-size`, `font-weight`, `line-height`
- `border-radius`, `box-shadow`
- `opacity`, `visibility`

```css
.card {
  background-color: #f9f9f9;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  opacity: 0.95;
}
```

---

#### 📐 Flexbox & Grid

- Flexbox: `display: flex`, `justify-content`, `align-items`, `flex-wrap`
- Grid: `display: grid`, `grid-template-columns`, `gap`, `grid-area`

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
```

🔗 [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

#### 📱 Responsive Design

- Media queries: `@media`, breakpoints
- Units: `%`, `em`, `rem`, `vh`, `vw`
- Responsive typography & images

```css
@media (max-width: 768px) {
  .container {
    padding: 5%;
  }

  h1 {
    font-size: 1.5rem;
  }
}

img {
  max-width: 100%;
  height: auto;
}
```

---

#### 🌀 Transitions & Animations

- `transition`, `transition-duration`, `ease`, `cubic-bezier`
- `@keyframes`, `animation-name`, `animation-duration`

```css
.button {
  background-color: #008CBA;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #005f73;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 2s ease-in;
}
```

---

#### 🌈 CSS Variables

- Defining custom properties: `--main-color: #333`
- Using variables: `color: var(--main-color)`

```css
:root {
  --main-color: #3498db;
  --padding: 20px;
}

.box {
  color: var(--main-color);
  padding: var(--padding);
}
```

---

### References

- [MDN - CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools - CSS](https://www.w3schools.com/css/)

---

🔗 **Related Topics:**
- [HTML5](../html5)
- [Javascript](../javascript)
- [jQuery](../jquery)
- [Bootstrap 5](../bootstrap5)

---
