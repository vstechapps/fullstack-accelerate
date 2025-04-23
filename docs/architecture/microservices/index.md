# [Fullstack Architecture](../) >🌐 Microservices

Microservices is an architectural style that structures an application as a collection of small, loosely coupled services, which can be developed, deployed, and scaled independently. Each service in a microservices architecture focuses on a specific business capability and can be built and deployed independently.

---

## ❓ Why Microservices?

Microservices offer several advantages, particularly for complex, large-scale applications:

- 🚀 **Scalability**: Each service can be scaled independently to meet specific demands.
- 🛡️ **Resilience**: Failure in one service doesn’t necessarily affect the entire application.
- ⚡ **Faster Development**: Development teams can work on different services independently, accelerating time-to-market.
- 🎨 **Flexibility**: Microservices allow using different technologies and programming languages for each service.
- 🧹 **Easier Maintenance**: Each service is smaller and focused on specific functionality, making it easier to understand, maintain, and modify.

---

## 🧩 Microservices Components

### 1️⃣ Service

A **service** is a core component of the microservices architecture. It performs a specific business function and is typically responsible for a single module or domain of the application. Each service is designed to be:

- 🛠️ **Autonomous**: Can be deployed, updated, or scaled independently.
- 📦 **Self-contained**: Has its own database, business logic, and API.
- 🌐 **Communicating over the network**: Communicates with other services via APIs, usually REST or messaging queues.

---

### 2️⃣ API Gateway

The **API Gateway** is a crucial component in a microservices architecture. It serves as a single entry point for all client requests and is responsible for routing requests to the appropriate service.

Responsibilities include:

- 🔀 **Request Routing**: Directs requests to the appropriate microservice.
- ⚖️ **Load Balancing**: Balances the load across multiple instances of a microservice.
- 🔒 **Authentication and Authorization**: Handles security concerns such as API authentication, rate limiting, etc.
- 🧩 **Aggregation**: Combines responses from multiple services into a single response for the client.

---

### 3️⃣ Service Registry and Discovery

In a microservices architecture, services need to discover each other to communicate. A **Service Registry** (e.g., Eureka, Consul) keeps track of the available services and their locations.

- 🔍 **Dynamic discovery**: Services register themselves at startup and remove themselves on shutdown.
- ⚖️ **Load balancing**: Service discovery helps the system balance load among instances of the same service.

---

### 4️⃣ Database per Service

Each microservice has its own **database** or persistence layer, which can be a different database type based on the service's needs (SQL, NoSQL, etc.).

Benefits include:

- 🔒 **Data encapsulation**: Each service owns its own data and is decoupled from other services' databases.
- 🎨 **Technology independence**: Each service can choose the best database for its use case.

---

### 5️⃣ Communication Between Services

Services in a microservices architecture communicate with each other via lightweight communication mechanisms, typically HTTP, REST APIs, or messaging queues (e.g., Kafka, RabbitMQ).

- 🌐 **Synchronous Communication**: Direct API calls using HTTP/REST.
- 📩 **Asynchronous Communication**: Message brokers and queues for decoupling services and handling long-running tasks.

---

## 🌍 Microservices in Fullstack Applications

### Backend (Spring Boot + Microservices)

- 🛠️ **Service**: Individual Spring Boot applications that focus on specific business functions.
- 🔀 **API Gateway**: Often implemented using tools like **Spring Cloud Gateway** or **Zuul**.
- 🔍 **Service Registry**: Managed using tools like **Eureka** or **Consul**.
- 🗂️ **Database**: Each service can have its own database (SQL/NoSQL) depending on its requirements.
- 📡 **Communication**: REST API calls, messaging systems like Kafka or RabbitMQ.

### Frontend (Angular)

- 🧩 **Model**: Angular services for communicating with microservices APIs.
- 🎨 **View**: Angular components and templates that interact with the backend.
- 🧠 **Controller**: Component classes managing interactions with backend APIs and frontend logic.

---

## 📂 Folder Structure Example

```plaintext

microservices-app/
├── backend/
│   ├── service-a/
│   │   ├── src/
│   │   ├── Dockerfile
│   │   ├── application.yml
│   ├── service-b/
│   │   ├── src/
│   │   ├── Dockerfile
│   │   ├── application.yml
│   ├── api-gateway/
│   │   ├── src/
│   │   └── application.yml
│   ├── service-registry/
│   │   ├── src/
│   │   └── application.yml
│   └── docker-compose.yml
├── frontend/
│   ├── src/app/
│   │   ├── components/
│   │   ├── services/
│   ├── app.module.ts
│   └── main.ts
└── docker-compose.yml

```