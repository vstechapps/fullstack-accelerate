# [Fullstack](../../) > [Architecture](../) > 🌐 Client-Server Model

Welcome to the world of web development! 

Let's take a closer look at the client-server architecture, a foundational concept that powers the vast majority of interactions on the internet today. From browsing websites and using mobile apps to streaming content and sending emails, this model governs how devices (clients) communicate with centralized systems (servers) to exchange data and deliver services. 

It's the backbone of modern digital communication, enabling scalable, efficient, and reliable interactions across the globe.

---

## 🧑‍💻 Client-Server Model

The **Client-Server Model** is a distributed application structure that partitions tasks between providers of a resource (servers) and requesters (clients).

### 📊 Diagram: Client-Server Interaction

```plaintext
+--------+        HTTP Request         +---------+
| Client |  ───────────────────────▶   | Server  |
|        |                             |         |
|  (Browser, App)                      | (API, DB)|
+--------+        HTTP Response        +---------+
                    ◀──────────────────────
```

![Sequence Diagram](https://www.plantuml.com/plantuml/png/JP2npi8m38HtFuN7lyF_0Woe4WiZWhv0I5o824cnNQI-FQ6cXI4w-VJTwPHMrB6EzmJEQs7SfKXPeRwe4vw8dyG0vkB_zkDigkOWUAJ7IABuj--wmt8rOD0Rj-0Nbw5aePMtiu5Sb93ZvQfO-ZLaYWCNJo8ao4lUvO0Xof3S9EXBrifPIQ9-xbXsclvssCYvGkPLP-Tl69mwWBOQzIzU)

### 🔍 Key Concepts

| Component | Description |
|----------|-------------|
| **Client** | Sends requests and receives responses (e.g., browser, mobile app). |
| **Server** | Processes requests and sends back responses (e.g., web server, database). |

---

## 🧠 Real-World Examples of Client-Server Model

| Real World Analogy         | Client               | Server              | Description |
|----------------------------|----------------------|---------------------|-------------|
| 🏪 Coffee Shop             | You                  | Barista             | You order a drink (request), barista prepares and gives it (response). |
| 🖥️ Web Browser             | Chrome, Firefox      | example.com server  | Browser requests a webpage, server sends back HTML/CSS/JS. |
| 📱 Mobile App              | Instagram App        | Instagram API       | App requests feed/photos, API sends back JSON data. |
| 🧾 ATM Machine             | ATM                  | Bank Server         | ATM sends withdrawal request, bank verifies and sends funds. |
| 🧑‍🍳 Food Delivery App     | Swiggy/Zomato App    | Restaurant Backend  | You order food, backend confirms and processes the order. |
| 📶 Mobile Wi-Fi Access     | Mobile Phone         | Wi-Fi Router        | Phone requests internet access, router forwards to ISP/network. |
| 🌍 Internet Browsing       | Personal Computer    | World Wide Web      | You type a URL, browser requests page from web servers globally. |
| 🧑‍💻 Web App Architecture  | Frontend (Angular)   | Backend (Java/Node) | Angular app sends API requests, backend serves data and handles logic. |

---

## 🧭 Types of Clients

Clients are applications or systems that initiate communication by sending requests to servers.

| Type | Examples | Description |
|------|----------|-------------|
| **Web Browsers** | Chrome, Firefox | Used to browse and request web pages from web servers. |
| **Mobile Apps** | Instagram, WhatsApp | Apps send API calls to backend servers to fetch or send data. |
| **Desktop Applications** | Outlook, Slack | Request data from servers (emails, messages, etc.). |
| **IoT Devices** | Smart TVs, Thermostats | Devices send/receive data from cloud servers. |
| **Command Line Tools** | `curl`, Postman | Used by developers to interact with APIs manually. |
| **Game Clients** | PUBG, Fortnite | Communicate with game servers for matchmaking, gameplay, etc. |

---

## 🖥️ Types of Servers

Servers are systems that respond to client requests, manage resources, and perform services.

| Type | Examples | Description |
|------|----------|-------------|
| **Web Servers** | Apache, Nginx | Serve web pages (HTML, CSS, JS) to clients. |
| **Application Servers** | Node.js, Spring Boot | Handle business logic and API responses. |
| **Database Servers** | MySQL, PostgreSQL | Store and manage structured data for applications. |
| **File Servers** | Google Drive, Dropbox | Store and deliver files to users. |
| **Authentication Servers** | Firebase Auth, OAuth | Handle login, token management, and identity. |
| **Game Servers** | Steam, Epic Games | Manage game state, logic, and multiplayer sessions. |
| **Mail Servers** | SMTP, IMAP | Send and receive emails. |

---


