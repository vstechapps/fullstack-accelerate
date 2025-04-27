# [Fullstack](../../) > [Java](../) > 🧵 Threads

## Introduction to Multithreading
Multithreading in Java is a powerful technique that enables concurrent execution of two or more parts of a program to maximize CPU utilization. Each of these parts is called a **thread**.

### Real-World Example of Multitasking
Imagine a chef in a restaurant:
- The chef is cooking multiple dishes simultaneously — stirring one pot while chopping vegetables and keeping an eye on the oven.
- Each task runs independently but contributes to the overall goal of preparing the meal efficiently.

In programming, **multithreading** enables similar multitasking where multiple threads perform different tasks concurrently within a single application.

## What is a Thread?
- A **thread** is a lightweight sub-process, the smallest unit of a process. 
- Java provides built-in support for multithreading through the `Thread` class and the `Runnable` interface.

## Difference Between Multiprocessing and Multithreading

| Feature            | Multiprocessing              | Multithreading                 |
|--------------------|------------------------------|-------------------------------|
| Definition          | Executes multiple processes independently. | Executes multiple threads within a single process. |
| Memory Usage        | Requires more memory as each process has its own memory space. | Uses less memory as threads share the same memory. |
| Communication       | Processes communicate using IPC (Inter-Process Communication). | Threads share data directly within the same process. |
| Context Switching    | Slower, as switching between processes is expensive. | Faster, as switching between threads is lightweight. |

## Creating Threads in Java
Java offers two primary ways to create a thread:

### 1. Extending the `Thread` Class
- Create a class that extends the `Thread` class.
- Override the `run()` method to define the thread's behavior.
- Start the thread using the `start()` method.

**Example:**
```java
package com.vvsk.fullstack.multithreading;

class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Thread running: " + i);
            try {
                Thread.sleep(500);  // Pause for 500ms
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

### 2. Implementing the `Runnable` Interface
- Create a class that implements the `Runnable` interface.
- Implement the `run()` method.
- Create a `Thread` object by passing the instance of your class.
- Call the `start()` method to begin execution.

**Example:**
```java
package com.vvsk.fullstack.multithreading;

class MyRunnable implements Runnable {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Runnable running: " + i);
            try {
                Thread.sleep(500);  // Pause for 500ms
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```

## Best Practices for Multithreading in Java
✅ Always use synchronization mechanisms like `synchronized`, `Lock`, or `Concurrent` utilities to handle shared resources.  
✅ Avoid creating too many threads unnecessarily, as it may degrade performance.  
✅ Use thread pool executors for optimal thread management.  
✅ Handle exceptions properly to ensure smooth thread execution.  

---

[← Files NIO](../files-nio) | [Thread Lifecycle →](../thread-lifecycle)

