# [Spring](../) > Introduction

## What is Spring?
Spring is a powerful, lightweight framework for building Java-based enterprise applications. It provides comprehensive infrastructure support, helping developers create scalable, maintainable, and secure applications.

## Why Learn Spring?
- **Lightweight** – Minimal overhead with a modular architecture.
- **Flexible** – Supports multiple configurations (XML, Java-based, and annotations).
- **Enterprise-Ready** – Used for web applications, microservices, and cloud-native apps.
- **Dependency Injection (DI)** – Manages object dependencies efficiently.
- **Aspect-Oriented Programming (AOP)** – Enables separation of cross-cutting concerns.

## How Spring Works
Spring provides a **container-based approach** where dependencies are managed automatically.

1. **Define Beans** – Components are defined as Spring-managed beans.
2. **Configure Dependencies** – Using XML, annotations, or Java-based configuration.
3. **Inject Dependencies** – Spring injects required dependencies automatically.
4. **Run Application** – Spring Boot makes it easy to run applications with minimal setup.

## Basic Structure of a Spring Boot Application
Spring Boot simplifies Spring development with a minimal setup. Here’s a simple example:

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringDemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringDemoApplication.class, args);
    }
}
```

### Explanation:
- `@SpringBootApplication` – Marks this class as a Spring Boot application.
- `SpringApplication.run(...)` – Boots up the Spring application.

## Key Features of Spring
Spring offers several powerful features:
1. **Inversion of Control (IoC)** – Manages object creation and dependency injection.
2. **Spring MVC** – Framework for building web applications.
3. **Spring Boot** – Simplifies Spring application development.
4. **Spring Data** – Simplifies database access.
5. **Spring Security** – Provides authentication and authorization.
6. **Spring Cloud** – Helps in building cloud-native applications.

## Spring Core Concepts
Spring is built on several core concepts:
1. **Dependency Injection (DI)** – Helps manage object dependencies efficiently.
2. **Bean Lifecycle** – Defines how beans are created, initialized, and destroyed.
3. **ApplicationContext** – Central container that manages beans.
4. **Transaction Management** – Handles database transactions seamlessly.

## Example of Dependency Injection
```java
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
class Engine {
    public void start() {
        System.out.println("Engine started!");
    }
}

@Component
class Car {
    private final Engine engine;
    
    @Autowired
    public Car(Engine engine) {
        this.engine = engine;
    }
    
    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}
```

### Explanation:
- `@Component` – Marks the class as a Spring-managed bean.
- `@Autowired` – Injects dependencies automatically.

Spring simplifies Java development by providing a comprehensive and modular framework. Learning the fundamentals of Spring will help you build scalable, enterprise-level applications efficiently.

---

[← Spring](../) | [Spring Architecture →](../architecture)

---

🔗 **Related Topics:**
- [Spring Architecture](../architecture)
- [Spring Modules](../modules)

---
