# [Java](../) > Data Types

## Introduction
Data types in Java define the type of data a variable can store. A data type is like a container; it defines what kind of data a variable can hold. Java is a statically-typed language, meaning every variable must have a predefined type.

### **Why Do We Need Data Types?**
Data types ensure memory efficiency and prevent unexpected operations. Without data types, we would not be able to control what kind of data is stored in variables.

#### **Example With Data Types:**
```java
int num = 10;
String name = "John";
```
Using explicit data types improves readability, reliability, and performance.

#### **Real-World Examples:**
1. **Student Marks:** Using integer type for marks:
   ```java
   int marks = 85;
   ```
2. **Temperature Readings:** Using float type for precise values:
   ```java
   float temperature = 36.5f;
   ```

## Types of Data Types in Java
Java has two main categories of data types:
1. **Primitive Data Types** (Built-in)
2. **Non-Primitive Data Types** (User-defined)

---

## 1. Primitive Data Types
Primitive data types are the most basic types built into Java. There are **8 types**:

### **Integer Types**

| Data Type | Size  | Default Value | Example Value |
|-----------|-------|---------------|---------------|
| `byte`    | 1 byte  | 0  | `byte b = 127;` |
| `short`   | 2 bytes | 0  | `short s = 32000;` |
| `int`     | 4 bytes | 0  | `int i = 100000;` |
| `long`    | 8 bytes | 0L | `long l = 10000000000L;` |

### **Floating-Point Types**

| Data Type | Size  | Default Value | Example Value |
|-----------|-------|---------------|---------------|
| `float`   | 4 bytes | 0.0f  | `float f = 12.34f;` |
| `double`  | 8 bytes | 0.0d  | `double d = 123.456;` |

### **Character & Boolean**

| Data Type  | Size  | Default Value | Example Value |
|------------|-------|---------------|---------------|
| `char`     | 2 bytes | `\u0000`  | `char ch = 'A';` |
| `boolean`  | 1 bit  | `false`  | `boolean flag = true;` |

---

## 2. Non-Primitive Data Types

Non-primitive data types refer to objects and are more complex. The most common are:

### **String (Text Data)**
```java
String name = "Java Programming";
```

### **Arrays (Collection of Values)**
```java
int[] numbers = {10, 20, 30};
```

---

## Examples of Using Different Data Types

### **1. Integer Example**
```java
int age = 25;
System.out.println("Age: " + age);
```

### **2. Floating-Point Example**
```java
double price = 99.99;
System.out.println("Price: " + price);
```

### **3. Character Example**
```java
char grade = 'A';
System.out.println("Grade: " + grade);
```

### **4. Boolean Example**
```java
boolean isJavaFun = true;
System.out.println("Is Java Fun? " + isJavaFun);
```

### **5. String Example**
```java
String message = "Hello, Java!";
System.out.println(message);
```

---

## Advantages of Using Proper Data Types
- **Memory Efficiency** – Choosing the correct type saves memory.
- **Performance Optimization** – Using smaller types improves execution speed.
- **Data Integrity** – Prevents invalid operations on data.

## Conclusion
Java provides a rich set of data types to handle different kinds of information efficiently. Understanding data types is essential for writing robust and optimized Java programs.

---

[← JDK JRE JVM](../jdk-jre-jvm) | [Operators →](../operators)

---

**🔗 Related Topics:**
- [Datatypes](../datatypes)
- [Operators](../operators)
- [Arrays](../arrays)
- [Strings](../strings)

