# [Java](../) > Operators

## Introduction
Operators in Java are special symbols that perform operations on variables and values. They help manipulate data and perform calculations in a Java program.

### Why Use Operators?
- **Perform arithmetic calculations** (e.g., addition, subtraction, multiplication).
- **Compare values** (e.g., checking equality or greater/less than conditions).
- **Assign values** (e.g., storing a result in a variable).
- **Manipulate bits** (e.g., shifting bits in binary operations).

## Types of Operators in Java
Java provides several types of operators:

### 1. Arithmetic Operators
Used for basic mathematical calculations.

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Division | `a / b` |
| `%` | Modulus (Remainder) | `a % b` |

Example:
```java
int a = 10, b = 5;
System.out.println(a + b); // Output: 15
System.out.println(a % b); // Output: 0
```

### 2. Assignment Operators
Used to assign values to variables.

| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `a = b` | Assign `b` to `a` |
| `+=` | `a += b` | `a = a + b` |
| `-=` | `a -= b` | `a = a - b` |
| `*=` | `a *= b` | `a = a * b` |
| `/=` | `a /= b` | `a = a / b` |
| `%=` | `a %= b` | `a = a % b` |

Example:

```java
int x = 5;
x += 3; // x = x + 3
System.out.println(x); // Output: 8
```

### 3. Relational (Comparison) Operators
Used to compare two values.

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `a == b` |
| `!=` | Not equal to | `a != b` |
| `>` | Greater than | `a > b` |
| `<` | Less than | `a < b` |
| `>=` | Greater than or equal to | `a >= b` |
| `<=` | Less than or equal to | `a <= b` |

Example:
```java
int a = 10, b = 5;
System.out.println(a > b); // Output: true
System.out.println(a == b); // Output: false
```

### 4. Logical Operators
Used to perform logical operations.

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | Logical AND | `(a > b) && (b < c)` |
| `\|\|` | Logical OR | `(a > b) || (b > c)` |
| `!` | Logical NOT | `!(a > b)` |

Example:

```java
boolean x = true, y = false;
System.out.println(x && y); // Output: false
System.out.println(x || y); // Output: true
```

### 5. Bitwise Operators
Used for bitwise operations on binary numbers.

| Operator | Description | Example |
|----------|-------------|---------|
| `&` | Bitwise AND | `a & b` |
| `\|` | Bitwise OR | `a | b` |
| `^` | Bitwise XOR | `a ^ b` |
| `~` | Bitwise Complement | `~a` |
| `<<` | Left Shift | `a << 2` |
| `>>` | Right Shift | `a >> 2` |

Example:
```java
int a = 5, b = 3;
System.out.println(a & b); // Output: 1
System.out.println(a | b); // Output: 7
```

### 6. Unary Operators
Used with a single operand.

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Unary plus | `+a` |
| `-` | Unary minus | `-a` |
| `++` | Increment | `a++` (post-increment) / `++a` (pre-increment) |
| `--` | Decrement | `a--` (post-decrement) / `--a` (pre-decrement) |

Example:
```java
int a = 5;
System.out.println(++a); // Output: 6
System.out.println(a--); // Output: 6 (then a becomes 5)
```

### 7. Ternary Operator
A shorthand for `if-else` conditions.

| Operator | Description | Example |
|----------|-------------|---------|
| `? :` | Ternary (if-else) | `result = (a > b) ? a : b;` |

Example:
```java
int a = 10, b = 20;
int max = (a > b) ? a : b;
System.out.println(max); // Output: 20
```

## Conclusion
Operators in Java are fundamental building blocks that allow developers to perform calculations, comparisons, and logical operations efficiently. Understanding these operators is essential for writing clean and optimized Java programs.

---

[← Datatypes](../datatypes) | [Arrays →](../arrays)

---

**🔗 Related Topics:**
- [Datatypes](../datatypes)
- [Operators](../operators)
- [Arrays](../arrays)
- [Strings](../strings)

