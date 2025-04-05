# Spring > Dependency Injection

In the Spring Framework, **Dependency Injection (DI)** is a design pattern that implements **Inversion of Control (IoC)**. It allows the container to manage the dependencies of beans, promoting loose coupling and enhancing testability.

---

## Defining Dependencies

Dependencies can be injected into Spring beans using different methods:

### 1. Constructor-Based Dependency Injection

This method involves injecting dependencies through a class constructor. It's the recommended approach because it enforces immutability and ensures all required dependencies are provided.

```java
import org.springframework.stereotype.Component;

@Component
public class MyService {
    private final MyRepository myRepository;

    public MyService(MyRepository myRepository) {
        this.myRepository = myRepository;
    }

    // Class implementation
}
```

### 2. Setter-Based Dependency Injection

Dependencies are injected via setter methods. Useful when dependencies are optional or need to be modified post-initialization.

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MyService {
    private MyRepository myRepository;

    @Autowired
    public void setMyRepository(MyRepository myRepository) {
        this.myRepository = myRepository;
    }

    // Class implementation
}
```

### 3. Field-Based Dependency Injection

Dependencies are injected directly into fields using `@Autowired`. While concise, this approach is discouraged due to testability and immutability concerns.

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MyService {
    @Autowired
    private MyRepository myRepository;

    // Class implementation
}
```

---

## Qualifying Dependencies

When multiple beans of the same type exist, use `@Qualifier` to specify which one to inject:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class MyService {
    private final MyRepository myRepository;

    @Autowired
    public MyService(@Qualifier("specificRepository") MyRepository myRepository) {
        this.myRepository = myRepository;
    }

    // Class implementation
}
```

---

## Best Practices

- **Prefer Constructor Injection:** Ensures required dependencies are not null and supports immutability.
- **Use `@Qualifier` for Disambiguation:** Helps resolve conflicts when multiple beans of the same type are present.
- **Avoid Field Injection:** Makes unit testing harder and limits immutability.

---

By leveraging Dependency Injection in Spring, you can develop flexible, maintainable, and testable applications with minimal configuration.

---

[← Spring Beans](../beans) | [Application Context →](../application-context)

---

🔗 **Related Topics:**
- [Spring Intro](../intro)
- [Spring Architecture](../architecture)
- [Spring Modules](../modules)
- [Spring Beans](../beans)
- [Application Context](../application-context)

---