# [Home](../../) > Blood Bank Management - Requirements

## 🌟 Overview
A backend API for a Blood Bank Management System built using Spring Boot. The API provides endpoints for managing donors and searching for blood donors. The primary functionality is to allow users to search for donors based on blood group and locality. The system supports two roles: **ADMIN** and **USER**, with specific permissions for each role.

---

## 🛠️ Functional Requirements

### 1. 🩸 Donor Management
- **Register Donor**: Admins can register a new donor by providing their name, contact details, blood group, and locality.
- **Delete Donor**: Admins can delete a donor from the system.

### 2. 🩸 Donor Search
- **Search Donors**: Users can search for donors by specifying the required blood group and locality.

---

## 📌 Endpoint Details

### 1. 🩸 Donor Management Endpoints

- **POST /donors**: Register a new donor.
  - **Request**: Donor name, contact details, blood group, and locality.
  - **Response**: Donor ID and success message.
  - **Exceptions**: 
    - `DonorAlreadyExistsException`: If a donor with the same contact details already exists.

- **DELETE /donors/{id}**: Delete a donor.
  - **Request**: Donor ID.
  - **Response**: Success message.
  - **Exceptions**: 
    - `DonorNotFoundException`: If the donor ID does not exist.

---

### 2. 🩸 Donor Search Endpoint

- **GET /donors/search**: Search for donors by blood group and locality.
  - **Request**: Blood group and locality as query parameters.
  - **Response**: List of donors with details (name, contact, blood group, locality).
  - **Exceptions**: 
    - `DonorNotFoundException`: If no donors match the search criteria.

---

## 🛠️ Exception Scenarios

### 1. DonorNotFoundException
- **Scenario**: Triggered when a donor ID does not exist or no donors match the specified blood group and locality.
- **Endpoints Affected**: 
  - `DELETE /donors/{id}`
  - `GET /donors/search`

### 2. DonorAlreadyExistsException
- **Scenario**: Triggered when a donor with the same contact details already exists in the system.
- **Endpoints Affected**: 
  - `POST /donors`