# [Java](../) > Abstraction

# Understanding Abstraction in Java

Abstraction is one of the four fundamental Object-Oriented Programming (OOP) principles in Java, alongside Encapsulation, Inheritance, and Polymorphism. It is the process of hiding implementation details from the user and exposing only the essential features.

In Java, abstraction is achieved through **abstract classes** and **interfaces**. It helps in reducing complexity and increasing the reusability of code.

## **Advantages of Abstraction**
- Hides implementation details and shows only essential functionalities.
- Reduces code complexity and improves code readability.
- Provides a clear separation between interface and implementation.
- Enhances security by restricting direct access to the implementation.

---

## **1. Abstraction using Abstract Classes**
An **abstract class** in Java is a class that **cannot be instantiated**. It may contain abstract methods (methods without a body) and concrete methods (fully defined methods).

### **Example of Abstract Class:**
```java
abstract class Vehicle {
    abstract void start(); // Abstract method (no implementation)
    
    void stop() {
        System.out.println("Vehicle is stopping"); // Concrete method
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car is starting with a key");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car(); // Upcasting
        myCar.start(); // Calls Car's implementation
        myCar.stop();  // Calls inherited method
    }
}
```
### **Key Points:**
- An **abstract class** cannot be instantiated.
- It may contain **abstract methods** (without a body) and **concrete methods** (with implementation).
- Subclasses must **override** all abstract methods or themselves be declared abstract.

---

## **2. Abstraction using Interfaces**
An **interface** in Java is a blueprint that contains **only abstract methods** (before Java 8) and can also include default or static methods (from Java 8 onward). Classes that implement an interface must define all of its methods.

### **Example of Interface:**
```java
interface Payment {
    void pay(); // Abstract method
}

class CreditCardPayment implements Payment {
    @Override
    public void pay() {
        System.out.println("Payment made using Credit Card");
    }
}

class PayPalPayment implements Payment {
    @Override
    public void pay() {
        System.out.println("Payment made using PayPal");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment payment1 = new CreditCardPayment();
        Payment payment2 = new PayPalPayment();
        
        payment1.pay(); // Calls CreditCardPayment's pay()
        payment2.pay(); // Calls PayPalPayment's pay()
    }
}
```
### **Key Points:**
- An **interface** contains **only abstract methods** (before Java 8) and may contain **default/static methods** (Java 8+).
- A class **implements** an interface using the `implements` keyword.
- A class can implement **multiple interfaces**.
- Interfaces provide a way to achieve **multiple inheritance** in Java.

---

## **Abstract Class vs Interface**
| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Methods | Can have both abstract and concrete methods | Only abstract methods (Java 7 and earlier); can have default/static methods (Java 8+) |
| Inheritance | Single inheritance | Multiple inheritance |
| Implementation | Subclasses extend the abstract class | Classes implement the interface |
| Access Modifiers | Can have all types of access modifiers | Methods are `public` by default |

---

## **Conclusion**
- **Abstraction** helps in designing a flexible and scalable system by hiding implementation details.
- **Abstract classes** provide a way to define some behavior while enforcing subclass implementation.
- **Interfaces** define a contract that multiple classes can follow, enabling polymorphism.
- Using abstraction in Java improves code maintainability and modularity.

---

🔗 **Related Topics:**
- [Classification](../classification)
- [Encapsulation](../encapsulation/)
- [Inheritance](../inheritance)
- [Polymorphism](../polymorphism)

---