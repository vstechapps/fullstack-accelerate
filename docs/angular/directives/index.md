# 📘 [Angular](../) > Directives

## 🏗️ Angular Directives

Directives in Angular are used to extend the functionality of HTML by adding custom behavior to elements. They allow you to manipulate the DOM, apply logic, and dynamically update the UI.

---

## 🔄 Built-in Directives

Angular provides several built-in directives to simplify common tasks. These directives are categorized into **Structural Directives** and **Attribute Directives**.

### 1. **Structural Directives**
Structural directives change the structure of the DOM by adding or removing elements.

- **`*ngIf`**: Conditionally includes or excludes elements.
  ```html
  <div *ngIf="isVisible">This element is visible.</div>
  ```

- **`*ngFor`**: Iterates over a collection and renders elements.
  ```html
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
  ```

- **`*ngSwitch`**: Switches between multiple templates.
  ```html
  <div [ngSwitch]="value">
    <p *ngSwitchCase="'case1'">Case 1</p>
    <p *ngSwitchCase="'case2'">Case 2</p>
    <p *ngSwitchDefault>Default Case</p>
  </div>
  ```

### 2. **Attribute Directives**
Attribute directives modify the behavior or appearance of an element.

- **`ngClass`**: Dynamically applies CSS classes.
  ```html
  <div [ngClass]="{'active': isActive, 'disabled': !isActive}">Styled Div</div>
  ```

- **`ngStyle`**: Dynamically applies inline styles.
  ```html
  <div [ngStyle]="{'color': color, 'font-size': fontSize + 'px'}">Styled Div</div>
  ```

- **`ngModel`**: Enables two-way data binding for form inputs.
  ```html
  <input [(ngModel)]="username" placeholder="Enter your name" />
  <p>Hello, {{ username }}</p>
  ```

---

## 🛠️ Creating a Custom Directive

In addition to built-in directives, Angular allows you to create custom directives to add specific behavior to elements.

### 📜 Steps to Create a Directive

1. Use the Angular CLI to generate a directive:
   ```bash
   ng generate directive my-directive
   ```

2. This command will create the following files:
   - `my-directive.directive.ts`: Contains the directive logic.
   - `my-directive.directive.spec.ts`: Contains unit tests for the directive.

3. Implement the directive logic in the `.directive.ts` file.

---

### 📄 Example: A Custom Highlight Directive

Here’s an example of a custom directive that highlights an element on hover:

**Directive File (`highlight.directive.ts`)**:
```typescript
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // Custom directive selector
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
```

**Using the Directive in a Template (`app.component.html`)**:
```html
<p appHighlight>Hover over this text to see the highlight effect.</p>
```

---

### 🔄 Lifecycle Hooks in Directives

Custom directives can also use lifecycle hooks to manage their behavior:

- **ngOnInit**: Called once the directive is initialized.
- **ngOnChanges**: Called when input properties change.
- **ngOnDestroy**: Called just before the directive is destroyed.

Example:
```typescript
import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Directive initialized');
  }

  ngOnDestroy() {
    console.log('Directive destroyed');
  }
}
```

---

Understanding both built-in and custom directives is essential for creating dynamic and interactive user interfaces in Angular applications.