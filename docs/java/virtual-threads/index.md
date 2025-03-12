# [Java](../) > Virtual Threads

## Introduction to Virtual Threads
Virtual threads are lightweight threads introduced in Java to simplify concurrent programming. They are designed to handle thousands or even millions of concurrent tasks efficiently without consuming excessive system resources.

## Difference Between Platform Threads and Virtual Threads

| Feature            | Platform Threads            | Virtual Threads               |
|--------------------|-----------------------------|-------------------------------|
| **Definition**      | Managed by the OS and mapped to system threads. | Lightweight user-mode threads managed by the JVM. |
| **Resource Usage**  | Requires significant memory and CPU resources for each thread. | Consumes minimal resources, enabling large-scale concurrency. |
| **Blocking Behavior**| Blocking operations block the entire thread. | Blocking operations only block the virtual thread, not the carrier thread. |
| **Performance**      | Limited scalability due to thread overhead. | Highly scalable with low overhead. |

## Creating Virtual Threads in Java
Java provides multiple ways to create virtual threads for concurrency tasks.

### 1. Using `Thread.ofVirtual().start()`
This method directly creates and starts a virtual thread.

**Example:**
```java
package com.vvsk.fullstack.virtualthreads;

public class VirtualThreadExample1 {
    public static void main(String[] args) {
        Thread thread = Thread.ofVirtual().start(() -> {
            System.out.println("Virtual thread running: " + Thread.currentThread());
        });

        try {
            thread.join();
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted.");
        }
    }
}
```

### 2. Using `Thread.Builder`
This method allows flexible configuration of virtual threads before starting them.

**Example:**
```java
package com.vvsk.fullstack.virtualthreads;

public class VirtualThreadExample3 {
    public static void main(String[] args) throws InterruptedException {
        Thread.Builder builder = Thread.ofVirtual().name("vThread-");
        Thread thread1 = builder.start(() -> System.out.println("Thread 1: " + Thread.currentThread().getName()));
        Thread thread2 = builder.start(() -> System.out.println("Thread 2: " + Thread.currentThread().getName()));

        thread1.join();
        thread2.join();
    }
}
```

## Best Practices for Using Virtual Threads
✅ Use virtual threads for I/O-bound tasks rather than CPU-intensive operations.  
✅ Prefer `ExecutorService` for efficiently managing large numbers of virtual threads.  
✅ Avoid excessive synchronization as virtual threads rely on efficient concurrency.  
✅ Test performance with virtual threads when scaling concurrent workloads to assess efficiency gains.  

---

[← Thread Lifecycle](../thread-lifecycle) | [Advanced Concurrency →](../advanced-concurrency)

