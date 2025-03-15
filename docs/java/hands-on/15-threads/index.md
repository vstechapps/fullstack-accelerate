# [Java](../../) - Multithreading - Hands-on

## Learning Objectives

- Understand how to create and manage threads in Java.
- Implement different thread states and synchronization techniques.
- Apply multithreading to real-world scenarios.

---

## Exercise 1: Creating and Starting a Thread

### Problem Statement
Write a program that creates and starts a thread by extending the `Thread` class.

### Instructions:
1. Define a class that extends `Thread`.
2. Override the `run()` method to print a message.
3. Create an instance of the class and start the thread using `start()`.

### Expected Output:
- The thread should print a message indicating it is running.

---

## Exercise 2: Implementing Runnable Interface

### Problem Statement
Create and start a thread using the `Runnable` interface.

### Instructions:
1. Define a class that implements `Runnable`.
2. Implement the `run()` method to display a message.
3. Create a `Thread` object and pass the class instance to it.
4. Start the thread.

### Expected Output:
- The thread should print a message indicating it is running.

---

## Exercise 3: Thread Synchronization

### Problem Statement
Demonstrate thread synchronization using the `synchronized` keyword.

### Instructions:
1. Create a class with a synchronized method.
2. Start multiple threads accessing the method.
3. Observe how synchronization prevents race conditions.

### Expected Output:
- A well-ordered sequence of method execution without interference.

---

## Exercise 4: Thread Sleep and Join

### Problem Statement
Use `Thread.sleep()` and `join()` to control thread execution timing.

### Instructions:
1. Create a thread that prints messages with delays using `sleep()`.
2. Start multiple threads and use `join()` to wait for one thread to finish before others continue.

### Expected Output:
- Delayed messages printed sequentially.

---

## Exercise 5: Thread States

### Problem Statement
Simulate different thread states: `NEW`, `RUNNABLE`, `BLOCKED`, `WAITING`, `TIMED_WAITING`, and `TERMINATED`.

### Instructions:
1. Create a thread and print its state at various execution points.
2. Use `sleep()`, `wait()`, and `join()` to transition through different states.

### Expected Output:
- Console output showing the thread transitioning through different states.

---

## Exercise 6: Copy Files Using Threads

### Problem Statement
Write a program that copies files from one directory to another using multiple threads.

### Instructions:
1. Accept source and destination directory paths as input.
2. List all files in the source directory.
3. Create multiple threads to copy files concurrently.

### Expected Output:
- Files copied efficiently using multiple threads.

---

🔗 **Related Topics:**
- [Multithreading](../threads)
- [Thread Lifecycle](../thread-lifecycle)
- [Virtual Threads](../virtual-threads)

---