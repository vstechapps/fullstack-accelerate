# [Java](../) > Hello Java

## Hello Java - First Program

The `HelloJava` program is a simple Java program that demonstrates the fundamental structure of a Java application. It includes key elements such as the package statement, comments, class definition, the `main` method, and executable statements.

---

## Program Structure

```java
// Package declaration (if any)
package com.vvsk.fullstack;

// Import statements (if needed)

// Class definition
public class HelloJava {
    // Main method - Entry point of the Java program
    public static void main(String[] args) {
        // Print statement to display output
        System.out.println("Hello, Java!");
    }
}
```

---

## Explanation of Components

### 1. Package Statement

```java
package com.vvsk.fullstack;
```
- A package is a namespace that organizes Java classes.
- The package statement (optional) must be the first line in the Java file.
- It helps in managing large-scale projects by grouping related classes.

### 2. Comments Section

```java
// This is a single-line comment
/* This is a multi-line comment */
```
- Comments are ignored by the compiler and are used to explain code.
- Single-line comments (`//`) and multi-line comments (`/* */`) are commonly used.

### 3. Class Declaration

```java
public class HelloJava {
```
- The `class` keyword is used to define a class.
- The class name must match the filename (`HelloJava.java`).
- `public` means the class is accessible from other parts of the program.

### 4. Main Method (PSVM - Public Static Void Main)

```java
public static void main(String[] args) {
```
- The `main` method is the entry point of any Java application.
- `public`: The method is accessible to the JVM.
- `static`: It can run without creating an object of the class.
- `void`: It does not return any value.
- `String[] args`: It accepts command-line arguments.

### 5. Actual Code Statements inside `main`

```java
System.out.println("Hello, Java!");
```
- `System.out.println()` prints the message to the console.
- `"Hello, Java!"` is the output displayed when the program runs.

---

## Output

```
Hello, Java!
```

This simple program introduces basic Java syntax and structure, setting the foundation for more advanced programming concepts.





