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

```sql

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(50),
    DepartmentID INT
);

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);


INSERT INTO Employees (EmployeeID, Name, DepartmentID) VALUES
(1, 'Alice', 101),
(2, 'Bob', 102),
(3, 'Charlie', 103),
(4, 'David', 104),
(5, 'Eric', 103);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(101, 'HR'),
(102, 'IT'),
(103, 'Finance'),
(105, 'Marketing');

```

</details>

---

## 1. INNER JOIN

### Purpose:

Retrieves records that have matching values in both tables.

**Note:** `INNER JOIN` is the same as using just `JOIN`. If you write `JOIN` without specifying the type, SQL assumes it as `INNER JOIN` by default.

### Example Tables:

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

## Summary of Joins

| Join Type      | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| **INNER JOIN** | Returns only matching rows from both tables.                                           |
| **LEFT JOIN**  | Returns all rows from the left table and matching rows from the right.                 |
| **RIGHT JOIN** | Returns all rows from the right table and matching rows from the left.                 |
| **FULL JOIN**  | Returns all rows from both tables. Employees or departments with no match show `NULL`. |
| **CROSS JOIN** | Returns all possible combinations (Cartesian product).                                 |
| **SELF JOIN**  | Joins a table with itself.                                                             |

