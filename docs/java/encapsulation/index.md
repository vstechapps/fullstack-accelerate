# [Java](../) > OOP > Encapsulation 

Encapsulation is one of the four fundamental Object-Oriented Programming (OOP) concepts in Java, alongside Abstraction, Inheritance, and Polymorphism. It is the technique of wrapping data (variables) and code (methods) together as a single unit while restricting direct access to the data from outside the class.

A simple analogy for encapsulation is a **capsule** in medicine, where the active ingredients (data) are enclosed inside a protective shell (methods). This ensures that the contents are not directly accessible but can be utilized safely when needed.

## Advantages of Encapsulation
1. **Data Hiding** - It prevents unauthorized access and modification of data.
2. **Improved Maintainability** - Encapsulation makes code more modular and easier to maintain.
3. **Enhanced Flexibility** - Controlled access allows modifications without breaking dependent code.
4. **Increased Reusability** - Encapsulated classes can be reused in different parts of an application.

## Access Modifiers and Access Levels
Java provides four access modifiers to control the visibility of class members:

| Access Modifier | Class | Package | Subclass | World |
|----------------|-------|---------|----------|--------|
| **private** | ✅ | ❌ | ❌ | ❌ |
| **default (no modifier)** | ✅ | ✅ | ❌ | ❌ |
| **protected** | ✅ | ✅ | ✅ | ❌ |
| **public** | ✅ | ✅ | ✅ | ✅ |

### Order of Restriction (from highest to lowest):
1. `private` (Most restrictive)
2. Default (No modifier)
3. `protected`
4. `public` (Least restrictive)

## Example Programs
### Encapsulation with Private Variables and Getters/Setters
```java
class Person {
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        if(age > 0) {
            this.age = age;
        }
    }
    
    // toString method
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person("John", 25);
        System.out.println(p);
        
        p.setAge(30);
        System.out.println("Updated Age: " + p.getAge());
    }
}
```

### Explanation
- The `name` and `age` fields are private, ensuring data hiding.
- Getter and setter methods provide controlled access to the fields.
- The `toString()` method returns a string representation of the object.
- Just like a **capsule**, encapsulation ensures that data is protected and only accessible through safe methods.

Encapsulation enhances security, maintainability, and reusability, making it an essential concept in Java development.

---

🔗 **Related Topics:**
- [Classification](../classification/)
- [Inheritance](../inheritance)
- [Abstraction](../abstraction)
- [Polymorphism](../polymorphism)

---

