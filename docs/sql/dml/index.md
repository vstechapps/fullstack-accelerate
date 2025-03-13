# [SQL](../) > Data Manipulation Language (DML)

## Introduction
Data Manipulation Language (DML) is a subset of SQL used to insert, update, delete, and retrieve data from a database. Unlike DDL, which defines the structure, DML operates on the data within the tables.

### Key DML Commands:
- **SELECT** - Retrieves data from tables.
- **INSERT** - Adds new records to a table.
- **UPDATE** - Modifies existing records in a table.
- **DELETE** - Removes records from a table.

---

## 1. SELECT Command
### Purpose:
The `SELECT` command is used to retrieve data from one or more tables.

### Syntax:
```sql
SELECT column1, column2 FROM table_name WHERE condition;
```

### Examples:
#### Retrieve all columns from a table:
```sql
SELECT * FROM Employees;
```

#### Retrieve specific columns:
```sql
SELECT FirstName, LastName FROM Employees;
```

#### Using WHERE clause:
```sql
SELECT * FROM Employees WHERE Age > 30;
```

---

## 2. INSERT Command
### Purpose:
The `INSERT` command is used to add new records to a table.

### Syntax:
```sql
INSERT INTO table_name (column1, column2) VALUES (value1, value2);
```

### Examples:
#### Insert a single record:
```sql
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age, Salary)
VALUES (1, 'John', 'Doe', 30, 50000);
```

#### Insert multiple records:
```sql
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age, Salary)
VALUES
(2, 'Jane', 'Smith', 28, 60000),
(3, 'Mark', 'Taylor', 35, 70000);
```

---

## 3. UPDATE Command
### Purpose:
The `UPDATE` command modifies existing records in a table.

### Syntax:
```sql
UPDATE table_name SET column1 = value1 WHERE condition;
```

### Examples:
#### Update a single column:
```sql
UPDATE Employees SET Salary = 75000 WHERE EmployeeID = 3;
```

#### Update multiple columns:
```sql
UPDATE Employees SET Salary = 80000, Age = 36 WHERE EmployeeID = 3;
```

---

## 4. DELETE Command
### Purpose:
The `DELETE` command removes records from a table.

### Syntax:
```sql
DELETE FROM table_name WHERE condition;
```

### Examples:
#### Delete a specific record:
```sql
DELETE FROM Employees WHERE EmployeeID = 1;
```

#### Delete all records from a table (use with caution):
```sql
DELETE FROM Employees;
```

---

## Summary

| Command | Description |
|---------|-------------|
| `SELECT` | Retrieves data from a table. |
| `INSERT` | Adds new records to a table. |
| `UPDATE` | Modifies existing records in a table. |
| `DELETE` | Removes records from a table. |

---