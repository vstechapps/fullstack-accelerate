# 📘 [Angular](../) > Project Structure

## 🏗️ Angular Project Structure

When you create a new project using Angular CLI, you'll get the following structure:

```
my-first-app/
│
├── src/
│   ├── app/                    # Core application logic
│   │   ├── app.component.ts    # Main component logic
│   │   ├── app.component.html  # Component template (UI)
│   │   ├── app.component.css   # Component styling
│   │   └── app.module.ts       # App module declaration
│   ├── assets/                 # Static files (images, etc.)
│   └── environments/           # Environment config files
├── package.json                # Project dependencies
├── angular.json                # CLI config
├── tsconfig.json               # TypeScript config
└── README.md                   # Project documentation
```

Each Angular application is made up of modules and components. `AppModule` is the root module, and `AppComponent` is the root component.

---

### 📄 `angular.json`
The `angular.json` file is the configuration file for Angular CLI. It defines how the Angular CLI should build, serve, and test your application. Key sections include:

- **Projects**: Contains configuration for all applications and libraries in the workspace.
- **Architect**: Defines build, serve, test, and lint configurations.
- **Styles and Scripts**: Specifies global stylesheets and scripts to include in the application.

Example:
```json
{
  "projects": {
    "my-first-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/my-first-app",
            "styles": ["src/styles.css"],
            "scripts": []
          }
        }
      }
    }
  }
}
```

---

### 📦 `package.json`
The `package.json` file is the metadata file for your Angular project. It manages dependencies, scripts, and project information. Key sections include:

- **Dependencies**: Lists the libraries required for the application to run (e.g., Angular core libraries).
- **DevDependencies**: Lists the libraries required for development and testing (e.g., TypeScript, testing tools).
- **Scripts**: Defines custom commands for building, serving, and testing the application.

Example:
```json
{
  "name": "my-first-app",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test"
  },
  "dependencies": {
    "@angular/core": "^15.0.0",
    "rxjs": "^7.0.0"
  },
  "devDependencies": {
    "@angular/cli": "^15.0.0",
    "typescript": "^4.0.0"
  }
}
```

---

These files are essential for configuring and managing your Angular project. Understanding them will help you customize your application and streamline development.