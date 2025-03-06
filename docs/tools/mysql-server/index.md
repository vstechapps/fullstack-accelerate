# MySQL Server Installation Guide

## Introduction
MySQL is a widely used relational database management system (RDBMS) that helps store and manage structured data efficiently. This guide will help you install MySQL Server on your system and set up a basic database.

## Step 1: Download MySQL Server
1. Visit the official [MySQL Downloads page](https://dev.mysql.com/downloads/installer/).
2. Select **MySQL Community Server** and choose the installer that matches your operating system (Windows, macOS, or Linux).
3. Download and run the installer.

## Step 2: Install MySQL Server
### On Windows:
1. Run the downloaded `.msi` file.
2. Choose the **Custom** installation type.
3. Select **MySQL Server** and other required components (Workbench, Shell, Router, etc.).
4. Set up the root password and configure authentication settings.
5. Complete the installation and start the MySQL service.
6. Verify installation by opening Command Prompt and running:
   ```sh
   mysql -u root -p
   ```

### On macOS:
1. Install MySQL using Homebrew:
   ```sh
   brew install mysql
   ```
2. Start the MySQL service:
   ```sh
   brew services start mysql
   ```
3. Secure the installation:
   ```sh
   mysql_secure_installation
   ```
4. Verify installation:
   ```sh
   mysql -u root -p
   ```

### On Linux (Ubuntu/Debian):
1. Update package lists and install MySQL Server:
   ```sh
   sudo apt update
   sudo apt install mysql-server
   ```
2. Secure the installation:
   ```sh
   sudo mysql_secure_installation
   ```
3. Verify installation:
   ```sh
   sudo systemctl status mysql
   ```

## Step 3: Configure MySQL Server
1. Open the MySQL configuration file:
   ```sh
   sudo nano /etc/mysql/my.cnf
   ```
2. Adjust settings such as **port**, **max_connections**, and **bind-address** if needed.
3. Restart MySQL Server to apply changes:
   ```sh
   sudo systemctl restart mysql
   ```

## Step 4: Create a Database and User
1. Log in to MySQL as root:
   ```sh
   mysql -u root -p
   ```
2. Create a new database:
   ```sql
   CREATE DATABASE mydatabase;
   ```
3. Create a new user and grant privileges:
   ```sql
   CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
   GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'localhost';
   FLUSH PRIVILEGES;
   ```
4. Exit MySQL:
   ```sql
   EXIT;
   ```

## Step 5: Run an Example MySQL Query
1. Connect to MySQL as the new user:
   ```sh
   mysql -u myuser -p
   ```
2. Select the database:
   ```sql
   USE mydatabase;
   ```
3. Create a new table:
   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100)
   );
   ```
4. Insert a record:
   ```sql
   INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
   ```
5. Retrieve data:
   ```sql
   SELECT * FROM users;
   ```

## Conclusion
You have successfully installed MySQL Server, created a database, and executed basic queries. You can now start developing applications using MySQL!
