# [Java](../) > Checked vs Unchecked Exceptions

## Difference Between Checked and Unchecked Exceptions
In Java, exceptions are classified into two main types:
1. **Checked Exceptions** – Exceptions that are checked at compile-time.
2. **Unchecked Exceptions** – Exceptions that occur at runtime.

Understanding the difference between these two is crucial for handling errors effectively.

## What Are Checked Exceptions?
Checked exceptions are exceptions that the compiler forces you to handle explicitly. If they are not handled using `try-catch` or declared using `throws`, the program will not compile.

### Examples of Checked Exceptions:
- `IOException`
- `SQLException`
- `FileNotFoundException`
- `InterruptedException`

### Example: Handling Checked Exception
```java
package com.vvsk.fullstack.exceptions;

import java.io.*;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("test.txt");
            BufferedReader br = new BufferedReader(file);
            System.out.println(br.readLine());
        } catch (IOException e) {
            System.out.println("File not found or unable to read: " + e.getMessage());
        }
    }
}
```

## What Are Unchecked Exceptions?
Unchecked exceptions are exceptions that occur at runtime. These are typically caused by logical errors in the program, such as dividing by zero or accessing an invalid index in an array.

### Examples of Unchecked Exceptions:
- `NullPointerException`
- `ArrayIndexOutOfBoundsException`
- `ArithmeticException`
- `IllegalArgumentException`

### Example: Handling Unchecked Exception
```java
package com.vvsk.fullstack.exceptions;

public class UncheckedExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // Causes ArithmeticException
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        }
    }
}
```

## Key Differences Between Checked and Unchecked Exceptions
| Feature            | Checked Exceptions | Unchecked Exceptions |
|-------------------|------------------|------------------|
| Checked at Compile-Time | Yes | No |
| Requires Handling | Yes (must use try-catch or throws) | No (optional handling) |
| Common Examples | `IOException`, `SQLException` | `NullPointerException`, `ArithmeticException` |
| Cause | External factors (e.g., file not found) | Programming logic errors |

## When to Use Checked vs Unchecked Exceptions?
- **Use Checked Exceptions** when the error is beyond the programmer’s control (e.g., file not found, network failure).
- **Use Unchecked Exceptions** when the error is due to a programming mistake (e.g., null references, division by zero).

## Conclusion
Understanding the difference between checked and unchecked exceptions helps developers write robust and maintainable Java programs. Properly handling exceptions ensures that applications do not crash unexpectedly and can recover from errors gracefully.

---

🔗 **Related Topics:**
- [Exception Handling](../exception-handling/)
- [Try-Catch-Finally](../try-catch-finally/)

