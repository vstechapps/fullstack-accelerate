# [Java](../) > Arrays in Java

## Introduction
An **array** in Java is a collection of elements of the **same type**, stored in a fixed-size sequence. 
It allows us to store multiple values under a single variable and access them using an index.

### **Why Do We Need Arrays?**
Without arrays, we would need to declare multiple variables to store individual values, making the code inefficient and hard to manage.

#### **Example Without Arrays:**
```java
int num1 = 10;
int num2 = 20;
int num3 = 30;
int num4 = 40;
int num5 = 50;
```
This approach is difficult when handling large datasets.

#### **Example With an Array:**
```java
int[] numbers = {10, 20, 30, 40, 50};
```
Arrays make it easier to store, access, and manipulate data efficiently.

#### **Real-World Examples:**
1. **Marks of Students:** Instead of storing marks for each student separately, we can use an array:
   ```java
   int[] marks = {85, 90, 78, 92, 88};
   ```
2. **List of Even Numbers:** Storing multiple even numbers in a structured way:
   ```java
   int[] evenNumbers = {2, 4, 6, 8, 10};
   ```

### **Visual Representation of an Array**
Below is an image representation of how an array is stored in memory:

```
Index:   0   1   2   3   4
Values: 10  20  30  40  50
         ^
        (Pointer at index 0)
```

## Declaration and Initialization

### Declaring an Array
An array in Java is declared using the following syntax:

```java
// Syntax
datatype[] arrayName;
```

For example:
```java
int[] numbers;
String[] names;
```

### Initializing an Array
Arrays can be initialized at the time of declaration or later using the `new` keyword.

#### **1. Initialization at Declaration**
```java
int[] numbers = {1, 2, 3, 4, 5};
```

#### **2. Initialization Using `new` Keyword**
```java
int[] numbers = new int[5]; // Creates an array of size 5
numbers[0] = 10;
numbers[1] = 20;
```

## Types of Arrays in Java
### **1. One-Dimensional Arrays**
A one-dimensional array is the simplest form of an array.
```java
int[] arr = new int[3];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
```

### **2. Multi-Dimensional Arrays**
A multi-dimensional array is an array of arrays. The most commonly used type is the **2D array**.
```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

## Accessing Elements in an Array
Array elements can be accessed using their **index**.
```java
int[] numbers = {10, 20, 30, 40};
System.out.println(numbers[0]); // Output: 10
System.out.println(numbers[2]); // Output: 30
```

## Traversing an Array
### **Using a For Loop**
```java
int[] numbers = {10, 20, 30, 40};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

### **Using an Enhanced For Loop**
```java
for (int num : numbers) {
    System.out.println(num);
}
```

## Common Array Operations
### **1. Finding the Length of an Array**
```java
int length = numbers.length;
```

### **2. Copying an Array**
```java
int[] copiedArray = Arrays.copyOf(numbers, numbers.length);
```

### **3. Sorting an Array**
```java
Arrays.sort(numbers);
```

### **4. Searching an Array (Binary Search)**
```java
int index = Arrays.binarySearch(numbers, 30);
```

## Arrays with Different Data Types
### **1. Character Array**
```java
char[] vowels = {'a', 'e', 'i', 'o', 'u'};
```

### **2. Float Array**
```java
float[] prices = {10.5f, 20.75f, 30.0f, 40.25f};
```

### **3. Double Array**
```java
double[] distances = {5.678, 12.345, 9.876, 25.432};
```

## Advantages of Arrays
- **Fast access** to elements using indices.
- **Efficient memory usage**.
- **Easy to traverse** and manipulate.

## Disadvantages of Arrays
- **Fixed size** (cannot grow dynamically).
- **Insertion and deletion** are costly.

## Conclusion
Arrays are a fundamental data structure in Java, providing a way to store and manipulate multiple values efficiently. Understanding arrays is essential for working with collections, algorithms, and data manipulation in Java.

---

[← Operators](../operators) | [Strings →](../strings)

---

**🔗 Related Topics:**
- [Datatypes](../datatypes)
- [Operators](../operators)
- [Arrays](../arrays)
- [Strings](../strings)

