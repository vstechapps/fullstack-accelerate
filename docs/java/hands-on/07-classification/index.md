# [Java](../../) - OOP - Classification

### Learning Objectives:

- Implement Object Classification in Java, Define properties and methods
- Create object instances using Java constructors

---

### Task 1: Object Classification and Properties/Methods
#### Objective:
Create a class representing a real-world entity with properties and methods.

#### Instructions:
1. Define a class representing a real-world object with properties and methods.
2. Implement a `displayInfo()` method that prints object details.
3. Create an instance in `main()` and call `displayInfo()`.

#### Example 1: Vehicle
```java
class Vehicle {
    String brand;
    int year;
    double price;

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
        System.out.println("Price: " + price);
    }
}

public class VehicleExample {
    public static void main(String[] args) {
        Vehicle car = new Vehicle();
        car.brand = "Toyota";
        car.year = 2020;
        car.price = 25000;
        car.displayInfo();
    }
}
```

#### Example 2: Book
```java
class Book {
    String title;
    String author;
    int pages;

    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
    }
}

public class BookExample {
    public static void main(String[] args) {
        Book novel = new Book();
        novel.title = "1984";
        novel.author = "George Orwell";
        novel.pages = 328;
        novel.displayInfo();
    }
}
```

#### Example 3: Laptop
```java
class Laptop {
    String brand;
    int ram;
    double price;

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("RAM: " + ram + "GB");
        System.out.println("Price: " + price);
    }
}

public class LaptopExample {
    public static void main(String[] args) {
        Laptop dell = new Laptop();
        dell.brand = "Dell";
        dell.ram = 16;
        dell.price = 1200;
        dell.displayInfo();
    }
}
```

---

### Task 2: Create Object Instances using Constructors
#### Objective:
Enhance the classes by adding constructors.

#### Instructions:
1. Add a parameterized constructor to initialize object properties.
2. Modify `main()` to use the constructor.

#### Example 1: Vehicle
```java
class Vehicle {
    String brand;
    int year;
    double price;

    Vehicle(String brand, int year, double price) {
        this.brand = brand;
        this.year = year;
        this.price = price;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
        System.out.println("Price: " + price);
    }
}

public class VehicleExample {
    public static void main(String[] args) {
        Vehicle car = new Vehicle("Honda", 2021, 28000);
        car.displayInfo();
    }
}
```

#### Example 2:
```java
class Book {
    String title;
    String author;
    int pages;

    Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
    }
}

public class BookExample {
    public static void main(String[] args) {
        Book novel = new Book("The Hobbit", "J.R.R. Tolkien", 310);
        novel.displayInfo();
    }
}
```

#### Example 3: Laptop
```java
class Laptop {
    String brand;
    int ram;
    double price;

    Laptop(String brand, int ram, double price) {
        this.brand = brand;
        this.ram = ram;
        this.price = price;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("RAM: " + ram + "GB");
        System.out.println("Price: " + price);
    }
}

public class LaptopExample {
    public static void main(String[] args) {
        Laptop dell = new Laptop("Dell", 16, 1200);
        dell.displayInfo();
    }
}
```

#### Example 4: Mobile Example
```java
class Mobile {
    String model;
    int batteryLife;

    Mobile(String model, int batteryLife) {
        this.model = model;
        this.batteryLife = batteryLife;
    }

    void displayInfo() {
        System.out.println("Model: " + model);
        System.out.println("Battery Life: " + batteryLife + " hours");
    }
}

public class MobileExample {
    public static void main(String[] args) {
        Mobile phone = new Mobile("Samsung S21", 24);
        phone.displayInfo();
    }
}
```

#### Example 5: TV Example
```java
class Television {
    String brand;
    int screenSize;

    Television(String brand, int screenSize) {
        this.brand = brand;
        this.screenSize = screenSize;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Screen Size: " + screenSize + " inches");
    }
}

public class TelevisionExample {
    public static void main(String[] args) {
        Television tv = new Television("Sony", 55);
        tv.displayInfo();
    }
}
```
