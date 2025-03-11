# [Java](../) > File I/O

## File I/O in Java
File I/O (Input/Output) in Java is essential for reading data from and writing data to files. Java provides various classes in the `java.io` and `java.nio` packages for file handling.

## Common File I/O Operations
| Operation      | Package   | Class          | Method            |
|----------------|------------|----------------|--------------------|
| Create File      | `java.io`   | `File`          | `createNewFile()`   |
| Read File        | `java.io`   | `FileReader`     | `read()`            |
| Write to File    | `java.io`   | `FileWriter`     | `write()`            |
| Buffered Read    | `java.io`   | `BufferedReader` | `readLine()`         |
| Append to File   | `java.io`   | `FileWriter`     | `write()` with `true` flag |
| Delete File      | `java.io`   | `File`           | `delete()`            |

## Creating a File
To create a file, you can use the `File` class.

### Example: Creating a File
```java
package com.vvsk.fullstack.files;

import java.io.File;
import java.io.IOException;

public class CreateFileExample {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred while creating the file.");
            e.printStackTrace();
        }
    }
}
```

## Writing to a File
For writing content to a file, use `FileWriter` or `BufferedWriter`.

### Example: Writing to a File
```java
package com.vvsk.fullstack.files;

import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("example.txt");
            writer.write("Hello, this is a sample text written to the file.");
            writer.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file.");
            e.printStackTrace();
        }
    }
}
```

## Reading from a File
For reading data from a file, you can use `FileReader`, `BufferedReader`, or `Scanner`.

### Example: Reading a File Using `FileReader`
```java
package com.vvsk.fullstack.files;

import java.io.FileReader;
import java.io.IOException;

public class ReadFileExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("example.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file.");
            e.printStackTrace();
        }
    }
}
```

## Combining Read and Write with Exception Handling
Using `try-with-resources` is the best practice for automatic resource management.

### Example: Read and Write with Exception Handling
```java
package com.vvsk.fullstack.files;

import java.io.*;

public class FileReadWriteExample {
    public static void main(String[] args) {
        String filePath = "example.txt";

        // Writing to file
        try (FileWriter writer = new FileWriter(filePath)) {
            writer.write("This text is both written and read using Java File I/O.");
            System.out.println("Data written successfully.");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }

        // Reading from file
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            System.out.println("Reading content from file:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading from file: " + e.getMessage());
        }
    }
}
```

## Key Classes in Java File I/O
| Class            | Description                               |
|------------------|-------------------------------------------|
| `File`            | Used to create, delete, and inspect file properties. |
| `FileWriter`      | Used for writing character data to files. |
| `FileReader`      | Used for reading character data from files. |
| `BufferedReader`  | Efficient for reading large text data.    |
| `PrintWriter`     | Provides efficient text formatting during writing. |
| `Scanner`         | Flexible for reading input from files.    |

## Best Practices for File I/O
✅ Always close file resources using `try-with-resources` or `.close()`.  
✅ Handle exceptions like `IOException` and `FileNotFoundException` properly.  
✅ Use `Buffered` classes for better performance when handling large files.  

---

[← Exception Handling](../exception-handling) | [File Permissions →](../file-permissions)

