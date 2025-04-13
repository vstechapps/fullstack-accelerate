# 📘 [Angular](../) > CLI

## ⚙️ Angular CLI

**Angular CLI** is a powerful command-line interface tool that simplifies Angular development by automating common tasks. It provides developers with a consistent workflow and ensures best practices are followed when creating and managing Angular projects.

### ✨ Key Features of Angular CLI
- **Project Initialization**: Quickly scaffold a new Angular project with a predefined structure.
- **Code Generation**: Generate components, directives, services, pipes, and modules with a single command.
- **Development Server**: Serve the application locally with live reload for faster development.
- **Build Optimization**: Build production-ready applications with minification, Ahead-of-Time (AOT) compilation, and tree-shaking.
- **Testing Support**: Run unit tests and end-to-end tests with integrated testing tools.
- **Configuration Management**: Manage application settings through `angular.json`.

---

### 📜 Common CLI Commands

Here are some commonly used Angular CLI commands:

```bash
ng new my-app             # Creates a new Angular project
ng serve                  # Compiles and serves the app locally
ng generate component xyz # Creates a new component
ng build                  # Builds the app for production
ng test                   # Runs unit tests
ng e2e                    # Runs end-to-end tests
ng lint                   # Lints the codebase
ng add <package>          # Adds a new library or feature to the project
ng update                 # Updates Angular and its dependencies
ng deploy                 # Deploys the app to a hosting service
```

---

### 🛠️ Advanced CLI Features

#### 1. **Customizing Builds**
You can customize the build process using the `angular.json` file. For example, you can add global styles, scripts, or environment-specific configurations.

```json
"build": {
  "options": {
    "outputPath": "dist/my-app",
    "styles": ["src/styles.css"],
    "scripts": ["src/custom-script.js"]
  }
}
```

#### 2. **Adding Features**
The `ng add` command allows you to easily integrate libraries or features into your project. For example:
```bash
ng add @angular/material  # Adds Angular Material to your project
```

#### 3. **Running in Different Environments**
You can specify different environments (e.g., development, production) using the `--configuration` flag:
```bash
ng build --configuration=production
ng serve --configuration=development
```

#### 4. **Generating Code**
Angular CLI can generate boilerplate code for various Angular building blocks:
```bash
ng generate component my-component   # Generates a new component
ng generate service my-service       # Generates a new service
ng generate module my-module         # Generates a new module
```

#### 5. **Testing**
Run unit tests or end-to-end tests with ease:
```bash
ng test   # Runs unit tests
ng e2e    # Runs end-to-end tests
```

---

### 🌟 Benefits of Using Angular CLI
- **Consistency**: Ensures a consistent project structure and coding standards.
- **Efficiency**: Automates repetitive tasks, saving time and effort.
- **Best Practices**: Encourages the use of Angular's recommended practices.
- **Scalability**: Simplifies the management of large-scale applications.

Angular CLI is an essential tool for Angular developers, providing a streamlined development experience and enabling the creation of high-quality applications.

---