# [Java](../) > Conditional Statements

## Introduction
Conditional statements in Java allow a program to make decisions based on conditions. These statements control the flow of execution based on whether a condition evaluates to `true` or `false`.

## Types of Conditional Statements
1. **`if` Statement**
2. **`if-else` Statement**
3. **`if-else-if` Ladder**
4. **Nested `if-else` Statement**
5. **`switch` Statement**

---

## 1. if Statement
The `if` statement executes a block of code only if a given condition is `true`.

### Syntax
```java
if (condition) {
    // Code executes if condition is true
}
```

### Example
```java
int number = 10;
if (number > 0) {
    System.out.println("Positive number");
}
```
#### Output:
```
Positive number
```

---

## 2. if-else Statement
If the condition is `true`, the `if` block executes; otherwise, the `else` block executes.

### Syntax
```java
if (condition) {
    // Executes if condition is true
} else {
    // Executes if condition is false
}
```

### Example
```java
int number = -5;
if (number > 0) {
    System.out.println("Positive number");
} else {
    System.out.println("Negative number");
}
```
#### Output:
```
Negative number
```

---

## 3. if-else-if Ladder
Used when multiple conditions need to be checked sequentially.

### Syntax
```java
if (condition1) {
    // Executes if condition1 is true
} else if (condition2) {
    // Executes if condition1 is false and condition2 is true
} else {
    // Executes if all conditions are false
}
```

### Example: Grade Calculation
```java
int marks = 85;
if (marks >= 90) {
    System.out.println("Grade: A");
} else if (marks >= 75) {
    System.out.println("Grade: B");
} else if (marks >= 50) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
```
#### Output:
```
Grade: B
```

---

## 4. Nested if-else Statement
An `if-else` statement inside another `if-else` is called nested `if-else`.

### Syntax
```java
if (condition1) {
    if (condition2) {
        // Executes if condition1 and condition2 are both true
    } else {
        // Executes if condition1 is true but condition2 is false
    }
} else {
    // Executes if condition1 is false
}
```

### Example
```java
int number = 15;
if (number > 0) {
    if (number % 2 == 0) {
        System.out.println("Positive even number");
    } else {
        System.out.println("Positive odd number");
    }
} else {
    System.out.println("Negative number");
}
```
#### Output:
```
Positive odd number
```

---

## 5. switch Statement
The `switch` statement is used when one variable is compared against multiple possible values.

### Syntax
```java
switch (expression) {
    case value1:
        // Code for case 1
        break;
    case value2:
        // Code for case 2
        break;
    default:
        // Code if no case matches
}
```

### Example
```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    case 6:
        System.out.println("Saturday");
        break;
    case 7:
        System.out.println("Sunday");
        break;
    default:
        System.out.println("Invalid day");
}
```
#### Output:
```
Wednesday
```

---

## Conclusion
Conditional statements are essential in Java for making decisions in a program. Understanding `if`, `if-else`, `if-else-if`, nested `if-else`, and `switch` helps in writing efficient and logical programs.

---

[← Strings](../strings) | [Loop Statements →](../loop-statements)

---

**🔗 Related Topics:**
- [Conditinal Statements](../conditional)
- [Loop Statements](../loop-statements)
- [Jump Statements](../jump-satements)