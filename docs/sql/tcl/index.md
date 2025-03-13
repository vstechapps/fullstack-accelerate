# [SQL](../) > Transaction Control Language (TCL)

## Introduction
Transaction Control Language (TCL) is a subset of SQL used to manage transactions in a database. TCL ensures data consistency and integrity by controlling the execution of multiple SQL statements as a single unit of work.

### Key TCL Commands:
- **COMMIT** - Saves all changes made in the current transaction permanently.
- **ROLLBACK** - Reverts changes made in the current transaction.
- **SAVEPOINT** - Creates a temporary savepoint within a transaction to roll back to a specific point if needed.

---

## COMMIT
### Purpose:
The `COMMIT` command is used to save all changes made during the current transaction permanently in the database.

### Syntax:
```sql
COMMIT;
```

### Examples:
#### Insert and commit changes:
```sql
START TRANSACTION;
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age, Salary)
VALUES (4, 'Alice', 'Brown', 29, 55000);
COMMIT;
```

#### Update and commit changes:
```sql
START TRANSACTION;
UPDATE Employees SET Salary = 60000 WHERE EmployeeID = 4;
COMMIT;
```

### Do You Need to Use COMMIT in SQL?
#### 1. Autocommit Mode (Default: ON)
- By default, MySQL runs with **autocommit enabled**, meaning every SQL statement (`INSERT`, `UPDATE`, `DELETE`) is automatically committed unless a transaction is explicitly started.
- **If autocommit is ON** (default behavior): No need to run `COMMIT`, as MySQL commits automatically.
- **If autocommit is OFF**: You must manually commit transactions using `COMMIT`.

#### 2. Storage Engine Matters
- **InnoDB (supports transactions)**: Requires `COMMIT` if `autocommit = 0` or inside an explicit transaction (`START TRANSACTION`).
- **MyISAM (does not support transactions)**: `COMMIT` and `ROLLBACK` have no effect as changes are immediately saved.

#### Best Practice:
```sql
START TRANSACTION;
UPDATE Accounts SET balance = balance - 100 WHERE AccountID = 1;
UPDATE Accounts SET balance = balance + 100 WHERE AccountID = 2;
COMMIT;
```
This ensures **atomicity** and prevents partial updates.

---

## ROLLBACK
### Purpose:
The `ROLLBACK` command is used to undo changes made in the current transaction before committing.

### Syntax:
```sql
ROLLBACK;
```

### Examples:
#### Insert data and rollback:
```sql
START TRANSACTION;
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age, Salary)
VALUES (5, 'Eve', 'Davis', 31, 65000);
ROLLBACK;
```

#### Update data and rollback:
```sql
START TRANSACTION;
UPDATE Employees SET Salary = 70000 WHERE EmployeeID = 5;
ROLLBACK;
```

---

## SAVEPOINT
### Purpose:
The `SAVEPOINT` command is used to set a point within a transaction that can be rolled back to if needed.

### Syntax:
```sql
SAVEPOINT savepoint_name;
```

### Examples:
#### Using SAVEPOINT and ROLLBACK:
```sql
START TRANSACTION;
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age, Salary)
VALUES (6, 'Chris', 'Wilson', 33, 72000);
SAVEPOINT save1;

UPDATE Employees SET Salary = 75000 WHERE EmployeeID = 6;
ROLLBACK TO save1;
COMMIT;
```

---

## Summary

| Command | Description |
|---------|-------------|
| `COMMIT` | Saves all changes made in the current transaction. |
| `ROLLBACK` | Reverts changes made in the current transaction. |
| `SAVEPOINT` | Creates a savepoint to allow partial rollbacks. |

---

