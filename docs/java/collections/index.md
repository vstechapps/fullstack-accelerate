# [Java](../) > Java Collections

## Introduction
Java Collections Framework (JCF) provides a set of interfaces and classes to store and manipulate groups of objects efficiently. Collections help manage dynamic data structures like lists, sets, and maps.

## Why Use Collections?
- Dynamic sizing (unlike arrays)
- Built-in sorting and searching
- Better performance and memory management

## Core Interfaces
### 1. List (Ordered Collection, Allows Duplicates)
- **ArrayList**: Fast random access, slower insert/delete
- **LinkedList**: Fast insert/delete, slower access

**Example:**
```java
import java.util.*;
public class ListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Apple"); // Allows duplicates
        System.out.println(list);
    }
}
```

### 2. Set (Unique Elements, No Duplicates)
- **HashSet**: Unordered, fast operations
- **TreeSet**: Sorted order
- **LinkedHashSet**: Maintains insertion order

**Example:**
```java
import java.util.*;
public class SetExample {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // Ignored
        System.out.println(set);
    }
}
```

### 3. Map (Key-Value Pairs)
- **HashMap**: Fast access, unordered
- **TreeMap**: Sorted by key
- **LinkedHashMap**: Maintains insertion order

**Example:**
```java
import java.util.*;
public class MapExample {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(1, "Grapes"); // Overwrites previous value
        System.out.println(map);
    }
}
```

## Utility Classes
- **Collections**: Sort, reverse, shuffle, etc.
- **Arrays**: Convert arrays to lists

**Example:**
```java
import java.util.*;
public class UtilityExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, 3, 8, 1);
        Collections.sort(numbers);
        System.out.println(numbers); // [1, 3, 5, 8]
    }
}
```

## Conclusion
Java Collections provide a powerful way to manage data structures efficiently. Choose the right collection type based on your use case for optimal performance.

---

🔗 **Related Topics:**
- [ArrayList](../arraylist/)
- [Sorting](../sorting)

---