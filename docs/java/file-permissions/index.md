# [Java](../) > File Permissions

## File Permissions in Java
Java provides methods in the `File` class to check and modify file permissions such as read and write access. These methods help ensure security and control over file access.

## Common File Permission Methods
| Operation          | Package   | Class  | Method               |
|--------------------|------------|---------|-----------------------|
| Check Read Access   | `java.io`   | `File`  | `canRead()`            |
| Check Write Access  | `java.io`   | `File`  | `canWrite()`           |
| Set Readable        | `java.io`   | `File`  | `setReadable(boolean)` |
| Set Writable        | `java.io`   | `File`  | `setWritable(boolean)` |

## Checking File Permissions
The `canRead()` and `canWrite()` methods check if a file is readable or writable, respectively.

### Example: Checking File Permissions
```java
package com.vvsk.fullstack.files;

import java.io.File;

public class CheckPermissionsExample {
    public static void main(String[] args) {
        File file = new File("example.txt");

        if (file.exists()) {
            System.out.println("Readable: " + file.canRead());
            System.out.println("Writable: " + file.canWrite());
        } else {
            System.out.println("File does not exist.");
        }
    }
}
```

## Modifying File Permissions
The `setReadable()` and `setWritable()` methods modify file permissions.

### Example: Modifying File Permissions
```java
package com.vvsk.fullstack.files;

import java.io.File;
import java.io.IOException;

public class ModifyPermissionsExample {
    public static void main(String[] args) throws IOException {
        File file = new File("example.txt");
        
        // Create the file if it does not exist
        if (file.createNewFile()) {
            System.out.println("File created successfully.");
        }

        // Set read-only
        if (file.setReadable(true) && file.setWritable(false)) {
            System.out.println("File set to read-only mode.");
        } else {
            System.out.println("Failed to set permissions.");
        }

        // Revert to writable mode
        if (file.setWritable(true)) {
            System.out.println("File set back to writable mode.");
        } else {
            System.out.println("Failed to restore write permissions.");
        }
    }
}
```

## Best Practices for File Permissions
✅ Always verify if a file exists before checking or modifying permissions.  
✅ Use permissions carefully in security-sensitive applications.  
✅ When setting permissions, consider platform-specific behavior for compatibility.  

---

[← Files IO](../files-io) | [File NIO →](../files-nio)

