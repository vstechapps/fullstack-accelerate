# [Java](../) > Strings in Java

## Introduction
A **string** in Java is a sequence of characters, used to store and manipulate text. In Java, strings are objects of the `String` class, which provides various methods to work with text data.

### Why Use Strings?
- **Store Names and Messages** – Example: Usernames, messages in chat applications.
- **File Handling** – Read and write text files.
- **Data Processing** – Extract and manipulate information from text.
- **Web Development** – URLs, form inputs, and responses.

## Creating Strings in Java
Strings can be created in multiple ways:

### 1. Using String Literals
```java
String greeting = "Hello, World!";
System.out.println(greeting);
```
- Java optimizes memory usage by storing string literals in a **string pool**.

### 2. Using the `new` Keyword
```java
String message = new String("Hello, Java!");
System.out.println(message);
```
- This explicitly creates a new string object in memory.

## Common String Operations
### 1. Finding String Length
```java
String text = "Java Programming";
System.out.println("Length: " + text.length());
```
### 2. Converting to Upper and Lower Case
```java
String name = "Java";
System.out.println(name.toUpperCase()); // Output: JAVA
System.out.println(name.toLowerCase()); // Output: java
```
### 3. Concatenation (Joining Strings)
```java
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName;
System.out.println(fullName); // Output: John Doe
```
Or using the `concat()` method:
```java
String fullName2 = firstName.concat(" ").concat(lastName);
System.out.println(fullName2);
```
### 4. Checking if Two Strings are Equal
```java
String str1 = "Java";
String str2 = "java";
System.out.println(str1.equals(str2)); // false
System.out.println(str1.equalsIgnoreCase(str2)); // true
```
### 5. Extracting a Substring
```java
String sentence = "Welcome to Java";
String sub = sentence.substring(11);
System.out.println(sub); // Output: Java
```
### 6. Replacing Characters in a String
```java
String original = "Java is fun";
String replaced = original.replace("fun", "awesome");
System.out.println(replaced); // Output: Java is awesome
```
### 7. Splitting a String
```java
String data = "apple,banana,grape";
String[] fruits = data.split(",");
for (String fruit : fruits) {
    System.out.println(fruit);
}
```
### 8. Checking if a String Contains a Word
```java
String text = "Learning Java is fun!";
System.out.println(text.contains("Java")); // true
```

## String Immutability
- In Java, **strings are immutable**, meaning their values cannot be changed once created.
- Any modification results in a **new string** being created.

Example:
```java
String word = "Hello";
word = word + " World"; // Creates a new string
System.out.println(word);
```

## Mutable Strings: `StringBuilder` and `StringBuffer`
If frequent modifications are needed, use **StringBuilder** or **StringBuffer**:

### Using `StringBuilder`
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString());
```

### Using `StringBuffer` (Thread-Safe)
```java
StringBuffer sbf = new StringBuffer("Java");
sbf.append(" Programming");
System.out.println(sbf.toString());
```

## Conclusion
Strings are essential in Java programming, used in almost every application. Understanding how to create, manipulate, and optimize them improves performance and code efficiency.

---

[← Arrays](../arrays) | [Conditional Statements →](../conditional-statements)

---

**🔗 Related Topics:**
- [Datatypes](../datatypes)
- [Operators](../operators)
- [Arrays](../arrays)
- [Strings](../strings)
