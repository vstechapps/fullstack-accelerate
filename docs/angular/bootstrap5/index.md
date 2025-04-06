# [Angular](../) > Bootstrap 5

---

## Bootstrap Framework

Learn **Bootstrap 5**, the world’s most popular front-end open-source toolkit. Build responsive, mobile-first websites using ready-to-use components and powerful layout utilities.

---

## 📦 Getting Started

- What is Bootstrap?
- Include via CDN or install with npm
- Structure: Containers, Rows, Columns
- Responsive grid system (`col`, `col-md-*`, `col-lg-*`)

```html
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <div class="container">
      <div class="row">
        <div class="col-md-6">Column 1</div>
        <div class="col-md-6">Column 2</div>
      </div>
    </div>
````
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <div class="container">
      <div class="row">
        <div class="col-md-6">Column 1</div>
        <div class="col-md-6">Column 2</div>
      </div>
    </div>
```
---

## 🎨 Layout & Utilities

- Spacing: `.m-*`, `.p-*`, `.mt-3`, `.px-2`
- Display utilities: `.d-flex`, `.d-none`, `.d-grid`
- Positioning: `.position-relative`, `.top-0`, `.start-50`
- Text & background: `.text-center`, `.text-muted`, `.bg-light`, `.bg-primary`

```html
    <div class="p-3 mb-2 bg-warning text-dark text-center">
      Highlighted Box
    </div>
```
    <div class="p-3 mb-2 bg-warning text-dark text-center">
      Highlighted Box
    </div>
---

## 🧩 Components

- Alerts: `.alert`, `.alert-success`, `.alert-danger`
- Buttons: `.btn`, `.btn-primary`, `.btn-outline-*`
- Cards: `.card`, `.card-body`, `.card-title`
- Navs & Tabs, Badges, Progress Bars, Toasts
````html
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Quick content example.</p>
        <a href="#" class="btn btn-primary">Go</a>
      </div>
    </div>
````
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Quick content example.</p>
        <a href="#" class="btn btn-primary">Go</a>
      </div>
    </div>

---

## ✨ Forms & Inputs

- Form controls: `.form-control`, `.form-label`, `.form-check`
- Validation states: `.is-valid`, `.is-invalid`
- Floating labels & input groups

    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>

---

## 🧭 Navigation & Modals

- Navbar: `.navbar`, `.navbar-expand`, `.navbar-dark`, `.bg-dark`
- Collapse: toggler buttons
- Modal dialogs: `.modal`, `.modal-dialog`, `.modal-content`

    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch Modal
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal Title</h5>
            <button class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">Hello, world!</div>
        </div>
      </div>
    </div>

---

## 🛠️ Customization & Theming

- Using Sass variables
- Override default styles
- Bootstrap icons: https://icons.getbootstrap.com
- Dark mode utilities (limited in v5, full in v5.3+)

---

### References

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Cheat Sheet](https://getbootstrap.com/docs/5.3/examples/)

---
