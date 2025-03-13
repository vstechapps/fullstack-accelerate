# [SQL](../) > Database Concepts

## Database
A database is an organized collection of structured data stored electronically. It enables efficient data storage, retrieval, and manipulation.

## Types of Databases
1. **Relational Databases** - Stores data in structured tables with predefined schemas and relationships (e.g., MySQL, PostgreSQL, Oracle, SQL Server).
2. **Non-Relational Databases** - Stores data in a flexible format without fixed schemas, often used for unstructured or semi-structured data (e.g., MongoDB, Cassandra, Firebase).

## Structured vs. Unstructured Data
- **Structured Data**: Data that follows a predefined schema, organized in tables with rows and columns (e.g., Customer records in an RDBMS).
- **Unstructured Data**: Data without a fixed format, such as images, videos, emails, and social media posts.
- **Semi-Structured Data**: A mix of structured and unstructured data, often stored in formats like JSON, XML, or NoSQL databases.

## Relational Databases
### Purpose:
A **Relational Database (RDBMS)** organizes data into structured tables with relationships between them. It ensures data integrity, scalability, and efficient querying using **SQL (Structured Query Language)**.

### Real-World Example (College Database):

- **college database** uses relational databases to store:
- **Students Table**: Stores student details (ID, Name, Percentage, Major)

#### Students Table:

| StudentID | Name      | Major          | Percentage |
|-----------|----------|---------------|------------|
| 1         | Ajay     | Computer Science | 85%        |
| 2         | Balu     | Mathematics | 78%        |
| 3         | Chaitanya | Physics | 92%        |

---

## 2. Tables, Rows, Columns
### Purpose:
Data in relational databases is stored in **tables**. Each table consists of **columns (fields)** and **rows (records/tuples)**.

### Key Concepts:
- **Tables**: Store structured data.
- **Columns (Attributes)**: Define data attributes (e.g., `EmployeeName`, `Salary`).
- **Rows (Records/Tuples)**: Represent individual records in the table.
- **Degree of a Table**: The **number of columns** in a table.
- **Cardinality of a Table**: The **number of rows** in a table.

### Real-World Example (Employees Database):
An **Employees Table** for a company:

| EmployeeID | Name      | Department  | Role               | Salary  |
|-----------|----------|-------------|-------------------|--------|
| 1         | Anil     | IT          | Software Engineer | 80000  |
| 2         | Baskar   | HR          | HR Manager       | 70000  |
| 3         | Chaitanya | Finance     | Software Engineer | 75000  |

- **Degree (Number of Columns)**: 5
- **Cardinality (Number of Rows)**: 3

---

## 3. Primary and Foreign Keys
### Purpose:
**Primary Keys (PK)** uniquely identify each record, while **Foreign Keys (FK)** establish relationships between tables.

### Key Concepts:
- **Primary Key (PK)**: Ensures each row has a unique identifier.
- **Foreign Key (FK)**: Links two tables by referring to a Primary Key in another table.

### Real-World Example (E-Commerce Database):

- **Customers Table** (Primary Key: `CustomerID`)
- **Orders Table** (Primary Key: `OrderID`, Foreign Key: `CustomerID`)
- **Products Table** (Primary Key: `ProductID`)

#### Customers Table:

| CustomerID | Name      | Email              | Address         |
|------------|----------|--------------------|-----------------|
| 1          | Alice    | alice@email.com    | New York, USA  |
| 2          | Bob      | bob@email.com      | London, UK     |
| 3          | Charlie  | charlie@email.com  | Sydney, AU     |
| 4          | David    | david@email.com    | Toronto, CA    |

#### Products Table:

| ProductID | ProductName          | Price  | Stock |
|-----------|----------------------|--------|-------|
| 1         | Wireless Mouse       | 25.99  | 100   |
| 2         | Mechanical Keyboard  | 89.99  | 50    |
| 3         | USB-C Charger        | 19.99  | 200   |

#### Orders Table:

| OrderID | CustomerID | TotalAmount | OrderDate  |
|---------|-----------|-------------|------------|
| 101     | 1         | 115.98      | 2024-03-01 |
| 102     | 2         | 89.99       | 2024-03-05 |
| 103     | 3         | 45.98       | 2024-03-08 |

---

## Summary

| Concept | Description |
|---------|-------------|
| **Relational Databases** | Organize data in structured tables with relationships. |
| **Tables, Rows, and Columns** | Tables store data, columns define attributes, rows store records. |

---

<b>Next Topic:</b> [Data Definition Language (DDL) →](../ddl/)