# MVC Architecture

The Model-View-Controller (MVC) architecture is a widely adopted design pattern for building scalable, maintainable, and modular applications. It separates an application into three main logical components: **Model**, **View**, and **Controller**. Each of these components handles specific responsibilities within the application.

---

## Why MVC?

MVC helps organize code by separating business logic from UI and user interaction logic. This leads to:

- Better maintainability  
- Easier testing  
- Scalable structure  
- Reusability of components  
- Clear separation of concerns  

---

## MVC Components

### 1. Model

The **Model** represents the application's data and business logic. In a fullstack Spring Boot + Angular application, this layer typically includes:

- **Entity classes** that map to the database schema  
- **DTO (Data Transfer Object) classes** that define the structure of data exchanged between frontend and backend  
- **Mappers** for converting between Entities and DTOs  

The model ensures data consistency and encapsulates business rules. DTOs help decouple internal persistence models from external API contracts.

---

### 2. View

The **View** is the presentation layer of the application. Its role is to display data to the user and capture user interactions. In a Spring Boot + Angular fullstack application, the view layer can exist in both the backend and frontend, depending on architecture.

In the **backend (Spring Boot)**, the view can be:

- **JSON API responses** (common in REST APIs)  
- **HTML** using Thymeleaf or similar template engines  
- **JSP pages** (in legacy Java web apps)  
- **XML or other formats** (for API integration or legacy systems)  

In the **frontend (Angular)**, the view is composed of:

- Angular components and HTML templates  
- UI logic and data-binding mechanisms  

#### View Responsibilities

- Render UI based on model data  
- Capture user interactions and inputs  
- Display feedback and results returned from the controller  

---

### 3. Controller

The **Controller** manages the flow of data between the View and the Model. In Spring Boot, controllers expose REST APIs that serve data and handle client requests.

Controller responsibilities include:

- Handling HTTP requests  
- Calling service and model layers  
- Returning appropriate responses (DTOs or errors)  

---

## Visual Representation

![MVC Architecture - Spring Boot + Angular](https://user-images.githubusercontent.com/122437334/235355053-d3c1e70f-4650-404b-9ef2-2c3f9ffdbf7b.png)

---

## MVC in Fullstack Applications

### Backend (Spring Boot)

- **Model**: JPA Entities, DTOs, and Mappers  
- **View**: 
  - JSON API responses (typical in REST APIs)  
  - HTML (Thymeleaf), JSP, or XML for server-rendered UIs  
- **Controller**: REST or web controllers using Spring

### Frontend (Angular)

- **Model**: Angular interfaces and services  
- **View**: Angular HTML templates  
- **Controller**: Component class logic and data binding  

---

## Folder Structure Example

```plaintext

springboot-angular-app/
├── backend/
│   ├── model/
│   ├── dto/
│   ├── mapper/
│   ├── controller/
│   ├── repository/
│   └── Application.java
├── frontend/
│   ├── src/app/
│   │   ├── components/
│   │   ├── services/
│   ├── app.module.ts
│   └── main.ts

```
