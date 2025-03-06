# [Java](../) > Streams API

## Streams API in Java Collections

The Streams API in Java provides a functional approach to processing collections of data. It allows for efficient operations like filtering, mapping, sorting, and aggregation in a declarative manner.

## Why Use Streams?

- Improves code readability
- Reduces boilerplate code
- Supports parallel processing for better performance
- Works seamlessly with collections

## Creating a Stream

Streams can be created from various sources, such as Lists, Sets, Maps, and Arrays.

### Example: Creating a Stream from a List

```java
import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ajay", "Balu", "Chaitanya", "Dinesh");
        
        Stream<String> nameStream = names.stream();
        nameStream.forEach(System.out::println);
    }
}
```

## Common Stream Operations

### 1. Filtering

The `filter()` method is used to select elements that match a given condition.

```java
List<String> names = Arrays.asList("Ajay", "Balu", "Chaitanya", "Dinesh");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println);
```

### 2. Mapping

The `map()` function transforms each element in a stream.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
       .map(n -> n * n)
       .forEach(System.out::println);
```

### 3. Sorting

Streams allow sorting using `sorted()`.

```java
List<String> names = Arrays.asList("Chaitanya", "Ajay", "Dinesh", "Balu");
names.stream()
     .sorted()
     .forEach(System.out::println);
```

### 4. Collecting Results

To convert a stream back into a list, use `collect(Collectors.toList())`.

```java
List<Integer> numbers = Arrays.asList(5, 3, 8, 1, 2);
List<Integer> sortedNumbers = numbers.stream()
                                     .sorted()
                                     .collect(Collectors.toList());
System.out.println(sortedNumbers);
```

### 5. Reducing

`reduce()` is used to accumulate stream elements into a single result.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
                 .reduce(0, Integer::sum);
System.out.println("Sum: " + sum);
```

### 6. Grouping Elements

The `Collectors.groupingBy()` method is used to group elements based on a property.

```java
import java.util.*;
import java.util.stream.*;

public class GroupingExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ajay", "Balu", "Chaitanya", "Dinesh", "Arjun", "Bhaskar");
        
        Map<Character, List<String>> groupedNames = names.stream()
            .collect(Collectors.groupingBy(name -> name.charAt(0)));
        
        System.out.println(groupedNames);
    }
}
```

## Parallel Streams

For large datasets, parallel streams can improve performance by utilizing multiple CPU cores.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers.parallelStream()
       .map(n -> n * n)
       .forEach(System.out::println);
```

## Conclusion

The Streams API provides a powerful, functional approach to working with collections in Java. By leveraging streams, developers can write cleaner, more efficient, and parallelizable code.

---

[← Sorting Collections](../sorting) | [Exception Handling →](../exception-handling)


---

🔗 **Related Topics:**
- [Collections](../collections/)
- [ArrayList](../arraylist)

---