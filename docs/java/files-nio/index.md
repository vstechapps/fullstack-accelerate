# [Java](../) > Files NIO

## Files NIO in Java
The `java.nio.file` package in Java provides enhanced file handling capabilities with efficient methods for reading, writing, and managing files. The `Files` class in this package offers a rich set of utility methods for file operations.

## Understanding `Path`, `Paths`, and `Files`
### `Path` Interface
- The `Path` interface represents the location of a file or directory in the file system.
- It is obtained using `Paths.get()` method for flexible path handling.
- It is more efficient and versatile than the traditional `File` class.

### `Paths` Class
- The `Paths` class is a utility class used to create `Path` objects.
- The most common method is `Paths.get()` which converts string paths into `Path` instances.
- Supports both relative and absolute file paths for seamless path handling.

**Example:**
```java
import java.nio.file.Path;
import java.nio.file.Paths;

public class PathExample {
    public static void main(String[] args) {
        Path path = Paths.get("example_nio.txt");
        System.out.println("File Name: " + path.getFileName());
        System.out.println("Root: " + path.getRoot());
        System.out.println("Parent: " + path.getParent());
    }
}
```

### `Files` Class
- The `Files` class provides static methods for file creation, deletion, copying, moving, and reading/writing data.
- It simplifies file operations using modern APIs like `Path`.

## Common Methods in `Files` Class

| Operation        | Package        | Class   | Method                    |
|------------------|----------------|----------|---------------------------|
| Create File        | `java.nio.file` | `Files`  | `createFile()`             |
| Create Directory   | `java.nio.file` | `Files`  | `createDirectory()`        |
| Copy File           | `java.nio.file` | `Files`  | `copy()`                   |
| Move File           | `java.nio.file` | `Files`  | `move()`                   |
| Delete File         | `java.nio.file` | `Files`  | `delete()`                 |
| Read File           | `java.nio.file` | `Files`  | `readAllLines()`           |
| Write to File       | `java.nio.file` | `Files`  | `write()`                  |

## Example: Creating a File Using `Files.createFile()`
```java
package com.vvsk.fullstack.files;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class CreateFileNIOExample {
    public static void main(String[] args) {
        Path path = Paths.get("example_nio.txt");
        try {
            Files.createFile(path);
            System.out.println("File created successfully.");
        } catch (IOException e) {
            System.out.println("Error creating file: " + e.getMessage());
        }
    }
}
```

## Example: Reading a File Using `Files.readAllLines()`
```java
package com.vvsk.fullstack.files;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class ReadFileNIOExample {
    public static void main(String[] args) {
        Path path = Paths.get("example_nio.txt");
        try {
            List<String> lines = Files.readAllLines(path);
            lines.forEach(System.out::println);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
```

## Example: Writing to a File Using `Files.write()`
```java
package com.vvsk.fullstack.files;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;

public class WriteFileNIOExample {
    public static void main(String[] args) {
        Path path = Paths.get("example_nio.txt");
        try {
            Files.write(path, Arrays.asList("Hello, NIO World!", "Java NIO makes file handling easy."));
            System.out.println("Data written successfully.");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }
}
```

## Best Practices for Using `Files` in Java NIO
✅ Use `Paths.get()` for platform-independent file paths.  
✅ Leverage `try-with-resources` to manage file resources efficiently.  
✅ Handle exceptions like `IOException` and `FileAlreadyExistsException` carefully.  
✅ Prefer `Files.copy()` for copying files efficiently with permissions preserved.  

---

[← File Permissions](../file-permissions) | [Multithreading →](../multithreading)

