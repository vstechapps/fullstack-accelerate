# [Spring](../) > Beans

## Overview

In the Spring Framework, **beans** are the fundamental building blocks that encapsulate the application's core logic and are managed by the Spring Inversion of Control (IoC) container. The container is responsible for instantiating, configuring, and assembling these beans based on the provided configuration metadata. ([docs.spring.io](https://docs.spring.io/spring-framework/reference/core/beans/introduction.html?utm_source=chatgpt.com))

## Defining Beans

Beans can be defined using various configuration methods:

### 1. Java-Based Configuration

Java-based configuration uses the `@Configuration` and `@Bean` annotations to define beans.

**Example:**

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public MyBean myBean() {
        return new MyBean();
    }
}
```

In this setup, the `myBean` method returns an instance of `MyBean`, and the `@Bean` annotation registers it with the Spring container. ([docs.spring.io](https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html?utm_source=chatgpt.com))

### 2. Annotation-Based Configuration

Annotations provide a more concise way to define beans directly within Java classes.

- `@Component`: Marks a class as a Spring component.

**Example:**

```java
import org.springframework.stereotype.Component;

@Component
public class MyBean {
    // Class implementation
}
```

## Bean Scopes

Spring supports several bean scopes that determine the lifecycle and visibility of beans within the application context:

- **Singleton** (default): A single instance per Spring IoC container.
- **Prototype**: A new instance each time the bean is requested.
- **Request**: A single instance per HTTP request (web-aware Spring ApplicationContext).
- **Session**: A single instance per HTTP session (web-aware Spring ApplicationContext).
- **Application**: A single instance per ServletContext.

**Example:**

```java
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
public class MyPrototypeBean {
    // Class implementation
}
```

In this example, `MyPrototypeBean` will have a new instance created each time it is requested from the container.

## Bean Lifecycle

The lifecycle of a Spring bean includes several phases:

1. **Instantiation**: The container creates the bean instance.
2. **Property Population**: Dependencies are injected into the bean.
3. **Initialization**: Custom initialization methods are called.
4. **Destruction**: Custom destruction methods are called before the bean is removed from the container.

To define custom initialization and destruction methods, you can use the `@PostConstruct` and `@PreDestroy` annotations, respectively, or specify them in the `@Bean` annotation.

**Example:**

```java
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class MyBean {
    @PostConstruct
    public void init() {
        // Initialization code
    }

    @PreDestroy
    public void destroy() {
        // Cleanup code
    }
}
```

Alternatively, using Java-based configuration:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean(initMethod = "init", destroyMethod = "destroy")
    public MyBean myBean() {
        return new MyBean();
    }
}
```

In this configuration, the `init` and `destroy` methods are specified for the bean's lifecycle callbacks.

## Conclusion

Understanding and effectively managing Spring beans is crucial for developing robust and maintainable applications using the Spring Framework. By leveraging various configuration styles and scopes, developers can create flexible and efficient applications.

---

[← Spring Beans](../beans) | [Dependecny Injection →](../dependency-injection)

---



