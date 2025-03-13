# [SQL](../) > JOINS

## Introduction

A **JOIN** in SQL is used to combine rows from two or more tables based on a related column between them. Joins help retrieve meaningful data that is spread across multiple tables.

### **Types of Joins:**

1. **INNER JOIN** – Returns only matching rows.
2. **LEFT JOIN** – Returns all rows from the left table and matching rows from the right.
3. **RIGHT JOIN** – Returns all rows from the right table and matching rows from the left.
4. **FULL JOIN** – Returns all rows from both tables.
5. **CROSS JOIN** – Returns the Cartesian product of both tables.
6. **SELF JOIN** – Joins a table to itself.

<details>

<summary><strong>Setup Demo Data </strong> (Click to expand)</summary>
<code>
<pre>
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(50),
    DepartmentID INT
);
</pre>
<pre>
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);
</pre>
<pre>
INSERT INTO Employees (EmployeeID, Name, DepartmentID) VALUES
(1, 'Alice', 101),
(2, 'Bob', 102),
(3, 'Charlie', 103),
(4, 'David', 104),
(5, 'Eric', 103);
</pre>
<pre>
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(101, 'HR'),
(102, 'IT'),
(103, 'Finance'),
(105, 'Marketing');
</pre>
</code>
</details>

---

## 1. INNER JOIN

### Purpose:

Retrieves records that have matching values in both tables.

**Note:** `INNER JOIN` is the same as using just `JOIN`. If you write `JOIN` without specifying the type, SQL assumes it as `INNER JOIN` by default.

#### Employees Table:

| EmployeeID | Name    | DepartmentID |
| ---------- | ------- | ------------ |
| 1          | Alice   | 101          |
| 2          | Bob     | 102          |
| 3          | Charlie | 103          |
| 4          | David   | 104          |
| 5          | Eric    | 103          |

#### Departments Table:

| DepartmentID | DepartmentName |
| ------------ | -------------- |
| 101          | HR             |
| 102          | IT             |
| 103          | Finance        |
| 105          | Marketing      |

### SQL Query:

```sql
SELECT Employees.Name, Departments.DepartmentName 
FROM Employees 
INNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
```

### Output:

| Name    | DepartmentName |
| ------- | -------------- |
| Alice   | HR             |
| Bob     | IT             |
| Charlie | Finance        |
| Eric    | Finance        |

**Note:** `INNER JOIN` is the same as using just `JOIN`. If you write `JOIN` without specifying the type, SQL assumes it as `INNER JOIN` by default.

---

## 2. LEFT JOIN

### Purpose:

Retrieves **all rows from the left table** and matching rows from the right table. If no match is found, NULL is returned.

### SQL Query:

```sql
SELECT Employees.Name, Departments.DepartmentName 
FROM Employees 
LEFT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
```

### Output:

| Name    | DepartmentName |
| ------- | -------------- |
| Alice   | HR             |
| Bob     | IT             |
| Charlie | Finance        |
| Eric    | Finance        |
| David   | NULL           |

**David has no matching department, so NULL is returned.**

---

## 3. RIGHT JOIN

### Purpose:

Retrieves **all rows from the right table** and matching rows from the left table.

### SQL Query:

```sql
SELECT Employees.Name, Departments.DepartmentName 
FROM Employees 
RIGHT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
```

### Output:

| Name    | DepartmentName |
| ------- | -------------- |
| Alice   | HR             |
| Bob     | IT             |
| Charlie | Finance        |
| Eric    | Finance        |
| NULL    | Marketing      |

**Marketing is not assigned to any employee, so NULL is returned.**

---

## 4. FULL JOIN

### Purpose:

Retrieves **all rows from both tables**, filling unmatched rows with NULL.

### SQL Query:

```sql
SELECT Employees.Name, Departments.DepartmentName 
FROM Employees 
FULL JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
```

### Output:

| Name    | DepartmentName |
| ------- | -------------- |
| Alice   | HR             |
| Bob     | IT             |
| Charlie | Finance        |
| Eric    | Finance        |
| David   | NULL           |
| NULL    | Marketing      |

**Explanation:**

- Employees **without a matching department** (David) show `NULL` for `DepartmentName`.
- Departments **without a matching employee** (Marketing) show `NULL` for `Name`.

---

## 5. CROSS JOIN

### Purpose:

Returns the **Cartesian product** of both tables (every row from table A joins with every row from table B).

### SQL Query:

```sql
SELECT Employees.Name, Departments.DepartmentName 
FROM Employees 
CROSS JOIN Departments;
```

### Output:

| Name    | DepartmentName |
| ------- | -------------- |
| Alice   | HR             |
| Alice   | IT             |
| Alice   | Finance        |
| Alice   | Marketing      |
| Bob     | HR             |
| Bob     | IT             |
| Bob     | Finance        |
| Bob     | Marketing      |
| Charlie | HR             |
| Charlie | IT             |
| Charlie | Finance        |
| Charlie | Marketing      |
| Eric    | HR             |
| Eric    | IT             |
| Eric    | Finance        |
| Eric    | Marketing      |
| David   | HR             |
| David   | IT             |
| David   | Finance        |
| David   | Marketing      |

**Explanation:**

- Each employee is paired with every department, resulting in a Cartesian product.

---

## 6. SELF JOIN

### Purpose:

Joins a table with itself. Used to compare rows within the same table.

### Example:

Find employees who report to the same manager.

#### Employees Table:

| EmployeeID | Name    | ManagerID |
| ---------- | ------- | --------- |
| 1          | Alice   | 3         |
| 2          | Bob     | 3         |
| 3          | Charlie | NULL      |

### SQL Query:

```sql
SELECT A.Name AS Employee, B.Name AS Manager
FROM Employees A
JOIN Employees B ON A.ManagerID = B.EmployeeID;
```

### Output:

| Employee | Manager |
| -------- | ------- |
| Alice    | Charlie |
| Bob      | Charlie |

---

## INNER JOIN with Multiple Tables

An **INNER JOIN** can be used to combine data from multiple tables by matching related columns. This allows retrieving meaningful information spread across multiple tables.

### Example Scenario: Orders in an E-Commerce System
We have three tables:
1. **Customers** - Stores customer details.
2. **Orders** - Stores order details.
3. **Products** - Stores product details.

### Customers Table:

| CustomerID | Name    | City     |
|------------|--------|----------|
| 1          | Alice  | New York |
| 2          | Bob    | London   |
| 3          | Charlie| Sydney   |

### Orders Table:

| OrderID | CustomerID | ProductID | OrderDate  |
|---------|-----------|-----------|------------|
| 101     | 1         | 1001      | 2024-03-01 |
| 102     | 2         | 1002      | 2024-03-05 |
| 103     | 3         | 1003      | 2024-03-08 |

### Products Table:

| ProductID | ProductName  | Price  |
|-----------|-------------|--------|
| 1001      | Laptop      | 1200   |
| 1002      | Phone       | 800    |
| 1003      | Tablet      | 600    |

## SQL Query: INNER JOIN with Multiple Tables
To fetch order details along with customer and product information, we use **INNER JOIN** on multiple tables:

```sql
SELECT Customers.Name AS CustomerName, Products.ProductName, Orders.OrderDate, Products.Price
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
INNER JOIN Products ON Orders.ProductID = Products.ProductID;
```

### Output:

| CustomerName | ProductName | OrderDate  | Price |
|-------------|-------------|------------|-------|
| Alice       | Laptop      | 2024-03-01 | 1200  |
| Bob         | Phone       | 2024-03-05 | 800   |
| Charlie     | Tablet      | 2024-03-08 | 600   |

## Explanation:
- The **Orders** table links **Customers** and **Products**.
- `INNER JOIN Customers` ensures only orders with valid customers are included.
- `INNER JOIN Products` ensures only orders with valid products are included.
- The result shows **who ordered what product and when**.


## Summary of Joins

| Join Type      | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| **INNER JOIN** | Returns only matching rows from both tables.                                           |
| **LEFT JOIN**  | Returns all rows from the left table and matching rows from the right.                 |
| **RIGHT JOIN** | Returns all rows from the right table and matching rows from the left.                 |
| **FULL JOIN**  | Returns all rows from both tables. Employees or departments with no match show `NULL`. |
| **CROSS JOIN** | Returns all possible combinations (Cartesian product).                                 |
| **SELF JOIN**  | Joins a table with itself.                                                             |

---

<b>Next Topic:</b> [Sub Query →](../subquery/)