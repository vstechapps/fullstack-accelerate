# [Java](../) > Jump Statements

## Introduction
Jump statements in Java are used to transfer control to another part of the program. They help in altering the normal flow of execution in loops and switch cases.

## Types of Jump Statements in Java
1. **`break` Statement**
2. **`continue` Statement**
3. **`return` Statement**

---

## 1. break Statement
The `break` statement is used to exit a loop or a switch statement immediately when encountered.

### Syntax
```java
break;
```

### Example: Exiting a Loop When a Condition is Met
```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.println(i);
}
```
#### Output:
```
1
2
```

### Example: Using `break` in a Switch Case
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

## 2. continue Statement
The `continue` statement is used to skip the current iteration of a loop and move to the next iteration.

### Syntax
```java
continue;
```

### Example: Skipping an Iteration in a Loop
```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.println(i);
}
```
#### Output:
```
1
2
4
5
```

---

## 3. return Statement
The `return` statement is used to exit from a method and optionally return a value.

### Syntax
```java
return; // Exits from method without returning a value
return value; // Returns a specific value
```

### Example: Returning a Value from a Method
```java
public class Example {
    public static int add(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        int sum = add(5, 3);
        System.out.println("Sum: " + sum);
    }
}
```
#### Output:
```
Sum: 8
```

---

## Conclusion
Jump statements in Java allow us to control program flow effectively. Understanding `break`, `continue`, and `return` helps in writing efficient and readable code.

---
🔗 **Related Topics:**
- [Conditional Statements](../conditional-statements)
- [Loop Statements](../loop-statements)