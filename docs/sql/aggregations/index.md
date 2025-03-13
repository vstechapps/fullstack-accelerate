# [SQL](../) > Aggregate Functions

## Introduction
Aggregate functions in SQL perform calculations on multiple rows of data and return a single result. These functions are commonly used with the `GROUP BY` clause to summarize data.

### Key Aggregate Functions:
1. **COUNT** - Returns the number of rows.
2. **SUM** - Calculates the total sum of a numeric column.
3. **AVG** - Returns the average value of a numeric column.
4. **MIN** - Retrieves the minimum value.
5. **MAX** - Retrieves the maximum value.

---

## 1. COUNT Function
### Purpose:
The `COUNT` function returns the number of rows in a table or the number of non-null values in a column.

### Syntax:
```sql
SELECT COUNT(column_name) FROM table_name;
```

### Example:
```sql
SELECT COUNT(OrderID) FROM Orders;
```

---

## 2. SUM Function
### Purpose:
The `SUM` function calculates the total sum of a numeric column.

### Syntax:
```sql
SELECT SUM(column_name) FROM table_name;
```

### Example:
```sql
SELECT SUM(TotalAmount) FROM Orders;
```

---

## 3. AVG Function
### Purpose:
The `AVG` function calculates the average value of a numeric column.

### Syntax:
```sql
SELECT AVG(column_name) FROM table_name;
```

### Example:
```sql
SELECT AVG(Grade) FROM Students;
```

---

## 4. MIN Function
### Purpose:
The `MIN` function retrieves the lowest value in a column.

### Syntax:
```sql
SELECT MIN(column_name) FROM table_name;
```

### Example:
```sql
SELECT MIN(Salary) FROM Employees;
```

---

## 5. MAX Function
### Purpose:
The `MAX` function retrieves the highest value in a column.

### Syntax:
```sql
SELECT MAX(column_name) FROM table_name;
```

### Example:
```sql
SELECT MAX(Price) FROM Products;
```

---

## Summary

| Function | Description |
|----------|-------------|
| `COUNT` | Returns the number of rows. |
| `SUM` | Calculates the total sum of a numeric column. |
| `AVG` | Returns the average value of a numeric column. |
| `MIN` | Retrieves the minimum value. |
| `MAX` | Retrieves the maximum value. |

---

