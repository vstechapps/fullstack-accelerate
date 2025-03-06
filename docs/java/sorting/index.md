# [Java](../) > Sorting Collections

# Sorting Collections in Java

## Introduction

Sorting is an essential operation in Java collections, allowing us to organize data for better accessibility and efficiency. Java provides two primary ways to sort collections:

1. **Using the `Comparable` Interface**
2. **Using the `Comparator` Interface**

## 1. Using the `Comparable` Interface

The `Comparable` interface is used for defining the natural ordering of objects. It contains a single method, `compareTo()`, which must be implemented to define how objects of a class should be compared.

### Example: Sorting a List of Students by Name

```java
import java.util.*;

class Student implements Comparable<Student> {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Student other) {
        return this.name.compareTo(other.name);
    }

    @Override
    public String toString() {
        return name + " - " + age;
    }
}

public class ComparableExample {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Ajay", 22),
            new Student("Balu", 20),
            new Student("Chaitanya", 25),
            new Student("Dinesh", 21)
        );

        Collections.sort(students);
        System.out.println(students);
    }
}
```

### Significance of `compareTo()`
- The `compareTo()` method returns:
  - A negative number if `this` object is less than the other object.
  - Zero if both objects are equal.
  - A positive number if `this` object is greater than the other object.
- It defines the **natural ordering** of objects.

## 2. Using the `Comparator` Interface

The `Comparator` interface is used to define multiple sorting criteria by passing custom comparator objects.

### Example: Sorting Students by Age

```java
import java.util.*;

class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + " - " + age;
    }
}

public class ComparatorExample {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Ajay", 22),
            new Student("Balu", 20),
            new Student("Chaitanya", 25),
            new Student("Dinesh", 21)
        );

        students.sort(Comparator.comparingInt(s -> s.age));
        System.out.println(students);
    }
}
```

### Key Differences Between `Comparable` and `Comparator`

| Feature          | `Comparable` | `Comparator` |
|-----------------|-------------|-------------|
| Purpose         | Defines natural ordering of objects | Defines custom sorting logic |
| Method         | `compareTo(T obj)` | `compare(T obj1, T obj2)` |
| Implementation  | Implemented in the class itself | Implemented separately as a lambda or a class |
| Sorting Criteria | Only one | Multiple, as required |

## Conclusion

- Use `Comparable` when an object has a natural ordering.
- Use `Comparator` when multiple sorting criteria are needed.
- Both interfaces help in achieving efficient sorting operations in Java Collections.

---

[← ArrayList](../arraylist) | [Streams API →](../streams)

---

🔗 **Related Topics:**
- [Collections](../collections/)
- [ArrayList](../arraylist)
- [Streams API](../streams)
---