# [Angular](../) > jQuery

---

## jQuery Library

Get started with **jQuery**, the fast, small, and feature-rich JavaScript library. Learn how to simplify DOM manipulation, handle events, and work with AJAX efficiently.

---

## 📦 jQuery Basics

- What is jQuery and why use it?
- Including jQuery via CDN or local file
- `$(document).ready()` usage
- jQuery selector syntax (`$()`, `$(".class")`, `$("#id")`)

````html
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
      $(document).ready(function () {
        console.log("DOM is ready!");
      });
    </script>
````
---

## 🌐 DOM Manipulation

- Getting/setting content: `.text()`, `.html()`, `.val()`
- Changing styles: `.css()`, `.addClass()`, `.removeClass()`
- Traversing: `.parent()`, `.children()`, `.next()`, `.prev()`
- Creating/modifying elements: `.append()`, `.prepend()`, `.after()`, `.remove()`

````javascript

    $("#title").text("Updated Title");
    $("#box").css("background-color", "lightblue");
    $("ul li").first().append("<span> ✔️</span>");

````
---

## 🖱️ Events & Handlers

- Binding events: `.click()`, `.hover()`, `.on()`
- Event object and delegation
- Preventing default behavior: `event.preventDefault()`
- Form events: `.submit()`, `.change()`, `.keyup()`

````javascript
    $("#btn").click(function () {
      alert("Button clicked!");
    });

    $("ul").on("click", "li", function () {
      $(this).toggleClass("done");
    });
````
---

## 📡 AJAX with jQuery

- `.load()` for partial HTML
- `.get()`, `.post()` for HTTP requests
- `.ajax()` for advanced configuration
- Supports Handling responses and errors

````javascript
    $.get("/api/data", function (response) {
      $("#result").html(response);
    });

    $.ajax({
      url: "/api/submit",
      method: "POST",
      data: { name: "John" },
      success: function (res) {
        console.log("Success:", res);
      },
      error: function (err) {
        console.error("Error:", err);
      }
    });
````
---

## 🧪 Utilities & Effects

- Animations: `.hide()`, `.show()`, `.fadeIn()`, `.slideToggle()`
- Chaining methods
- `.each()` iteration
- Utility functions: `$.trim()`, `$.isArray()`, etc.

````javascript
    $("#box")
      .fadeOut(500)
      .fadeIn(500)
      .css("border", "2px solid green");

    $.each(["Apple", "Banana"], function (index, value) {
      console.log(index + ": " + value);
    });
````
---

### References

- [jQuery Official Documentation](https://api.jquery.com/)
- [Learn jQuery - W3Schools](https://www.w3schools.com/jquery/)
- [jQuery Fundamentals](https://learn.jquery.com/)

---

🔗 **Related Topics:**

- [HTML5](../html5)
- [CSS3](../css3)
- [Javascript](,,/javacript)
- [jQuery](../jquery)
- [Bootstrap 5](../bootstrap5)

---
