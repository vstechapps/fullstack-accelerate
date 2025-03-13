# [SQL](../) > Data Query Language (DQL)

## Introduction
Data Query Language (DQL) is an **informal subset** of SQL that focuses on retrieving data from databases. While DQL is not explicitly categorized in SQL standards, it is widely recognized as a distinct group of SQL commands used for querying data.

### Key DQL Commands:
- **SELECT** - Retrieves data from tables.
- **WHERE** - Filters data based on conditions.
- **ORDER BY** - Sorts query results.
- **GROUP BY** - Groups data for aggregation.
- **HAVING** - Filters grouped results.

---

## SELECT
### Purpose:
The `SELECT` command retrieves data from one or more tables.

### Syntax:
```sql
SELECT column1, column2 FROM table_name;
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

---

## WHERE
### Purpose:
The `WHERE` clause is used to filter records based on conditions.

### Syntax:
```sql
SELECT column1, column2 FROM table_name WHERE condition;
```

### Examples:
#### Retrieve employees older than 30:
```sql
SELECT FirstName, LastName FROM Employees WHERE Age > 30;
```

#### Retrieve employees with a specific last name:
```sql
SELECT * FROM Employees WHERE LastName = 'Smith';
```

---

## ORDER BY
### Purpose:
The `ORDER BY` clause sorts the query results in ascending or descending order.

### Syntax:
```sql
SELECT column1, column2 FROM table_name ORDER BY column1 [ASC|DESC];
```

### Examples:
#### Retrieve employees sorted by last name in ascending order:
```sql
SELECT FirstName, LastName FROM Employees ORDER BY LastName ASC;
```

#### Retrieve employees sorted by age in descending order:
```sql
SELECT FirstName, LastName, Age FROM Employees ORDER BY Age DESC;
```

---

## GROUP BY
### Purpose:
The `GROUP BY` clause groups rows that have the same values in specified columns, often used with aggregate functions.

### Syntax:
```sql
SELECT column1, COUNT(*) FROM table_name GROUP BY column1;
```

### Examples:
#### Count employees in each department:
```sql
SELECT Department, COUNT(*) FROM Employees GROUP BY Department;
```

#### Sum salaries per department:
```sql
SELECT Department, SUM(Salary) FROM Employees GROUP BY Department;
```

---

## HAVING
### Purpose:
The `HAVING` clause filters records after they have been grouped.

### Syntax:
```sql
SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1 HAVING condition;
```

### Examples:
#### Retrieve departments with more than 5 employees:
```sql
SELECT Department, COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*) > 5;
```

#### Retrieve departments with a total salary greater than 500,000:
```sql
SELECT Department, SUM(Salary) FROM Employees GROUP BY Department HAVING SUM(Salary) > 500000;
```

---

## LIKE
### Purpose:
The `LIKE` operator is used in the `WHERE` clause for **pattern matching** with **text values**. It allows flexible searching using wildcards.

### Wildcards in `LIKE`
| Wildcard | Meaning |
|----------|---------|
| `%` | Matches **zero or more** characters |
| `_` | Matches **exactly one** character |

### Syntax:
```sql
SELECT column1 FROM table_name WHERE column1 LIKE 'pattern';
```

### Examples:
#### Find all employees whose last name starts with 'Sm':
```sql
SELECT * FROM Employees WHERE LastName LIKE 'Sm%';
```

#### Find all employees with a last name containing 'ith':
```sql
SELECT * FROM Employees WHERE LastName LIKE '%ith%';
```

#### Find all employees with a four-letter last name starting with 'S':
```sql
SELECT * FROM Employees WHERE LastName LIKE 'S___';
```

---

## Difference Between `=` and `LIKE`

| Feature | `=` (Exact Match) | `LIKE` (Pattern Matching) |
|---------|------------------|------------------------|
| Wildcards | ❌ Not supported | ✅ Supports `%` and `_` |
| Case Sensitivity | Depends on database collation | Depends on database collation |
| Performance | ✅ Faster | ❌ Slower due to pattern matching |
| Use Case | When you need an exact match | When searching for partial matches |

---

## Case Sensitivity for `=` in Different Databases

| Database | Default Case Sensitivity | Case-Sensitive Comparison |
|----------|--------------------------|---------------------------|
| **MySQL** | Case-insensitive (`utf8_general_ci`) | `BINARY` or `COLLATE utf8_bin` |
| **PostgreSQL** | Case-sensitive | Use `ILIKE` for case-insensitive search |
| **SQL Server** | Case-insensitive (default) | Change collation |
| **Oracle** | Case-sensitive (default) | Use `UPPER()` or `LOWER()` |

These details help in better understanding how different SQL databases handle case sensitivity and string pattern matching.

---

## Summary

| Command | Description |
|---------|-------------|
| `SELECT` | Retrieves data from a table. |
| `WHERE` | Filters records based on a condition. |
| `ORDER BY` | Sorts query results in ascending or descending order. |
| `GROUP BY` | Groups rows with similar values for aggregation. |
| `HAVING` | Filters grouped records based on a condition. |
| `LIKE` | Used for pattern matching in `WHERE` clause. |

---


