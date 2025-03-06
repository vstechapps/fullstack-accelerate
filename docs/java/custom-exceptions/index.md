# [Java](../) > Custom Exceptions

## Custom Exceptions
Java allows users to create their own exceptions by extending the `Exception` class.

Custom Exceptions are also called **User Defined Exceptions**. They help in creating meaningful and application-specific exception handling.

### Why Use Custom Exceptions?
- To provide meaningful error messages related to business logic.
- To differentiate application-specific exceptions from Java's built-in exceptions.
- To improve code readability and maintainability.

## Creating a Custom Exception

### Steps to Create a Custom Exception:
1. **Create a class that extends `Exception` or `RuntimeException`**
2. **Define a constructor that accepts an error message**
3. **Throw the custom exception when necessary**

### Example 1: Simple Custom Exception
```java
package com.vvsk.fullstack.exceptions;

class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class CustomExceptionExample {
    static void checkNumber(int number) throws CustomException {
        if (number < 0) {
            throw new CustomException("Negative numbers are not allowed.");
        }
    }
    
    public static void main(String[] args) {
        try {
            checkNumber(-5);
        } catch (CustomException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}
```

### Example 2: Custom Exception for Age Validation
```java
package com.vvsk.fullstack.exceptions;

class AgeException extends Exception {
    public AgeException(String message) {
        super(message);
    }
}

public class AgeValidation {
    static void validateAge(int age) throws AgeException {
        if (age < 18) {
            throw new AgeException("Age must be 18 or above to register.");
        } else {
            System.out.println("Registration successful!");
        }
    }
    
    public static void main(String[] args) {
        try {
            validateAge(16);
        } catch (AgeException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}
```

### Example 3: Custom Runtime Exception
If you don’t want to force users to handle exceptions using `throws` and `try-catch`, extend `RuntimeException` instead.

```java
package com.vvsk.fullstack.exceptions;

class InvalidInputException extends RuntimeException {
    public InvalidInputException(String message) {
        super(message);
    }
}

public class RuntimeExceptionExample {
    static void checkInput(String input) {
        if (input == null || input.isEmpty()) {
            throw new InvalidInputException("Input cannot be null or empty.");
        }
    }
    
    public static void main(String[] args) {
        checkInput(""); // This will throw an exception
    }
}
```

## Best Practices for Custom Exceptions
- Extend `Exception` for **checked exceptions** (require explicit handling)
- Extend `RuntimeException` for **unchecked exceptions** (don't require explicit handling)
- Provide meaningful exception messages
- Use custom exceptions only when built-in exceptions are insufficient
- Log exceptions for debugging purposes

## Conclusion
Custom exceptions in Java help create well-structured, readable, and maintainable applications. They enable better error handling and make code more robust.

---

🔗 **Related Topics:**
- [Exception Handling](../exception-handling/)
- [Try-Catch-Finally](../try-catch/)

