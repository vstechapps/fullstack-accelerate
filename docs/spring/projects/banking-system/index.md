# [Fullstack](../../) > Banking System API

## 🌟 Overview
A backend API for a banking system built using Spring Boot. The API provides endpoints for managing accounts, customers, and transactions. It is designed to handle core banking functionalities such as account creation, fund transfers, transaction history, and customer management. The system supports two roles: **ADMIN** and **CUSTOMER**, with specific permissions for each role.

---

## 🛠️ Functional Requirements

### 1. 👤 Customer Management (Admin Only)
- **Register Customer**: Admins can create a customer account by providing their name, email, and contact details.
- **View Customer Details**: Admins can retrieve customer details such as name, email, and associated accounts.
- **Update Customer Details**: Admins can update customer information.

### 2. 🏦 Account Management (Admin Only)
- **Create Account**: Admins can open a new account (e.g., savings, current) for a customer.
- **View Account Details**: Admins can retrieve account details such as balance, account type, and account status.
- **Close Account**: Admins can close a customer's account.

### 3. 💸 Transaction Management (Customer Only)
- **Deposit Funds**: Customers can deposit money into their accounts.
- **Withdraw Funds**: Customers can withdraw money from their accounts.
- **Transfer Funds**: Customers can transfer funds between their own accounts or to other accounts.
- **View Transaction History**: Customers can retrieve a list of all transactions for their accounts.

### 4. 🔒 Authentication and Authorization
- **Login**: Both admins and customers can authenticate using email and password to generate a session token.
- **Role-Based Access**: 
  - Admins have access to customer and account management endpoints.
  - Customers have access to transaction-related endpoints for their own accounts.

---

## 📌 Endpoint Details

### 1. 👤 Customer Endpoints (Admin Only)
- **POST /customers**: Register a new customer.
  - **Request**: Name, email, contact details.
  - **Response**: Customer ID and success message.
  - **Exceptions**: 
    - `CustomerAlreadyExistsException`: If a customer with the same email already exists.

- **GET /customers/{id}**: Retrieve customer details by ID.
  - **Request**: Customer ID.
  - **Response**: Customer details (name, email, associated accounts).
  - **Exceptions**: 
    - `CustomerNotFoundException`: If the customer ID does not exist.

- **PUT /customers/{id}**: Update customer details by ID.
  - **Request**: Customer ID and updated details.
  - **Response**: Success message.
  - **Exceptions**: 
    - `CustomerNotFoundException`: If the customer ID does not exist.

---

### 2. 🏦 Account Endpoints (Admin Only)
- **POST /accounts**: Create a new account for a customer.
  - **Request**: Customer ID, account type (savings/current), initial deposit.
  - **Response**: Account ID and success message.
  - **Exceptions**: 
    - `CustomerNotFoundException`: If the customer ID does not exist.

- **GET /accounts/{id}**: Retrieve account details by ID.
  - **Request**: Account ID.
  - **Response**: Account details (balance, account type, status).
  - **Exceptions**: 
    - `AccountNotFoundException`: If the account ID does not exist.

- **DELETE /accounts/{id}**: Close an account.
  - **Request**: Account ID.
  - **Response**: Success message.
  - **Exceptions**: 
    - `AccountNotFoundException`: If the account ID does not exist.

---

### 3. 💸 Transaction Endpoints (Customer Only)
- **POST /transactions/deposit**: Deposit funds into an account.
  - **Request**: Account ID and deposit amount.
  - **Response**: Updated account balance.
  - **Exceptions**: 
    - `AccountNotFoundException`: If the account ID does not exist.

- **POST /transactions/withdraw**: Withdraw funds from an account.
  - **Request**: Account ID and withdrawal amount.
  - **Response**: Updated account balance.
  - **Exceptions**: 
    - `AccountNotFoundException`: If the account ID does not exist.
    - `InsufficientFundsException`: If the account balance is insufficient.

- **POST /transactions/transfer**: Transfer funds between accounts.
  - **Request**: Source account ID, destination account ID, transfer amount.
  - **Response**: Success message and updated balances for both accounts.
  - **Exceptions**: 
    - `AccountNotFoundException`: If either account ID does not exist.
    - `InsufficientFundsException`: If the source account balance is insufficient.

- **GET /transactions**: Retrieve transaction history for an account.
  - **Request**: Account ID.
  - **Response**: List of transactions (date, type, amount).
  - **Exceptions**: 
    - `AccountNotFoundException`: If the account ID does not exist.

---

## 🛠️ Exception Scenarios

### 1. CustomerNotFoundException
- **Scenario**: Triggered when a customer ID does not exist in the system.
- **Endpoints Affected**: 
  - `GET /customers/{id}`
  - `PUT /customers/{id}`
  - `POST /accounts`

### 2. AccountNotFoundException
- **Scenario**: Triggered when an account ID does not exist in the system.
- **Endpoints Affected**: 
  - `GET /accounts/{id}`
  - `DELETE /accounts/{id}`
  - `POST /transactions/*`

### 3. InsufficientFundsException
- **Scenario**: Triggered when a withdrawal or transfer amount exceeds the account balance.
- **Endpoints Affected**: 
  - `POST /transactions/withdraw`
  - `POST /transactions/transfer`

