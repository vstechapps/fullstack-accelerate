# [Java](../) > Try-Catch-Finally

## Try-Catch-Finally in Java
Exception handling in Java is done using `try`, `catch`, and `finally` blocks. These help manage errors gracefully and ensure smooth execution of programs.

## Understanding Try-Catch

The `try` block contains code that might throw an exception, while the `catch` block handles it.

### Syntax:
```java
try {
    // Code that may throw an exception
} catch (ExceptionType e) {
    // Code to handle the exception
}
```

### Example: Handling ArithmeticException
```java
package com.vvsk.fullstack.exceptions;

public class TryCatchExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // This will cause ArithmeticException
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        }
    }
}
```

## Using Finally Block
The `finally` block always executes, whether an exception occurs or not. It is typically used for resource cleanup.

### Syntax:
```java
try {
    // Code that may throw an exception
} catch (ExceptionType e) {
    // Handle exception
} finally {
    // Code that always executes
}
```

### Example: Using Finally Block
```java
package com.vvsk.fullstack.exceptions;

public class FinallyExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // This will cause ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds: " + e.getMessage());
        } finally {
            System.out.println("Execution completed.");
        }
    }
}
```

## Handling Multiple Exceptions (Cascading Catch Blocks)
In Java, multiple exceptions can be handled using multiple `catch` blocks. This is known as **cascading catch**.

### Example: Handling Multiple Exceptions
```java
package com.vvsk.fullstack.exceptions;

public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {10, 20, 30};
            int result = numbers[3] / 0; // This will cause an exception
            System.out.println(result);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General exception: " + e.getMessage());
        }
    }
}
```

## Example: Handling Input Mismatch Exception using Scanner
When using `Scanner` for user input, exceptions can occur if the user enters an incorrect data type.

```java
package com.vvsk.fullstack.exceptions;

import java.util.Scanner;

public class ScannerExceptionExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter an integer: ");
            int number = scanner.nextInt(); // May throw InputMismatchException
            System.out.println("You entered: " + number);
        } catch (java.util.InputMismatchException e) {
            System.out.println("Invalid input! Please enter a valid integer.");
        } finally {
            scanner.close();
            System.out.println("Scanner closed.");
        }
    }
}
```

### Example: Using Try-With-Resources
The `try-with-resources` statement automatically closes resources like `Scanner` when the try block exits.

```java
package com.vvsk.fullstack.exceptions;

import java.util.Scanner;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) { // Scanner is automatically closed
            System.out.print("Enter an integer: ");
            int number = scanner.nextInt(); // May throw InputMismatchException
            System.out.println("You entered: " + number);
        } catch (java.util.InputMismatchException e) {
            System.out.println("Invalid input! Please enter a valid integer.");
        }
    }
}
```

## Best Practices for Try-Catch-Finally
- **Catch Specific Exceptions First**: Always catch more specific exceptions before generic ones.
- **Use Finally for Cleanup**: Close resources like file streams or database connections inside `finally`.
- **Avoid Empty Catch Blocks**: Always handle exceptions properly to prevent unexpected behavior.
- **Log Exceptions for Debugging**: Use logging frameworks like Log4j or SLF4J to record exceptions.

## Conclusion
`try`, `catch`, and `finally` provide a structured approach to exception handling in Java. By using multiple `catch` blocks, we can handle various exceptions effectively, ensuring a robust and error-free program.

---

🔗 **Related Topics:**
- [Exception Handling](../exception-handling/)
- [Custom Exceptions](../custom-exceptions/)

