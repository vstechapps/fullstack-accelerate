# [SQL](../) > Database Concepts

## What is a Database?
A database is an organized collection of structured data stored electronically. It enables efficient data storage, retrieval, and manipulation.

## Types of Databases
1. **Relational Databases** - Stores data in structured tables with predefined schemas and relationships (e.g., MySQL, PostgreSQL, Oracle, SQL Server).
2. **Non-Relational Databases** - Stores data in a flexible format without fixed schemas, often used for unstructured or semi-structured data (e.g., MongoDB, Cassandra, Firebase).

## Structured vs. Unstructured Data
- **Structured Data**: Data that follows a predefined schema, organized in tables with rows and columns (e.g., Customer records in an RDBMS).
- **Unstructured Data**: Data without a fixed format, such as images, videos, emails, and social media posts.
- **Semi-Structured Data**: A mix of structured and unstructured data, often stored in formats like JSON, XML, or NoSQL databases.

## What is NoSQL?
NoSQL ("Not Only SQL") databases are designed for handling large volumes of unstructured or semi-structured data. They provide flexible schemas, horizontal scalability, and high performance. Types of NoSQL databases include:
- **Document-Based (e.g., MongoDB, CouchDB)** - Stores data as JSON-like documents.
- **Key-Value Stores (e.g., Redis, DynamoDB)** - Stores data as key-value pairs.
- **Column-Family Stores (e.g., Cassandra, HBase)** - Organizes data into column families for distributed storage.
- **Graph Databases (e.g., Neo4j, ArangoDB)** - Stores data as nodes and relationships for complex data modeling.

## Database Components
1. **Tables** - Stores data in rows and columns.
2. **Schemas** - Defines the structure of a database.
3. **Keys** - Includes Primary Key, Foreign Key, and Composite Key to maintain data integrity.
4. **Indexes** - Improves search performance by creating an efficient lookup mechanism.
5. **Views** - A virtual table representing a subset of data from one or more tables.
6. **Stored Procedures & Functions** - Predefined SQL scripts that execute complex logic within the database.

## Database Management System (DBMS) vs. Relational Database Management System (RDBMS)
| Feature | DBMS | RDBMS |
|---------|------|-------|
| Data Storage | Unstructured/Semi-Structured | Structured (Tables) |
| Relationships | No support for relationships | Supports relationships between tables |
| ACID Compliance | Not mandatory | Ensured |
| Examples | MongoDB, Firebase | MySQL, PostgreSQL, Oracle |

## Normalization in Databases
Normalization is a technique used to minimize redundancy and dependency in a database. It involves dividing large tables into smaller ones and defining relationships.

### Normal Forms:
1. **1NF (First Normal Form)** - Ensures atomicity (each column contains unique values).
2. **2NF (Second Normal Form)** - Removes partial dependencies (each non-key attribute depends on the entire primary key).
3. **3NF (Third Normal Form)** - Removes transitive dependencies (non-key attributes depend only on the primary key).
4. **BCNF (Boyce-Codd Normal Form)** - Ensures even stricter rules than 3NF for functional dependencies.

## Transactions in Databases
A transaction is a sequence of database operations performed as a single unit of work. It follows the **ACID properties**:
- **Atomicity** - Ensures all operations in a transaction are completed successfully or none are applied.
- **Consistency** - Maintains the integrity of the database.
- **Isolation** - Transactions do not interfere with each other.
- **Durability** - Ensures committed transactions persist even after a failure.

## SQL vs. NoSQL Databases
| Feature | SQL (Relational) | NoSQL (Non-Relational) |
|---------|----------------|------------------|
| Data Storage | Tables with fixed schema | Collections, key-value, documents |
| Scalability | Vertical Scaling | Horizontal Scaling |
| Query Language | SQL | Various (e.g., JSON, Key-Value) |
| Use Case | Structured data, strict ACID compliance | Unstructured data, scalability needs |
| Examples | MySQL, PostgreSQL, Oracle | MongoDB, Cassandra, Firebase |

Understanding these database concepts is crucial for full-stack developers to design, manage, and optimize databases effectively.
