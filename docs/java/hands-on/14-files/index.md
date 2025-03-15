# [Java](../../) - File Handling - Hands-on

## Learning Objectives

- Understand how to perform file operations in Java.
- Implement reading, writing, checking existence, and copying files.
- Parse a CSV file and construct Java objects.

---

## Exercise 1: Reading a File

### Problem Statement
Write a program that reads the contents of a text file and displays it on the console. Handle exceptions for missing or unreadable files.

### Instructions:
1. Accept a filename as input.
2. Read and print the file content line by line.
3. Handle `FileNotFoundException` and `IOException` appropriately.

### Expected Output:
- The content of the file.
- An error message if the file is missing or unreadable.

---

## Exercise 2: Writing to a File

### Problem Statement
Write a program that takes user input and writes it to a text file.

### Instructions:
1. Accept a filename and content from the user.
2. Write the content to the specified file.
3. Handle exceptions during the writing process.

### Expected Output:
- Confirmation message after successful writing.
- An error message if the operation fails.

---

## Exercise 3: Checking if a File Exists

### Problem Statement
Write a program that checks whether a given file exists or not.

### Instructions:
1. Accept a filename as input.
2. Check if the file exists using Java’s File API.
3. Display an appropriate message.

### Expected Output:
- A message confirming whether the file exists or not.

---

## Exercise 4: Copying a File from Source to Destination

### Problem Statement
Write a program to copy a file from a source path to a destination path.

### Instructions:
1. Accept source and destination file paths as input.
2. Copy the file contents from the source to the destination.
3. Handle exceptions such as `FileNotFoundException` and `IOException`.

### Expected Output:
- Confirmation that the file was copied successfully.
- An error message if the operation fails.

---

## Exercise 5: Reading and Parsing a CSV File

### Problem Statement
Write a program that reads a CSV file, parses each row, and constructs Java objects from the data.

### Instructions:
1. Define a class representing the CSV data (e.g., `Person` with fields `name`, `age`, `email`).
2. Read the CSV file line by line.
3. Split each line and map it to an object.
4. Handle exceptions for missing or invalid data.

### Expected Output:
- List of Java objects constructed from the CSV file.
- An error message if parsing fails.

---

## Exercise 6: Deleting a File

### Problem Statement
Write a program that deletes a specified file and handles potential exceptions.

### Instructions:
1. Accept a filename as input.
2. Check if the file exists and delete it.
3. Handle any exceptions that may occur.

### Expected Output:
- Confirmation that the file was deleted.
- An error message if deletion fails.

---

## Exercise 7: Appending Data to a File

### Problem Statement
Modify an existing file by appending new data instead of overwriting it.

### Instructions:
1. Accept a filename and content from the user.
2. Open the file in append mode and write new data.
3. Handle exceptions during the writing process.

### Expected Output:
- Confirmation that the data was appended.
- An error message if the operation fails.

---

## Exercise 8: Listing Files in a Directory

### Problem Statement
Write a program that lists all files in a specified directory.

### Instructions:
1. Accept a directory path as input.
2. Display all files and subdirectories inside it.
3. Handle exceptions if the directory does not exist.

### Expected Output:
- A list of files and directories in the specified location.
- An error message if the directory is invalid.

---

🔗 **Related Topics:**
- [File Handling](../file-handling/)
- [Java NIO](../java-nio)
---