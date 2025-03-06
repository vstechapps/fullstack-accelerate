# [Java](../) > Exception Handling

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
  
- **Error**: Now, imagine your car’s engine completely fails. The car is no longer drivable, and you need a new engine. Similarly, errors in a program are critical failures that usually cannot be recovered from, leading to program termination.

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
Checked exceptions are exceptions that must be handled at compile time. If not handled, the program won’t compile.

Examples:
- `IOException` (Occurs when file operations fail)
- `SQLException` (Occurs in database operations)

### 2. Unchecked Exceptions
Unchecked exceptions occur at runtime and do not need explicit handling.

Examples:
- `NullPointerException` (Accessing a null object)
- `ArrayIndexOutOfBoundsException` (Accessing an invalid index in an array)

### 3. Errors
Errors are serious problems that should not be caught, such as:
- `StackOverflowError` (Occurs when recursion goes too deep)
- `OutOfMemoryError` (Occurs when Java runs out of memory)

## Handling Exceptions Step by Step

### 1. Using try-catch
A `try` block contains the code that might throw an exception. A `catch` block handles the exception.

#### Steps:
1. Write the code inside a `try` block.
2. Catch the exception in a `catch` block.
3. Print an error message or take necessary action.

```java
package com.vvsk.fullstack.exceptions;

public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // This will cause an ArithmeticException
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
}
```

### 2. Using finally
The `finally` block executes **whether an exception occurs or not**.

#### Steps:
1. Use a `try` block to execute risky code.
2. Catch the exception if needed.
3. Use `finally` to execute important cleanup tasks.

```java
package com.vvsk.fullstack.exceptions;

public class FinallyExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // This will cause an ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index out of bounds!");
        } finally {
            System.out.println("Execution completed.");
        }
    }
}
```

## Conclusion
Exception handling in Java helps **make programs more reliable and error-resistant**. By following proper exception handling techniques, you can write clean and efficient code.

---

[← Streams API](../streams-api) | [Try Catch Finally →](../try-catch-finally)

---

🔗 **Related Topics:**
- [Try Catch Finally](../try-catch-finally)
- [Custom Exceptions](../custom-exceptions/)

