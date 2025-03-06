# [Java](../) > OOP > Classification

## Introduction

In Object-Oriented Programming (OOP), **classification** is the process of organizing complex software systems into manageable and reusable components. Classification allows developers to group objects based on their functionality, behavior, or responsibility, making the system more structured, scalable, and maintainable.

### Why Do We Need Classification in OOP?

- **Modularity**: Breaking down complex systems into smaller, self-contained units.
- **Reusability**: Utilizing existing components across different parts of an application.
- **Maintainability**: Simplifying updates and debugging by isolating changes to specific components.
- **Scalability**: Helping in expanding applications efficiently without redesigning core logic.

## Types of Classification in OOP

### 1. **Classification Based on Object Role**
Objects in a system can be classified based on their role within the architecture:

| Classification | Description |
|---------------|-------------|
| **Entity Objects** | Represent real-world entities with a unique identity, such as `Customer`, `Order`, or `Employee`. |
| **Control Objects** | Manage the flow of logic in an application, like `OrderProcessor` or `TransactionManager`. |
| **Boundary Objects** | Facilitate interaction between the system and external sources (UI, APIs), e.g., `UserInterface`, `APIGateway`. |

#### Example:
```java
class Customer {
    String name;
    int age;
    
    void display() {
        System.out.println("Customer: " + name + ", Age: " + age);
    }
}
```

### 2. **Classification by Object Responsibility**
Objects can also be classified based on their core responsibilities:

| Classification | Description |
|---------------|-------------|
| **Data Objects** | Store and manage data but do not contain complex logic, such as `UserProfile`. |
| **Service Objects** | Perform operations but do not hold state, such as `EmailService`. |
| **Factory Objects** | Responsible for creating instances of other classes, such as `CarFactory`. |

#### Example:
```java
class EmailService {
    void sendEmail(String recipient, String message) {
        System.out.println("Sending email to: " + recipient);
    }
}
```

### 3. **Classification by Object Interaction**
Objects interact with each other to form a functional system. Based on interaction, objects can be classified as:

| Classification | Description |
|---------------|-------------|
| **Singleton Objects** | Ensure only one instance exists in an application. |
| **Aggregated Objects** | Objects that form part of a larger entity (e.g., `Engine` inside `Car`). |
| **Composite Objects** | Objects made up of multiple objects that can function as a single unit. |

#### Example:
```java
class DatabaseConnection {
    private static DatabaseConnection instance;
    
    private DatabaseConnection() {}
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}
```

## Summary
| Concept | Description |
|---------|-------------|
| **Entity Objects** | Represent real-world entities with unique identities. |
| **Control Objects** | Manage workflow and system operations. |
| **Boundary Objects** | Facilitate communication between different parts of the system. |
| **Data Objects** | Store and manage application data. |
| **Service Objects** | Perform operations without maintaining state. |
| **Factory Objects** | Create instances of other objects. |
| **Singleton Objects** | Ensure only one instance of an object exists. |

## Hands-On Exercises

1. **Define a Class and Create Objects**:
   - Create a `Product` class with `name` and `price` attributes.
   - Instantiate and display product details.

2. **Classify Objects in a Shopping System**:
   - Identify `Entity`, `Control`, and `Boundary` objects in an e-commerce application.

3. **Create a Singleton Class**:
   - Implement a singleton class for managing database connections.

## Assessment
- What is **classification** in OOP, and why is it important?
- Explain the difference between **entity objects** and **service objects**.
- How does **classification** improve software design?
- Provide an example where **factory objects** are useful.

***

---

🔗 **Related Topics:**
- [Encapsulation](../encapsulation/)
- [Inheritance](../inheritance)
- [Abstraction](../abstraction)
- [Polymorphism](../polymorphism)

---
