# 📘 [Angular](../) > CLI

## ⚙️ Angular CLI

**Angular CLI** is a command-line interface tool that helps automate development tasks in Angular. It allows developers to:

- Create new Angular projects
- Generate components, directives, services, and pipes
- Serve the application in a local development server
- Build optimized production versions
- Run unit and end-to-end tests

### Common CLI Commands
```bash
ng new my-app             # Creates a new Angular project
ng serve                  # Compiles and serves the app
ng generate component xyz # Creates a new component
ng build                  # Builds the app for production
```

---

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
├── angular.json                # CLI config
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript config
└── README.md                   # Project documentation
```

Each Angular application is made up of modules and components. `AppModule` is the root module, and `AppComponent` is the root component.

---

## 🧠 TypeScript Basics

Angular is built using **TypeScript**, which is a superset of JavaScript. Key features include:

### 1. Types
```typescript
let name: string = 'Angular';
let isActive: boolean = true;
```

### 2. Interfaces
```typescript
interface User {
  name: string;
  age: number;
}
```

### 3. Classes and Inheritance
```typescript
class Person {
  constructor(public name: string) {}
  greet() {
    return `Hello, ${this.name}`;
  }
}
```

### 4. Decorators
Used to add metadata to classes, such as `@Component`, `@Injectable`, etc.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {}
```

TypeScript adds structure and reliability to JavaScript applications and is ideal for scalable projects.

---