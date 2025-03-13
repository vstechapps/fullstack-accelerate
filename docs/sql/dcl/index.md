# [SQL](../) > Data Control Language (DCL)

## Introduction
Data Control Language (DCL) is a subset of SQL that is used to control access to data in a database. It helps in defining user permissions and restricting unauthorized access.

### Key DCL Commands:
- **GRANT** - Provides specific privileges to users.
- **REVOKE** - Removes privileges from users.

---

## 1. GRANT Command
### Purpose:
The `GRANT` command is used to give specific privileges to a user in the database.

### Syntax:
```sql
GRANT privilege_name ON object_name TO user_name;
```

### Examples:
#### Grant SELECT permission on a table:
```sql
GRANT SELECT ON Employees TO 'john'@'localhost';
```

#### Grant multiple privileges:
```sql
GRANT SELECT, INSERT, UPDATE ON Employees TO 'admin'@'localhost';
```

#### Grant all privileges on a database:
```sql
GRANT ALL PRIVILEGES ON CompanyDB.* TO 'manager'@'localhost';
```

---

## 2. REVOKE Command
### Purpose:
The `REVOKE` command is used to remove previously granted privileges from a user.

### Syntax:
```sql
REVOKE privilege_name ON object_name FROM user_name;
```

### Examples:
#### Revoke SELECT permission from a user:
```sql
REVOKE SELECT ON Employees FROM 'john'@'localhost';
```

#### Revoke multiple privileges:
```sql
REVOKE SELECT, INSERT ON Employees FROM 'admin'@'localhost';
```

#### Revoke all privileges from a user:
```sql
REVOKE ALL PRIVILEGES ON CompanyDB.* FROM 'manager'@'localhost';
```

---

## Summary

| Command | Description |
|---------|-------------|
| `GRANT` | Provides specific privileges to users. |
| `REVOKE` | Removes privileges from users. |


