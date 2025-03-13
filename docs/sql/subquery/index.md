# [SQL](../) > Sub Query

## Introduction
A **subquery** is a query inside another SQL query. It helps retrieve specific data that meets a condition in the main query.

### **Basic Syntax:**
```sql
SELECT column_name FROM table_name
WHERE column_name = (SELECT column_name FROM another_table WHERE condition);
```

Subqueries are often used in the `WHERE` clause to filter results based on data from another table.

---

## 1. Subquery to Find Specific Data
### Purpose:
Find records that match a condition from another table.

### Example:
#### **Find employees who work in the 'IT' department:**
```sql
SELECT Name FROM Employees 
WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT');
```
- The subquery finds the `DepartmentID` for 'IT'.
- The main query selects all employees who belong to that `DepartmentID`.

---

## 2. Subquery with Multiple Matches
### Purpose:
Find records matching **any** of multiple values.

### Example:
#### **Find employees who work in New York or London offices:**
```sql
SELECT Name FROM Employees 
WHERE OfficeID IN (SELECT OfficeID FROM Offices WHERE City IN ('New York', 'London'));
```
- The subquery finds `OfficeID` values for New York and London.
- The main query selects employees who belong to those offices.

---

## 3. Subquery to Compare Values
### Purpose:
Compare a column’s value with a computed result from another table.

### Example:
#### **Find employees who earn more than the average salary:**
```sql
SELECT Name, Salary FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees);
```
- The subquery calculates the **average salary**.
- The main query finds employees who **earn more than the average**.

---

## Summary

| Subquery Type | Example Use Case |
|--------------|-----------------|
| **Single Value Subquery** | Find employees in a specific department. |
| **Multiple Value Subquery** | Find employees in multiple offices. |
| **Comparison Subquery** | Find employees earning above average. |

---

<b>Next Topic:</b> [Indexes →](../indexes/)