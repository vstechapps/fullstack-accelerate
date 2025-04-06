# [Angular](../) > JavaScript 

---

## JavaScript Fundamentals

Get started with **JavaScript**, the programming language of the web. Learn how to build interactive and dynamic behavior in your web applications.

---

### Topics Covered

#### 📦 Variables & Data Types

- Declaring variables: `var`, `let`, `const`
- Primitive data types: string, number, boolean, null, undefined, symbol
- Type conversion: implicit vs explicit
- Template literals and string manipulation

```javascript
let name = "Alice";
const age = 25;
let isStudent = true;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
```

---

#### 🧠 Operators & Control Flow

- Arithmetic, comparison, logical, assignment, ternary
- Conditional statements: `if`, `else`, `switch`
- Loops: `for`, `while`, `do...while`, `for...of`, `for...in`
- `break`, `continue`, and loop control

```javascript
let score = 85;
if (score > 90) {
  console.log("A");
} else if (score > 75) {
  console.log("B");
} else {
  console.log("C");
}

for (let i = 0; i < 3; i++) {
  if (i === 1) continue;
  console.log(i);
}
```

---

#### 🧩 Functions & Scope

- Function declarations vs expressions
- Arrow functions (`=>`)
- Parameters, default values, return values
- Scope: global, local, block
- Closures & higher-order functions

```javascript
function greet(name = "User") {
  return `Hello, ${name}`;
}

const add = (a, b) => a + b;

function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

#### 🗃️ Arrays & Objects

- Array methods: `push`, `pop`, `map`, `filter`, `reduce`, `forEach`
- Object properties, methods, and destructuring
- Nested objects & arrays
- JSON structure and usage

```javascript
let fruits = ["apple", "banana"];
fruits.push("cherry");
fruits.forEach(fruit => console.log(fruit));

const user = {
  name: "Bob",
  age: 30,
  address: { city: "New York", zip: 10001 }
};

let { name, address: { city } } = user;
console.log(`${name} lives in ${city}`);
```

---

#### 🌐 DOM Manipulation

- Selecting elements: `getElementById`, `querySelector`, etc.
- Changing content: `innerText`, `innerHTML`, `value`
- Styling via JavaScript: `element.style`
- Creating/removing elements dynamically: `createElement`, `appendChild`, `removeChild`

```javascript
const heading = document.getElementById("main-heading");
heading.innerText = "Updated Heading";
heading.style.color = "blue";

const newItem = document.createElement("li");
newItem.textContent = "New Item";
document.querySelector("ul").appendChild(newItem);
```

---

#### 🖱️ Events & Interactivity

- Handling events: `onclick`, `onchange`, `addEventListener`
- Common events: click, submit, keyup, mouseover, input
- Event propagation: bubbling vs capturing
- Form validation basics

```javascript
document.getElementById("submitBtn").addEventListener("click", function() {
  alert("Form Submitted!");
});

document.getElementById("nameInput").addEventListener("input", function(e) {
  console.log("You typed:", e.target.value);
});
```

---

#### 🧪 Error Handling & Debugging

- `try`, `catch`, `finally`
- `throw` keyword
- Browser dev tools & console.log()
- Common debugging practices

```javascript
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Cleanup done.");
}
```

---

#### 🚀 Modern JavaScript (ES6+)

- Destructuring, spread/rest operators
- `let`/`const` vs `var`
- Template literals
- Modules: `import`, `export`
- Promises and `async/await` basics

```javascript
const user = { name: "Eve", age: 22 };
const { name, age } = user;
const clone = { ...user };

async function fetchData() {
  try {
    let res = await fetch("https://api.example.com/data");
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
```

---

### References

- [MDN - JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [W3Schools - JavaScript](https://www.w3schools.com/js/)

---
🔗 **Related Topics:**

- [HTML5](../html5)
- [CSS3](../css3)
- [jQuery](../jquery)
- [Bootstrap 5](../bootstrap5)

---
