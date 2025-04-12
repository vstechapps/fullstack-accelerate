# [Fullstack Architecture](../) > 🌐 REST API

Welcome to the world of web development!

A REST API (Representational State Transfer Application Programming Interface) is a way for different software programs or systems to communicate with each other over the internet, much like how humans use languages to communicate. Imagine you’re at a restaurant: you (the client) give your order (a request) to the waiter (the API), and the waiter passes your order to the kitchen (the server). The kitchen prepares your food (processes the request), and the waiter brings it back to you (the response). Just like how a menu lists available food options, the API lists different commands or actions that can be requested from the server, and the server responds with the information or data you asked for. REST APIs are used everywhere – from checking weather forecasts to sending messages on social media.

---

## 🧑‍💻 REST - Representational State Transfer

REST is an **architectural style** used for designing networked applications.

### 📦 REST API Characteristics

- 🔄 Stateless
- 📘 Resource-based (e.g., `/users`, `/products`)
- 🌍 Uses standard HTTP methods
- 💬 Communicates via JSON/XML (usually JSON)

---

## 📏 REST API Standards

| Standard | Description |
|----------|-------------|
| **Stateless** | No session info stored on the server. Each request is independent. |
| **Uniform Interface** | Consistent structure: URIs, methods, and formats. |
| **Cacheable** | Responses can be cached to improve performance. |
| **Layered System** | Client doesn't know if it's talking to the real server or a proxy. |
| **Code on Demand** (Optional) | Servers can send executable code to clients (e.g., JavaScript). |

---

## 🧾 HTTP Methods

| Method | Use Case |
|--------|----------|
| **GET** | 🔍 Retrieve data from the server. |
| **POST** | ➕ Create a new resource. |
| **PUT** | 🔁 Update an existing resource (replace). |
| **PATCH** | 🩹 Partially update a resource. |
| **DELETE** | ❌ Remove a resource. |

---

## 📤 HTTP Request Structure

```http
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer <token>
Content-Type: application/json
```

### Components:

| Part | Description |
|------|-------------|
| **Request Line** | Method + URL + HTTP Version |
| **Headers** | Key-Value pairs for metadata (Auth, Content-Type, etc.) |
| **Body** | Payload for POST/PUT/PATCH requests |

---

## 📥 HTTP Response Structure

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Alice"
}
```

### Components:

| Part | Description |
|------|-------------|
| **Status Line** | HTTP version + Status code + Status message |
| **Headers** | Metadata (Content-Type, Caching, etc.) |
| **Body** | Actual response data (typically JSON) |

---

## 🧠 HTTP Headers (Common Ones)

| Header | Purpose |
|--------|---------|
| `Authorization` | For authentication tokens |
| `Content-Type` | Indicates format of request/response body |
| `Accept` | Client's preferred response format |
| `Cache-Control` | Caching directives |
| `User-Agent` | Info about the client making the request |

---

## 📡 HTTP Response Codes

| Code | Meaning | Description |
|------|---------|-------------|
| `200 OK` | ✅ Success | Request was successful |
| `201 Created` | 🆕 Resource created successfully |
| `204 No Content` | ✅ Success with no body |
| `400 Bad Request` | ⚠️ Client error (invalid input) |
| `401 Unauthorized` | 🔐 Missing or invalid auth |
| `403 Forbidden` | 🚫 Authenticated but no permission |
| `404 Not Found` | ❓ Resource not found |
| `500 Internal Server Error` | 💥 Something broke on the server |

---

## 🎯 Summary

- Clients make requests to Servers using HTTP.
- REST APIs follow consistent, stateless principles.
- HTTP methods define CRUD operations.
- Headers and status codes convey important metadata.
- Clients can be browsers, apps, devices; Servers can serve web, app, DB, files, and more.