# 📘 [Angular](../) > Pipes

## 🏗️ Angular Pipes

Pipes in Angular are used to transform data in templates. They allow you to format, filter, or manipulate data before displaying it in the view. Angular provides several built-in pipes, and you can also create custom pipes to handle specific transformations.

---

## 🔄 Built-in Pipes

Angular provides a variety of built-in pipes to handle common data transformations. Here are some of the most commonly used ones:

### 1. **DatePipe**
Formats dates in various ways.
```html
<p>{{ today | date:'fullDate' }}</p> <!-- Example Output: Monday, April 15, 2025 -->
<p>{{ today | date:'shortTime' }}</p> <!-- Example Output: 10:30 AM -->
```

### 2. **UpperCasePipe and LowerCasePipe**
Transforms text to uppercase or lowercase.
```html
<p>{{ 'hello world' | uppercase }}</p> <!-- Output: HELLO WORLD -->
<p>{{ 'HELLO WORLD' | lowercase }}</p> <!-- Output: hello world -->
```

### 3. **CurrencyPipe**
Formats numbers as currency.
```html
<p>{{ 1234.56 | currency:'USD' }}</p> <!-- Output: $1,234.56 -->
<p>{{ 1234.56 | currency:'EUR':'symbol':'1.2-2' }}</p> <!-- Output: €1,234.56 -->
```

### 4. **DecimalPipe**
Formats numbers with decimal places.
```html
<p>{{ 1234.5678 | number:'1.2-2' }}</p> <!-- Output: 1,234.57 -->
```

### 5. **PercentPipe**
Formats numbers as percentages.
```html
<p>{{ 0.25 | percent }}</p> <!-- Output: 25% -->
<p>{{ 0.25 | percent:'1.0-0' }}</p> <!-- Output: 25% -->
```

### 6. **JsonPipe**
Displays objects in JSON format.
```html
<p>{{ { name: 'John', age: 30 } | json }}</p> <!-- Output: {"name":"John","age":30} -->
```

---

## 🛠️ Creating a Custom Pipe

In addition to built-in pipes, Angular allows you to create custom pipes to handle specific transformations.

### 📜 Steps to Create a Pipe

1. Use the Angular CLI to generate a pipe:
   ```bash
   ng generate pipe my-pipe
   ```

2. This command will create the following files:
   - `my-pipe.pipe.ts`: Contains the pipe logic.
   - `my-pipe.pipe.spec.ts`: Contains unit tests for the pipe.

3. Implement the pipe logic in the `.pipe.ts` file.

---

### 📄 Example: A Custom Reverse Pipe

Here’s an example of a custom pipe that reverses a string:

**Pipe File (`reverse.pipe.ts`)**:
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

**Using the Pipe in a Template (`app.component.html`)**:
```html
<p>{{ 'Angular' | reverse }}</p> <!-- Output: ralugnA -->
```

---

### 📜 Key Features of Pipes

- **Chaining Pipes**: You can chain multiple pipes together.
  ```html
  <p>{{ 'hello world' | uppercase | reverse }}</p> <!-- Output: DLROW OLLEH -->
  ```

- **Parameters in Pipes**: Some pipes accept parameters for customization.
  ```html
  <p>{{ 1234.56 | currency:'USD':'symbol':'1.2-2' }}</p> <!-- Output: $1,234.56 -->
  ```

---

### 🔄 Lifecycle of a Pipe

Pipes are stateless by default, meaning they do not track changes to the input data. However, you can create **pure** or **impure** pipes based on your requirements:

- **Pure Pipes**: Only re-evaluated when the input data changes (default behavior).
- **Impure Pipes**: Re-evaluated on every change detection cycle. Use with caution as they can impact performance.

Example of an impure pipe:
```typescript
@Pipe({
  name: 'impureExample',
  pure: false
})
export class ImpureExamplePipe implements PipeTransform {
  transform(value: any): any {
    // Transformation logic
    return value;
  }
}
```

---

Understanding Angular pipes is essential for transforming and formatting data in your application. Mastering both built-in and custom pipes will help you create clean and user-friendly interfaces.