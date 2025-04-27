# [Fullstack](../../) > [Java](../) > ⚠️ Exception-Handling

## What is an Exception?
An **Exception** is an **unwanted or unexpected event** that interrupts the execution of the program.

For example, if a user is trying to divide an integer by 0, then it is an exception, as it is not possible mathematically.

```java
int result = 10 / 0; // This will cause an ArithmeticException
```

There are various types of interruptions while executing any program, such as errors, exceptions, and bugs. These interruptions can be due to programming mistakes or system issues. Depending on the conditions, they can be classified as errors and exceptions.

### Car Analogy for Exceptions and Errors
Think of a **car** to understand the difference between an exception and an error:

- **Exception**: Imagine you are driving, and you get a flat tire. The car stops, but you can fix the tire and continue your journey. Similarly, exceptions in a program can be handled so that execution continues smoothly.
  
- **Error**: Now, imagine your car's engine completely fails. The car is no longer drivable, and you need a new engine. Similarly, errors in a program are critical failures that usually cannot be recovered from, leading to program termination.

## Exception Handling in Java

Exception handling in Java provides a **mechanism to handle** unwanted interruptions like exceptions and continue with the normal flow of the program.

Java uses the `try`, `catch`, `finally`, `throw`, and `throws` keywords to manage exceptions.

## Why Use Exception Handling?

- Prevents abrupt termination of the program
- Improves code reliability and maintainability
- Helps in debugging by providing meaningful error messages
- Allows proper resource management


## Types of Exceptions

### 1. Checked Exceptions
Checked exceptions are exceptions that must be handled at compile time. If not handled, the program won't compile.

Examples:
- `IOException` (Occurs when file operations fail)
- `SQLException` (Occurs in database operations)

### 2. Unchecked Exceptions
Unchecked exceptions occur at runtime and do not need explicit handling.

Examples:
- `