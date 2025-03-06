# [Java](../) > Polymorphism

# Understanding Polymorphism in Java

Polymorphism is one of the four fundamental Object-Oriented Programming (OOP) concepts in Java, along with Encapsulation, Inheritance, and Abstraction. The term **Polymorphism** is derived from two Greek words: **"Poly"** meaning "many" and **"Morph"** meaning "forms." This concept allows a single method, function, or operator to take on multiple forms, enabling flexibility and maintainability in Java applications.

## **Types of Polymorphism in Java**
Java supports two types of polymorphism:
1. **Compile-time Polymorphism (Method Overloading)**
2. **Runtime Polymorphism (Method Overriding)**

---

## **1. Compile-time Polymorphism (Method Overloading)**
Method Overloading occurs when multiple methods in the same class share the same name but differ in parameters (number, type, or both). The compiler determines which method to call based on the arguments provided.

### **Example of Method Overloading:**
```java
class Calculator {
    // Method with two integer parameters
    int multiply(int a, int b) {
        return a * b;
    }

    // Overloaded method with three integer parameters
    int multiply(int a, int b, int c) {
        return a * b * c;
    }

    // Overloaded method with double parameters
    double multiply(double a, double b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.multiply(5, 10));        // Calls multiply(int, int)
        System.out.println(calc.multiply(5, 10, 2));   // Calls multiply(int, int, int)
        System.out.println(calc.multiply(5.5, 2.5));    // Calls multiply(double, double)
    }
}
```
### **Key Points:**
- Method names remain the same.
- Parameters differ in type or count.
- Overloading improves code readability and reusability.
- It is resolved at **compile-time**.

---

## **2. Runtime Polymorphism (Method Overriding)**
Method Overriding occurs when a subclass provides a specific implementation for a method already defined in its superclass. The method signature remains the same, but the behavior differs in the child class.

### **Example of Method Overriding:**
```java
class Vehicle {
    void speed() {
        System.out.println("Vehicles have different speeds");
    }
}

class Car extends Vehicle {
    @Override
    void speed() {
        System.out.println("Cars can go up to 200 km/h");
    }
}

class Bicycle extends Vehicle {
    @Override
    void speed() {
        System.out.println("Bicycles have an average speed of 20 km/h");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myVehicle1 = new Car(); // Upcasting
        myVehicle1.speed(); // Calls Car's overridden method
        
        Vehicle myVehicle2 = new Bicycle(); // Upcasting
        myVehicle2.speed(); // Calls Bicycle's overridden method
    }
}
```
### **Key Points:**
- Method signature (name, return type, parameters) must remain the same.
- The method in the superclass must be **inherited** by the subclass.
- The `@Override` annotation is used for clarity.
- Overriding enables **dynamic method dispatch**, determined at **runtime**.

---

## **Method Overloading vs Method Overriding**
| Feature | Method Overloading | Method Overriding |
|---------|-------------------|-------------------|
| Resolution Time | Compile-time | Runtime |
| Method Name | Same | Same |
| Parameters | Different | Same |
| Return Type | Can be different | Must be the same (or covariant) |
| Access Modifier | Can be changed | Cannot be more restrictive than parent class |

---

```
### **Key Points:**
- An interface defines a contract for behavior.
- Different classes implement the interface in their own way.
- Polymorphism allows treating different objects as instances of the same interface.

---

## **Conclusion**
- **Polymorphism** enhances code flexibility and maintainability.
- **Method Overloading** allows multiple methods with the same name but different parameters.
- **Method Overriding** enables subclasses to provide specific implementations of inherited methods.
- **Interfaces** enable polymorphism by defining common behaviors across multiple classes.

Polymorphism is a powerful OOP concept that improves code reusability and makes programs more scalable.

---

🔗 **Related Topics:**
- [Classification](../classification)
- [Encapsulation](../encapsulation)
- [Inheritance](../inheritance)
- [Abstraction](../abstraction)

---