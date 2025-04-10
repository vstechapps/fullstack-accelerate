
# [Angular](../../) > 🧑‍💻 Exercise 03

---

# 🚀 Your First Angular App

A simple and intuitive web application where users can create, view, and manage virtual sticky notes. Ideal for organizing thoughts, ideas, and tasks in a colorful, draggable interface.

## 🛠️ Prerequisites
- [Node JS](../../../tools/nodejs/)
- NPM (comes along  with Node.js)

---

## 📦 Step 1: Install Angular CLI

The Angular CLI helps scaffold and manage Angular apps with ease.

```bash
npm install -g @angular/cli
```

To check if it installed correctly:

```bash
ng version
```

---

## ✨ Step 2: Create a New Angular Project

Use the CLI to create a new project (replace `my-first-app` with your preferred name):

```bash
ng new my-first-app
```

### During Setup:
- Choose **No** for routing (or Yes if you need it).
- Select **CSS** or your preferred stylesheet format.

This will install dependencies and scaffold the app.

---

## 🚀 Step 3: Run the Angular App (Development Server)

Navigate to the project folder:

```bash
cd my-first-app
```

Start the development server:

```bash
ng serve
```

Open your browser and visit:

```
http://localhost:4200
```

You should see the default Angular welcome page.

---

## 🧩 Step 4: Change the Default Page Content

1. Open your project in VS Code or any code editor.

2. Navigate to:

```
src/app/app.component.html
```

3. Replace the contents with:

```html
<h1>Welcome to My First Angular App!</h1>
<p>This is a custom homepage 🎉</p>
```

---