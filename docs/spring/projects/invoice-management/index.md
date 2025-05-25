# [Fullstack](../../) > Invoice Management API

## 🌟 Overview
A backend API for an Invoice Management System built using Spring Boot. The API provides endpoints for generating and managing invoices. The primary functionality is to generate PDF invoices for customers based on their orders and payment details. The system supports two roles: **ADMIN** and **CUSTOMER**, with specific permissions for each role.

---

## 🛠️ Functional Requirements

### 1. 📄 Invoice Management
- **Generate Invoice**: Admins can generate an invoice for a customer by providing order details.
- **View Invoices**: Admins can view all invoices or filter by customer.
- **Download Invoice (PDF)**: Customers can download their invoices in PDF format.
- **Delete Invoice**: Admins can delete an invoice.

### 2. 🔒 Authentication and Authorization
- **Login**: Both admins and customers can authenticate using email and password to generate a session token.
- **Role-Based Access**: 
  - Admins have access to invoice generation and management endpoints.
  - Customers can only download their own invoices.

---

## 📌 Endpoint Details

### 1. 📄 Invoice Endpoints

- **POST /invoices**: Generate a new invoice.
  - **Request**: Customer ID, order details (product IDs, quantities, prices).
  - **Response**: Invoice ID, success message, and a link to download the PDF.
  - **Exceptions**: 
    - `InvoiceNotFoundException`: If the invoice ID does not exist.

- **GET /invoices**: Retrieve all invoices or filter by customer.
  - **Request**: Optional customer ID for filtering.
  - **Response**: List of invoices with details (invoice date, total amount, status).

- **GET /invoices/{id}/download**: Download a specific invoice as a PDF.
  - **Request**: Invoice ID.
  - **Response**: PDF file of the invoice.
  - **Exceptions**: 
    - `InvoiceNotFoundException`: If the invoice ID does not exist.
    - `UnauthorizedAccessException`: If a customer tries to access another customer's invoice.

- **DELETE /invoices/{id}**: Delete an invoice.
  - **Request**: Invoice ID.
  - **Response**: Success message.
  - **Exceptions**: 
    - `InvoiceNotFoundException`: If the invoice ID does not exist.

---

## 🛠️ Exception Scenarios

### 1. InvoiceNotFoundException
- **Scenario**: Triggered when an invoice ID does not exist in the system.
- **Endpoints Affected**: 
  - `GET /invoices/{id}/download`
  - `DELETE /invoices/{id}`

### 2. UnauthorizedAccessException
- **Scenario**: Triggered when a customer tries to access an invoice that does not belong to them.
- **Endpoints Affected**: 
  - `GET /invoices/{id}/download`