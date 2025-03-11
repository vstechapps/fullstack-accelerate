# [Java](../../) - Exceptions - Hands-on

## Learning Objectives

- Understand how to handle exceptions in Java.
- Implement try-catch-finally blocks effectively.
- Create and use custom exceptions in Java.

---

## Exercise 1: Handling Arithmetic Exceptions

### Problem Statement
A program calculates the division of two numbers. Handle the `ArithmeticException` when a division by zero occurs.

### Instructions:
1. Accept two integer inputs.
2. Perform division and handle any exceptions.
3. Display an appropriate error message if an exception occurs.

### Expected Output:
- The result of the division.
- An error message if division by zero is attempted.

---

## Exercise 2: Handling Array Index Out of Bounds

### Problem Statement
Write a program that accesses an array element using an index given by the user. Handle the `ArrayIndexOutOfBoundsException`.

### Instructions:
1. Create an array with predefined values.
2. Accept an index as input.
3. Handle the exception if the index is out of bounds.

### Expected Output:
- The value at the given index.
- An error message if the index is invalid.

---

## Exercise 3: Handling Multiple Exceptions

### Problem Statement
A program reads an integer from user input. Handle both `InputMismatchException` and `ArithmeticException`.

### Instructions:
1. Accept an integer input.
2. Perform division with a fixed number.
3. Handle exceptions appropriately.

### Expected Output:
- The division result.
- An error message if invalid input or division by zero occurs.

---

## Exercise 4: Using Finally Block

### Problem Statement
Demonstrate the use of the `finally` block in exception handling.

### Instructions:
1. Implement a try-catch block with a `finally` statement.
2. Show that the `finally` block executes regardless of exceptions.

### Expected Output:
- The result of the try block.
- Confirmation that the `finally` block is executed.

---

## Exercise 5: Creating a Custom Exception

### Problem Statement
Create a custom exception `InvalidAgeException` to handle age validation in a voting system.

### Instructions:
1. Define a custom exception class `InvalidAgeException`.
2. Implement a method that throws this exception for ages below 18.
3. Handle the exception and display a proper message.

### Expected Output:
- Confirmation if the age is valid.
- An error message if the age is invalid.

---

## Exercise 6: Throwing and Handling Custom Exceptions

### Problem Statement
Modify the previous exercise to include user input and validate multiple ages in a loop.

### Instructions:
1. Accept multiple age inputs.
2. Validate each age and throw the custom exception if it's invalid.
3. Display appropriate messages for valid and invalid ages.

### Expected Output:
- Confirmation messages for valid ages.
- Exception messages for invalid ages.

---

## Exercise 7: Nested Try-Catch for File Handling

### Problem Statement
A program reads a file and processes the content. Implement nested try-catch blocks to handle `FileNotFoundException` and `IOException` separately.

### Instructions:
1. Accept a filename as input.
2. Try to open the file and read its content.
3. Use nested try-catch blocks to handle different exceptions separately.

### Expected Output:
- File content if successful.
- Appropriate error messages for missing or unreadable files.

---

## Exercise 8: Banking System with Insufficient Funds Exception

### Problem Statement
Simulate a banking system where users can withdraw money. Implement a custom exception `InsufficientFundsException` when withdrawal exceeds the account balance.

### Instructions:
1. Create a `BankAccount` class with `name` and `balance` fields.
2. Implement `deposit` and `withdraw` methods.
3. Implement `InsufficientFundsException` to be thrown if withdrawal exceeds balance.
4. Handle the exception and display an appropriate message.

### Expected Output:
- Updated balance after withdrawal.
- Error message if withdrawal exceeds available balance.

---

## Exercise 9: Flight Booking System with Invalid Seat Exception

### Problem Statement
Develop a flight booking system that assigns seats to passengers. Implement a custom exception `InvalidSeatException` when a passenger selects an unavailable or non-existent seat.

### Instructions:
1. Create a `Flight` class with available seat numbers stored in a list.
2. Implement a `bookSeat` method that checks if the seat is available.
3. If the seat is unavailable, throw `InvalidSeatException`.
4. Handle the exception and display an appropriate message.

### Expected Output:
- Confirmation message for successful seat booking.
- Error message if the seat is invalid or already booked.

---

🔗 **Related Topics:**
- [Exception Handling](../exception-handling/)
- [Try-Catch-Finally](../try-catch-finally)
- [Custom Exceptions](../custom-exceptions)
---
