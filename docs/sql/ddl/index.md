# [SQL](../) > Data Definition Language (DDL)

## Introduction
Data Definition Language (DDL) is a subset of SQL used to define and manage database structures. DDL commands do not manipulate data but instead define the schema of the database.

### Key DDL Commands:
- **CREATE** - Used to create a new database object (table, user, database, etc.).
- **ALTER** - Used to modify an existing database object.
- **DROP** - Used to delete a database object.

---

## CREATE
### Purpose:
The `CREATE` command is used to define new tables, databases, users, and other database objects.

### Syntax:
```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
);
```

### Example:
```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    Salary DECIMAL(10,2)
);
```

#### Creating a Database:
```sql
CREATE DATABASE CompanyDB;
```

#### Creating a User:
```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
```

---

## ALTER
### Purpose:
The `ALTER` command is used to modify the structure of an existing database object.

### Syntax:
```sql
ALTER TABLE table_name
ADD COLUMN column_name datatype;
```

### Example:
#### Adding a new column:
```sql
ALTER TABLE Employees
ADD COLUMN Department VARCHAR(50);
```

#### Modifying a column:
```sql
ALTER TABLE Employees
MODIFY COLUMN Age SMALLINT;
```

#### Dropping a column:
```sql
ALTER TABLE Employees
DROP COLUMN Salary;
```

---

## DROP
### Purpose:
The `DROP` command is used to delete database objects permanently.

### Syntax:
```sql
DROP TABLE table_name;
```

### Example:
#### Dropping a table:
```sql
DROP TABLE Employees;
```

#### Dropping a database:
```sql
DROP DATABASE CompanyDB;
```

#### Dropping a user:
```sql
DROP USER 'newuser'@'localhost';
```

---

## Summary

| Command | Description |
|---------|-------------|
| `CREATE` | Creates a new database object (table, database, user). |
| `ALTER` | Modifies an existing database object. |
| `DROP` | Deletes a database object permanently. |

---

<b>Next Topic:</b> [Data Manipulation Language (DML) →](../dml/)

