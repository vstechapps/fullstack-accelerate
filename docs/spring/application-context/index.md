# [Spring](../) > ApplicationContext

In the Spring Framework, **ApplicationContext** is the central interface for providing configuration information to an application. It represents the Spring IoC container and is responsible for instantiating, configuring, and assembling beans.

---

## What is ApplicationContext?

`ApplicationContext` extends the `BeanFactory` interface, adding more enterprise-specific functionality:

- Event propagation
- Declarative mechanisms to create a bean
- Internationalization (i18n) support
- Integration with Spring AOP

It reads the configuration metadata (either XML or annotations) and manages the complete lifecycle of beans.

---

## Types of ApplicationContext

Spring provides multiple implementations of `ApplicationContext` depending on the type of application:

| Context Class | Description |
|---------------|-------------|
| `ClassPathXmlApplicationContext` | Loads context definition from XML file in the classpath |
| `FileSystemXmlApplicationContext` | Loads context from an XML file in the filesystem |
| `AnnotationConfigApplicationContext` | Used for Java-based configuration using annotations |
| `WebApplicationContext` | Specialized version for web applications (used in Spring MVC) |

---

## Example: XML-Based Configuration

```java
ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
MyService myService = context.getBean(MyService.class);
```

In this example, Spring reads `beans.xml` from the classpath, initializes all configured beans, and allows access to them via `getBean()`.

---

## Example: Annotation-Based Configuration

```java
@Configuration
@ComponentScan(basePackages = "com.example.app")
public class AppConfig {
}

ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
MyService myService = context.getBean(MyService.class);
```

Here, Spring scans the specified package for components annotated with `@Component`, `@Service`, `@Repository`, or `@Controller`.

---

## Bean Lifecycle in ApplicationContext

1. **Instantiation:** Spring creates the bean instance.
2. **Populate Properties:** DI is applied using constructor/setters/fields.
3. **BeanNameAware / ApplicationContextAware:** Optional callbacks.
4. **InitializingBean / @PostConstruct:** Initialization hooks.
5. **Ready for Use:** Bean is available to the application.
6. **DisposableBean / @PreDestroy:** Clean-up phase during shutdown.

---

## Advantages of ApplicationContext

- Manages complete bean lifecycle and dependencies
- Supports internationalization, events, and resource loading
- Encourages loose coupling via configuration
- Works seamlessly with annotations and Java-based config

---

The `ApplicationContext` is at the heart of Spring's IoC container. It empowers developers to build scalable and maintainable applications with a clean separation of configuration and business logic.

---

[← Dependecny Injection](../dependency-injection) | [ Spring Boot →](../boot)

---

🔗 **Related Topics:**
- [Spring Architecture](../architecture)
- [Spring Beans](../beans)
- [Dependency Injection](../dependency-injection)
- [Spring Boot](../boot)

---