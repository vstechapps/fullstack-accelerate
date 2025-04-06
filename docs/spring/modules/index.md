# [Spring](../) > Modules

## Overview
Spring is made up of different modules that provide specialized functionalities for various application needs. Here’s an overview of key Spring modules:

## 1. Spring Core
- The foundation of the Spring framework.
- Provides features like Dependency Injection (DI) and Bean Management.

## 2. Spring Boot
- Simplifies Spring application development.
- Provides auto-configuration and embedded servers for rapid development.

## 3. Spring Web
Spring supports development of web applications and RESTful APIs.
- **Spring MVC** – Follows the Model-View-Controller pattern.
- **Spring REST** – Simplifies REST API development.
- **Spring WebFlux** for reactive programming.

### Example of a REST Controller
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

## 4. Spring Data

Spring provides seamless integration with various data access technologies:
- Simplifies database access and ORM (Object-Relational Mapping).
- Supports technologies like JDBC, JPA, Hibernate and Mongo.
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

## 5. Spring Messaging

Spring Messaging provides integration with messaging platforms like JMS and Kafka.
- Enables integration with messaging systems like JMS, RabbitMQ, and Kafka.
- **JMS (Java Messaging Service)** – Supports asynchronous messaging in microservices.
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

## 6. Spring Security
Spring Security provides authentication, authorization, and protects applications against security threats like CSRF and XSS
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

## 7. Spring AOP (Aspect-Oriented Programming)
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

## 8. Spring Cloud
- Provides tools for building microservices and cloud-native applications.
- Includes features like service discovery, distributed tracing, and API gateways.

## 9. Spring Batch
- Handles batch processing for large datasets.
- Supports job scheduling, transaction management, and parallel processing.

Spring’s modular architecture allows developers to pick only the components they need, making it highly flexible and scalable.

---

[← Spring Architecture](../architecture) | [Spring Beans →](../beans)

---

🔗 **Related Topics:**
- [Spring Intro](../intro)
- [Spring Architecture](../architecture)
- [Spring Beans](../beans)
- [Dependency Injection](../dependency-injection)

---
