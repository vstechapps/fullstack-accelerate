# [Java](../) > Exception Hierarchy

## Exception Hierarchy in Java
Java's exception handling is based on a well-defined hierarchy. At the top of this hierarchy is the `Throwable` class, which has two main subclasses:

1. **Error**: Represents serious problems that a program should not try to handle.
2. **Exception**: Represents conditions a program might want to catch.

### Exception Hierarchy Structure
```
                 Throwable
                /         \
           Error            Exception
           /   \            /       \
      VMError  IOError   IOException  RuntimeException
                               /                \
                      FileNotFoundException  ArithmeticException
```

## Understanding Throwable
The `Throwable` class is the parent of all errors and exceptions in Java. It has two main subclasses:
- `Error`
- `Exception`

## Errors in Java
Errors represent system-level issues that usually cannot be recovered from. Examples include:

### Example: StackOverflowError
```java
package com.vvsk.fullstack.exceptions;

public class StackOverflowExample {
    public static void recursiveMethod() {
        recursiveMethod(); // Causes StackOverflowError
    }

    public static void main(String[] args) {
        recursiveMethod();
    }
}
```

### Example: OutOfMemoryError
```java
package com.vvsk.fullstack.exceptions;

import java.util.ArrayList;

public class OutOfMemoryExample {
    public static void main(String[] args) {
        ArrayList<int[]> list = new ArrayList<>();
        while (true) {
            list.add(new int[1000000]); // Causes OutOfMemoryError
        }
    }
}
```


---

🔗 **Related Topics:**
- [Exception Handling](../exception-handling/)
- [Try-Catch-Finally](../try-catch-finally/)
- [Custom Exceptions](../custom-exceptions/)
