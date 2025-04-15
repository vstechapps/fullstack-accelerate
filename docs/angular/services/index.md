# 📘 [Angular](../) > Services

## 🏗️ Angular Services

Angular services are used to share data, logic, and functionality across different components in an application. They are a fundamental part of Angular's dependency injection system, allowing you to create reusable and testable code.

When you create a new service using Angular CLI, you'll get the following structure:

```
my-first-app/
│
├── src/
│   ├── app/
│   │   ├── my-service/
│   │   │   ├── my-service.service.ts    # Service logic
│   │   │   └── my-service.service.spec.ts # Service unit tests
```

Services are typically used for tasks like fetching data from APIs, managing application state, or encapsulating business logic.

---

### 🛠️ Creating a Service with Angular CLI

You can create a new service using the Angular CLI:

```bash
ng generate service my-service
```

This command will:
- Create the service files (`.service.ts`, `.service.spec.ts`).
- Register the service in the `providers` array of the nearest module (e.g., `AppModule`).

---

### 📄 Anatomy of a Service

A typical Angular service consists of the following:

1. **TypeScript File (`.service.ts`)**: Contains the logic and functionality of the service.
2. **Spec File (`.service.spec.ts`)**: Contains unit tests for the service.

Example of a service's TypeScript file:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available application-wide
})
export class MyService {
  private data: string[] = [];

  addData(item: string) {
    this.data.push(item);
  }

  getData(): string[] {
    return this.data;
  }
}
```

---

### 📜 Key Features of Services

- **Dependency Injection**: Services are injected into components or other services using Angular's dependency injection system.
- **Reusability**: Services allow you to encapsulate logic and reuse it across multiple components.
- **Scalability**: Services help manage complex logic and state in large applications.
- **Testability**: Services are easy to test in isolation.

---

### 🌟 Example: A Simple Data Service

Here’s an example of a simple data service:

**Service File (`data.service.ts`)**:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }
}
```

**Using the Service in a Component (`app.component.ts`)**:
```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input [(ngModel)]="newItem" placeholder="Add an item" />
      <button (click)="addItem()">Add</button>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
    </div>
  `
})
export class AppComponent {
  newItem: string = '';
  items: string[] = [];

  constructor(private dataService: DataService) {}

  addItem() {
    this.dataService.addItem(this.newItem);
    this.items = this.dataService.getItems();
    this.newItem = '';
  }
}
```

---

### 🔄 Lifecycle of a Service

Angular services are instantiated and managed by Angular's dependency injection system. The lifecycle of a service depends on its **provider scope**:

- **Singleton (Default)**: When provided in the `root`, the service is a singleton and shared across the entire application.
- **Module-Level**: When provided in a specific module, the service is scoped to that module.
- **Component-Level**: When provided in a component, the service is scoped to that component and its children.

Example of component-level service:
```typescript
@Component({
  selector: 'app-example',
  template: `<p>Example Component</p>`,
  providers: [MyService] // Service is scoped to this component
})
export class ExampleComponent {}
```

---

Understanding Angular services is essential for managing shared logic and state in your application. Mastering services will help you create scalable, maintainable, and testable Angular applications.