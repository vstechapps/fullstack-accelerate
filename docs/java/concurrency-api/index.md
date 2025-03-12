# [Java](../) > Concurrency API

## Introduction to Java Concurrency API
The Java Concurrency API provides powerful tools to manage multiple threads efficiently, ensuring thread safety, synchronization, and improved performance. The API is part of the `java.util.concurrent` package.

## Key Components of the Concurrency API
The Concurrency API introduces several key classes and interfaces to simplify multithreading tasks:

| Component            | Description |
|----------------------|--------------|
| `Executor`            | Provides thread pool management to execute tasks efficiently. |
| `ExecutorService`     | Extends `Executor` with lifecycle methods like `shutdown()` and `awaitTermination()`. |
| `Callable`            | A task that returns a result and can throw exceptions. |
| `Future`              | Represents the result of an asynchronous computation. |
| `ScheduledExecutorService` | Manages scheduled tasks similar to cron jobs. |
| `CountDownLatch`      | A synchronization aid for blocking threads until a set of operations complete. |
| `CyclicBarrier`       | A synchronization barrier that allows multiple threads to wait for each other. |
| `Semaphore`           | Controls access to shared resources by limiting thread count. |

## Example: Using `ExecutorService` for Thread Management
The `ExecutorService` is a key component of the Concurrency API that helps manage thread pools effectively.

**Example:**
```java
package com.vvsk.fullstack.concurrency;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Task implements Runnable {
    private final int taskId;

    public Task(int taskId) {
        this.taskId = taskId;
    }

    public void run() {
        System.out.println("Task " + taskId + " is running on thread: " + Thread.currentThread().getName());
        try {
            Thread.sleep(1000); // Simulate work
        } catch (InterruptedException e) {
            System.out.println("Task " + taskId + " interrupted.");
        }
    }
}

public class ExecutorServiceExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        for (int i = 1; i <= 5; i++) {
            executor.execute(new Task(i));
        }
        executor.shutdown(); // Gracefully shut down the executor
    }
}
```

## Example: Using `Callable` and `Future` for Results
The `Callable` interface is ideal when you need a result from your thread's execution.

**Example:**
```java
package com.vvsk.fullstack.concurrency;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

class CalculationTask implements Callable<Integer> {
    private final int number;

    public CalculationTask(int number) {
        this.number = number;
    }

    public Integer call() throws Exception {
        return number * number;
    }
}

public class CallableExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<Integer> result = executor.submit(new CalculationTask(5));

        System.out.println("Calculated Result: " + result.get());
        executor.shutdown();
    }
}
```

## Example: Using `CountDownLatch` for Synchronization
A `CountDownLatch` is useful when you need multiple threads to finish before proceeding further.

**Example:**
```java
package com.vvsk.fullstack.concurrency;

import java.util.concurrent.CountDownLatch;

class Worker extends Thread {
    private final CountDownLatch latch;

    public Worker(CountDownLatch latch) {
        this.latch = latch;
    }

    public void run() {
        System.out.println(Thread.currentThread().getName() + " finished task");
        latch.countDown();
    }
}

public class CountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        CountDownLatch latch = new CountDownLatch(3);
        new Worker(latch).start();
        new Worker(latch).start();
        new Worker(latch).start();

        latch.await(); // Wait for all workers to finish
        System.out.println("All tasks completed.");
    }
}
```

## Best Practices for Using the Concurrency API
✅ Use thread pools (`ExecutorService`) instead of manually creating threads for improved performance.  
✅ Use `Future` for efficient task result retrieval without blocking the main thread unnecessarily.  
✅ Apply synchronization utilities like `CountDownLatch` or `CyclicBarrier` to manage complex dependencies.  
✅ Always ensure `ExecutorService` instances are properly shut down using `shutdown()` to release resources.  

---

[← Multithreading](../threads) | [Virtual Threads →](../virtual-threads)

