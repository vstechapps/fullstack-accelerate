# 📘 [Angular](../) > Components

## 🏗️ Angular Components

Angular components are the building blocks of an Angular application. Each component controls a part of the user interface and consists of three main parts: the **HTML template**, the **CSS styles**, and the **TypeScript logic**.

When you create a new component using Angular CLI, you'll get the following structure:

```
my-first-app/
│
├── src/
│   ├── app/
│   │   ├── my-component/
│   │   │   ├── my-component.component.ts    # Component logic
│   │   │   ├── my-component.component.html  # Component template (UI)
│   │   │   ├── my-component.component.css   # Component styling
│   │   │   └── my-component.component.spec.ts # Component unit tests
```

Each component is declared in a module (usually `AppModule`) and is associated with a selector, template, and styles.

---

### 🛠️ Creating a Component with Angular CLI

You can create a new component using the Angular CLI:

```bash
ng generate component my-component
```

This command will:
- Create the component files (`.ts`, `.html`, `.css`, `.spec.ts`).
- Declare the component in the nearest module (e.g., `AppModule`).

---

### 📄 Anatomy of a Component

A typical Angular component consists of the following files:

1. **TypeScript File (`.component.ts`)**: Contains the logic and metadata of the component.
2. **HTML File (`.component.html`)**: Defines the structure and layout of the component's UI.
3. **CSS/SCSS File (`.component.css` or `.component.scss`)**: Contains the styles specific to the component.
4. **Spec File (`.component.spec.ts`)**: Contains unit tests for the component.

Example of a component's TypeScript file:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component', // The custom HTML tag for this component
  templateUrl: './my-component.component.html', // Path to the HTML template
  styleUrls: ['./my-component.component.css'] // Path to the CSS styles
})
export class MyComponent {
  title: string = 'Hello, Angular!';

  greet(): string {
    return `Welcome to ${this.title}`;
  }
}
```

---

### 📜 Key Features of Components

- **Selector**: Defines the custom HTML tag for the component.
- **Template**: Specifies the HTML structure of the component.
- **Styles**: Defines the CSS styles specific to the component.
- **Data Binding**: Enables communication between the component and the template using properties and events.
- **Lifecycle Hooks**: Provides hooks like `ngOnInit` and `ngOnDestroy` to manage the component's lifecycle.

---

### 🌟 Example: A Simple Counter Component

Here’s an example of a simple counter component:

**TypeScript File (`counter.component.ts`)**:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
```

**HTML File (`counter.component.html`)**:
```html
<div>
  <h1>Counter: {{ count }}</h1>
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
</div>
```

**CSS File (`counter.component.css`)**:
```css
h1 {
  color: #007bff;
}

button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}
```

---

### 🔄 Lifecycle Hooks

Angular components have lifecycle hooks that allow you to tap into key moments of a component's lifecycle:

- **ngOnInit**: Called once the component is initialized.
- **ngOnChanges**: Called when input properties change.
- **ngOnDestroy**: Called just before the component is destroyed.

Example:
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: `<p>Lifecycle Demo</p>`
})
export class LifecycleDemoComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Component initialized');
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }
}
```

---

Understanding Angular components is essential for building dynamic and reusable UI elements in your application. Mastering components will help you create scalable and maintainable Angular applications.