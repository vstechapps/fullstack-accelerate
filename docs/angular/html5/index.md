# [Angular](../) > HTML5

---

## Hyper Text Markup Language

**HTML5**, the markup language used to structure content on the web.

---

### Topics Covered

#### 🏗️ Document Structure

- `<!DOCTYPE html>`
- `<html>`, `<head>`, `<body>`
- Meta tags (`<meta charset>`, `<meta name>`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="HTML5 Example">
  <title>HTML5 Demo</title>
</head>
<body>
  <h1>Hello, HTML5!</h1>
</body>
</html>
```

---

#### 🧱 Structural & Semantic Elements

- `<header>`, `<footer>`, `<nav>`
- `<article>`, `<section>`, `<aside>`
- `<main>`, `<figure>`, `<figcaption>`

```html
<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#posts">Posts</a>
  </nav>
</header>
<main>
  <article>
    <h2>HTML5 Overview</h2>
    <section>
      <p>HTML5 introduces semantic elements...</p>
    </section>
  </article>
  <aside>
    <p>Related Articles</p>
  </aside>
</main>
<footer>
  <p>© 2025 Web Academy</p>
</footer>
```

---

#### 📄 Text and Content Elements

- Headings (`<h1>` to `<h6>`)
- Paragraphs, Lists (`<p>`, `<ul>`, `<ol>`, `<li>`)
- Formatting: `<strong>`, `<em>`, `<mark>`, `<blockquote>`

```html
<h2>Top Features</h2>
<p>HTML5 is <strong>powerful</strong> and <em>semantic</em>.</p>
<ul>
  <li>Cleaner markup</li>
  <li>Better accessibility</li>
</ul>
<blockquote cite="https://developer.mozilla.org">
  HTML5 is the cornerstone of modern web development.
</blockquote>
<mark>Note:</mark> Always validate your HTML.
```

---

#### 🧭 Hyperlinks and Media

- Anchor tags: `<a href="">`
- Images: `<img>`
- Audio & Video: `<audio>`, `<video>`

```html
<a href="https://www.example.com">Visit Example</a>
<img src="logo.png" alt="Site Logo" width="150">
<video controls width="300">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

#### 🧾 Forms and Inputs

- Form structure: `<form>`, `<label>`, `<fieldset>`
- Input types: `text`, `email`, `number`, `date`, `checkbox`, `radio`, etc.
- Form attributes: `required`, `placeholder`, `pattern`, `autocomplete`

```html
<form action="/submit" method="POST">
  <fieldset>
    <legend>Sign Up</legend>
    <label for="email">Email:</label>
    <input type="email" id="email" placeholder="you@example.com" required>
    <label for="dob">DOB:</label>
    <input type="date" id="dob">
    <input type="submit" value="Register">
  </fieldset>
</form>
```

---

### 🖱️ Interactive & Action Elements

- Buttons: `<button>`, `type="submit"` vs `type="button"` vs `type="reset"`
- Form actions: `action`, `method`, `enctype`
- Event attributes: `onclick`, `onsubmit`, `onchange`, `oninput`

```html
<form onsubmit="alert('Form submitted!'); return false;">
  <input type="text" oninput="console.log(this.value)" placeholder="Type here">
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

---

#### 🎨 Graphics and Interactive

- `<canvas>` and drawing APIs
- `<svg>` for scalable vector graphics

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid"></canvas>
<script>
  const ctx = document.getElementById('myCanvas').getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(20, 20, 150, 50);
</script>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red" />
</svg>
```

---

#### ♿ Accessibility and SEO

- Use of `alt` attributes
- Semantic tags for screen readers
- Landmark roles and ARIA basics

```html
<img src="cat.jpg" alt="A cute cat lying on the couch">
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>
<main role="main">
  <h1>Welcome to Accessible Web</h1>
</main>
```

---

### References

- [MDN - HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [W3Schools - HTML5](https://www.w3schools.com/html/html5_intro.asp)

---

🔗 **Related Topics:**
- [CSS3](../css3)
- [Javascript](../javascript)
- [jQuery](../jquery)
- [Bootstrap 5](../bootstrap5)
