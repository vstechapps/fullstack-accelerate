# [Java](../) > OOP > Inheritance in Java

Inheritance is one of the four fundamental Object-Oriented Programming (OOP) concepts in Java, along with Encapsulation, Abstraction, and Polymorphism. It allows a class (subclass or child class) to inherit properties and behaviors (fields and methods) from another class (superclass or parent class), promoting code reusability and hierarchical relationships.

## Advantages of Inheritance
1. **Code Reusability** - Inherited methods and attributes reduce redundant code.
2. **Improved Maintainability** - Changes in the parent class reflect automatically in child classes.
3. **Encapsulation & Modularity** - Inheritance structures large projects into smaller, manageable units.
4. **Polymorphism Support** - Enables method overriding, allowing flexibility and dynamic method invocation.

## Types of Inheritance in Java
Java supports the following types of inheritance:

1. **Single Inheritance** - A subclass inherits from one superclass.
2. **Multilevel Inheritance** - A class inherits from another class, forming a hierarchy.
3. **Hierarchical Inheritance** - Multiple child classes inherit from the same parent class.
4. **Multiple Inheritance with Interfaces** - Java does not support multiple inheritance with classes but allows it using interfaces.

> **Note:** Java does not support multiple inheritance with classes to avoid ambiguity (Diamond Problem).

## `extends` Keyword in Java
The `extends` keyword is used to establish inheritance between two classes. The subclass inherits fields and methods from the superclass.

### Example: Single Inheritance
```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited method from Animal
        dog.bark(); // Method of Dog class
    }
}
```

### Example: Multilevel Inheritance
```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Mammal extends Animal {
    void walk() {
        System.out.println("Mammals can walk.");
    }
}

class Dog extends Mammal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited from Animal
        dog.walk(); // Inherited from Mammal
        dog.bark(); // Defined in Dog
    }
}
```

### Explanation
- The `Dog` class inherits from `Animal`, allowing access to `eat()`.
- The `Dog` class also introduces its own method `bark()`.
- In the multilevel example, `Dog` inherits from `Mammal`, which itself inherits from `Animal`.

Inheritance simplifies development by reducing redundancy and promoting a structured approach to object-oriented programming.

---

🔗 **Related Topics:**
- [Classification](../classification)
- [Encapsulation](../encapsulation)
- [Abstraction](../abstraction)
- [Polymorphism](../polymorphism)

---

