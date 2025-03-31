# [Spring](../) > Architecture

## Overview
Spring follows a layered architecture, making it flexible and modular. It provides different modules for various functionalities, such as dependency injection, web applications, security, and data access.

## Key Layers
Spring is structured into multiple layers:

| Layer | Description |
|--------|-------------|
| **Spring Core** | Manages dependency injection and bean lifecycle. |
| **Spring Web** | Facilitates web applications and REST APIs. |
| **Spring Data** | Supports database operations and ORM. |
| **Spring Messaging** | Provides integration with messaging systems like JMS and Kafka. |
| **Spring Security** | Provides authentication and authorization. |
| **Spring AOP (Aspect-Oriented Programming)** | Handles cross-cutting concerns like logging and security. |

## Spring Core 

Spring Core is the heart of the Spring Framework. It provides key functionalities such as bean management and dependency injection.

![Spring Core Architecture](./spring-core.png)

### 1. BeanFactory
- The simplest Spring container that creates and manages beans.
- Uses an XML configuration or Java-based configuration to define beans.

### 2. ApplicationContext
- An enhanced version of BeanFactory with additional features.
- Supports event handling, internationalization, and AOP.
- Common implementations:
  - `ClassPathXmlApplicationContext`
  - `AnnotationConfigApplicationContext`

## 3. Spring Beans
- The objects that Spring manages in its container.
- Defined using `@Component` and `@Bean` annotations.
- Example:
  ```java
  @Component
  public class MyBean {
      public void show() {
          System.out.println("Hello, Spring Bean!");
      }
  }
  ```

## 4. Dependency Injection (DI)
- A way for Spring to provide required dependencies automatically.
- Types:
  - **Constructor Injection**
  - **Field Injection** (`@Autowired` annotation)

## 5. Spring Expression Language (SpEL)
- Used to retrieve values dynamically within Spring.
- Example:
  ```java
  @Value("#{systemProperties['user.name']}")
  private String userName;
  ```

## 6. Event Handling
- Enables different parts of an application to communicate.
- Example:
  ```java
  public class MyEvent extends ApplicationEvent {
      public MyEvent(Object source) {
          super(source);
      }
  }
  ```

## 7. Resource Management
- Simplifies access to files and resources.
- Example:
  ```java
  Resource resource = new ClassPathResource("config.properties");
  ```

## 2. Spring Web
Spring Web provides modules for developing web applications and RESTful APIs.
- **Spring MVC** – Follows the Model-View-Controller pattern.
- **Spring REST** – Simplifies REST API development.

### Example of a REST Controller in Spring Boot
```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Spring!";
    }
}
```

## 3. Spring Data
Spring provides seamless integration with various data access technologies:
- **JDBC** – Simplifies database connectivity.
- **Hibernate/JPA** – Supports ORM (Object Relational Mapping).
- **Transaction Management** – Ensures data consistency.

### Example of Spring JDBC
```java
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    private final JdbcTemplate jdbcTemplate;
    
    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    public void saveUser(String name) {
        jdbcTemplate.update("INSERT INTO users(name) VALUES (?)", name);
    }
}
```

## 4. Spring Messaging
Spring Messaging provides integration with messaging platforms like JMS and Kafka.
- **JMS (Java Messaging Service)** – Supports asynchronous messaging.
- **Kafka Integration** – Facilitates event-driven microservices.

### Example of Spring Kafka
```java
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {
    @KafkaListener(topics = "test-topic", groupId = "group_id")
    public void consume(String message) {
        System.out.println("Received message: " + message);
    }
}
```

## 5. Spring Security
Spring Security provides authentication, authorization, and protection against common vulnerabilities.
- **Authentication** – Verifies user identity.
- **Authorization** – Controls access to resources.
- **CSRF Protection** – Prevents cross-site request forgery attacks.

### Example of Spring Security Configuration
```java
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .anyRequest().authenticated()
            .and().httpBasic();
    }
}
```

## 6. Spring AOP (Aspect-Oriented Programming)
Spring AOP helps separate cross-cutting concerns from business logic.
- **Example:** Logging, security, and transaction management.
- **Key Concepts:**
  - **Aspect** – The functionality applied across multiple objects (e.g., logging aspect).
  - **Advice** – The action taken (e.g., before, after, around advice).
  - **Pointcut** – Defines where an aspect should be applied.

### Example of AOP in Spring
```java
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logBeforeMethod() {
        System.out.println("Logging before method execution");
    }
}
```

## Conclusion
Spring’s layered architecture makes it flexible, modular, and easy to use for various application types, from monolithic enterprise systems to cloud-native microservices.

---

[← Spring Introduction](../introduction) | [Spring Core →](../spring-core)

---

🔗 **Related Topics:**
- [Spring Core](../spring-core)
- [Spring Boot](../boot)
- [Spring MVC](../mvc)
- [Spring Security](../security)
- [Spring Cloud](../cloud)

---
