# 📘 [Angular](../) > Typescript

## 🧠 TypeScript Basics

Angular is built using **TypeScript**, which is a superset of JavaScript. Key features include:

### 1. Types 📝
Types in TypeScript define the data type of a variable, ensuring that the variable holds only the specified type of data. This helps catch errors during development.

```typescript
let name: string = 'Angular';
let isActive: boolean = true;
let age: number = 25;
let skills: string[] = ['TypeScript', 'Angular', 'JavaScript'];
```

### 2. Interfaces 🛠️
Interfaces in TypeScript define the structure of an object, specifying the properties and their types.

```typescript
interface User {
  name: string;
  age: number;
  skills?: string[]; // Optional property
}
```

### 3. Enums 🎯
Enums allow you to define a set of named constants.

```typescript
enum Role {
  Admin,
  User,
  Guest
}

let userRole: Role = Role.Admin;
```

### 4. Functions ⚡
TypeScript allows you to define types for function parameters and return values.

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

### 5. Generics 🔄
Generics provide a way to create reusable components.

```typescript
function identity<T>(value: T): T {
  return value;
}

let result = identity<number>(42);
```

### 6. Tuples 📦
Tuples allow you to define an array with fixed types and length.

```typescript
let user: [string, number] = ['John', 30];
```

### 7. Type Aliases 🏷️
Type aliases allow you to create custom types.

```typescript
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };
```

---

TypeScript adds structure and reliability to JavaScript applications and is ideal for scalable projects. 🚀