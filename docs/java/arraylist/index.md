# [Java](../) > ArrayList

## Difference Between Arrays and ArrayList
In Java, both arrays and `ArrayList` are used to store multiple elements. However, they have key differences in terms of functionality, flexibility, and performance.

## Example Usage

### Using an Array
```java
public class ArrayExample {
    public static void main(String[] args) {
        int[] numbers = new int[3];
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}
```

### Using an ArrayList
```java
import java.util.*;
public class ArrayListExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}
```

### Dynamically Changing Elements in an ArrayList
```java
import java.util.*;
public class DynamicArrayListExample {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        
        System.out.println("Before modification: " + fruits);
        
        // Modifying elements
        fruits.set(1, "Grapes"); // Changing "Banana" to "Grapes"
        fruits.remove(2); // Removing "Orange"
        fruits.add("Mango"); // Adding "Mango"
        
        System.out.println("After modification: " + fruits);
    }
}
```

## Key Differences Between Arrays and ArrayList

| Feature        | Arrays | ArrayList |
|---------------|--------|-----------|
| Size | Fixed at initialization | Dynamic (can grow and shrink) |
| Type | Can store both primitives and objects | Only stores objects (uses wrapper classes for primitives) |
| Performance | Faster for fixed-size operations | Slightly slower due to resizing and auto-boxing |
| Memory Usage | Less memory (no overhead) | More memory due to resizing and internal management |
| Built-in Methods | No built-in methods | Provides methods like `add()`, `remove()`, `contains()`, etc. |
| Iteration | Uses `for` loop or `Arrays` utility class | Supports iterators and enhanced `for` loop |

## When to Use What?
- Use **arrays** when the number of elements is fixed and performance is critical.
- Use **ArrayList** when flexibility is needed for dynamic data manipulation.
- Arrays provide better performance and memory efficiency
- `ArrayList` offers flexibility and additional functionalities. 

## Understanding Wrapper Classes and Generic Type

- Java Collections only work with objects, so primitive types must be converted to their corresponding wrapper classes when used in collections.
- Wrapper classes like  **Integer and Character** are exact replica of our primitive data types **int and char** and support inbuilt auto-boxing (auto-conversion feature in java)
- Collection Framework completely use declartion of **Generic Type** using **<>** and allows flexible and type-safe operations that are performed on data collection.

## Primitive Types vs Corresponding Generic Types

| Primitive Type | Wrapper Class (Generic Type) |
|---------------|----------------------------|
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |



