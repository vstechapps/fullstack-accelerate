# [Java](../) > Loop Statements

## Introduction
Loop statements in Java are used to execute a block of code multiple times until a specific condition is met. They help in reducing redundancy and improving code efficiency.

## Types of Loops in Java
1. **`for` Loop**
2. **`while` Loop**
3. **`do-while` Loop**
4. **Enhanced `for` Loop (for-each loop)**

---

## 1. for Loop
The `for` loop is used when the number of iterations is known beforehand.

### Syntax
```java
for (initialization; condition; update) {
    // Code executes while condition is true
}
```

### Example: Print numbers from 1 to 5
```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```
#### Output:
```
1
2
3
4
5
```

---

## 2. while Loop
The `while` loop executes a block of code as long as the condition remains `true`.

### Syntax
```java
while (condition) {
    // Code executes while condition is true
}
```

### Example: Print numbers from 1 to 5
```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
```
#### Output:
```
1
2
3
4
5
```

---

## 3. do-while Loop
The `do-while` loop is similar to the `while` loop, but it ensures that the loop body executes at least once before checking the condition.

### Syntax
```java
do {
    // Code executes at least once
} while (condition);
```

### Example: Print numbers from 1 to 5
```java
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);
```
#### Output:
```
1
2
3
4
5
```

---

## 4. Enhanced for Loop (for-each loop)
The enhanced `for` loop is used to iterate over arrays or collections.

### Syntax
```java
for (dataType variable : collection) {
    // Code executes for each element in collection
}
```

### Example: Print array elements
```java
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```
#### Output:
```
1
2
3
4
5
```

---

## Conclusion
Loop statements in Java allow us to execute code multiple times efficiently. Understanding `for`, `while`, `do-while`, and enhanced `for` loops helps in writing clean and optimized programs.

---
🔗 **Related Topics:**
- [Conditional Statements](../conditional-statements)
- [Jump Statements](../jump-statements)