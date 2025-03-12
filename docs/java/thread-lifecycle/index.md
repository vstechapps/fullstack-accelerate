# [Java](../) > Thread Lifecycle

## Introduction to Thread Lifecycle
In Java, a thread goes through several stages during its execution. Understanding these stages is crucial for effective thread management.

## Thread Lifecycle Stages
Java threads follow this lifecycle:

1. **New (Created)**
2. **Runnable**
3. **Blocked/Waiting/Timed Waiting**
4. **Terminated**

### 1. New (Created)
- A thread is in the **New** state when it is created but hasn't started yet.
- Occurs when `Thread t = new Thread();` is called.

### 2. Runnable
- The thread moves to the **Runnable** state after calling `start()`.
- In this state, the thread is ready to run but waits for CPU time.

### 3. Blocked/Waiting/Timed Waiting
- **Blocked:** The thread is waiting for a monitor lock to enter a synchronized block.
- **Waiting:** The thread is waiting indefinitely until another thread signals.
- **Timed Waiting:** The thread is waiting for a specific period (e.g., `sleep()` or `join()` with a timeout).

### 4. Terminated
- A thread is in the **Terminated** state when it completes its execution or is stopped using `stop()`.

## Example: Demonstrating Thread Lifecycle
```java
package com.vvsk.fullstack.threads;

class LifecycleThread extends Thread {
    public void run() {
        System.out.println("Thread is in RUNNABLE state.");

        try {
            Thread.sleep(2000); // Moves to TIMED WAITING
            System.out.println("Thread is in TIMED WAITING state.");
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted.");
        }

        synchronized(this) {
            System.out.println("Thread is in BLOCKED state.");
        }

        System.out.println("Thread is TERMINATED.");
    }
}

public class ThreadLifecycleExample {
    public static void main(String[] args) {
        LifecycleThread thread = new LifecycleThread();
        System.out.println("Thread is in NEW state.");

        thread.start(); // Thread moves to RUNNABLE

        try {
            thread.join(); // Ensures the thread completes before proceeding
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted.");
        }

        System.out.println("Main thread finished.");
    }
}
```

## Output:
```
Thread is in NEW state.
Thread is in RUNNABLE state.
Thread is in TIMED WAITING state.
Thread is in BLOCKED state.
Thread is TERMINATED.
Main thread finished.
```

## Using `synchronized` Keyword
The `synchronized` keyword ensures that only one thread can access a synchronized method or block at a time. This prevents race conditions and ensures data consistency.

### Example: Demonstrating `synchronized`
```java
package com.vvsk.fullstack.threads;

class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizedExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("Final Count: " + counter.getCount());
    }
}
```

## Output:
```
Final Count: 2000
```

## Best Practices for Managing Thread Lifecycle
✅ Use `join()` carefully to avoid unexpected delays.  
✅ Avoid calling `stop()`; prefer `interrupt()` for safely stopping threads.  
✅ Minimize `sleep()` usage unless essential, and use synchronization mechanisms for thread control.  
✅ Use thread pool executors for optimal thread management instead of manual thread creation.  

---

[← Multithreading](../threads) | [Virtual Threads →](../virtual-threads)

