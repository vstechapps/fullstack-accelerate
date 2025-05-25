# [Fullstack](../../) > E-commerce Backend API

## 🌟 Overview
A backend API for an e-commerce platform built using Spring Boot. The API provides endpoints for managing products, users, orders, and payments. It is designed to handle common e-commerce functionalities such as product browsing, user authentication, order placement, and payment processing.

---

## 🛠️ Functional Requirements

### 1. 👤 User Management
- **Register User**: Allow users to create an account by providing their name, email, and password.
- **Login**: Authenticate users using email and password to generate a session token.
- **View Profile**: Retrieve user details such as name, email, and order history.
- **Update Profile**: Allow users to update their personal information.

### 2. 🛒 Product Management
- **Add Product**: Admins can add new products with details like name, description, price, and stock quantity.
- **View Products**: Retrieve a list of all available products with pagination and filtering options (e.g., by category or price range).
- **Update Product**: Admins can update product details such as price or stock quantity.
- **Delete Product**: Admins can remove products from the catalog.

### 3. 📦 Order Management
- **Place Order**: Users can place an order by selecting products and providing shipping details.
- **View Orders**: Retrieve a list of all orders placed by a user or admin.
- **Update Order Status**: Admins can update the status of an order (e.g., "Processing", "Shipped", "Delivered").
- **Cancel Order**: Users can cancel an order before it is shipped.

### 4. 💳 Payment Management
- **Initiate Payment**: Users can initiate payment for an order using payment gateways (e.g., Stripe, PayPal).
- **Verify Payment**: Verify the payment status and update the order accordingly.
- **Refund Payment**: Process refunds for canceled or returned orders.

### 5. 🛍️ Cart Management
- **Add to Cart**: Users can add products to their cart.
- **View Cart**: Retrieve the list of products in the user's cart.
- **Update Cart**: Modify the quantity of products in the cart.
- **Remove from Cart**: Remove products from the cart.

---

## 📊 API Endpoints Overview

Below is a high-level diagram of the API endpoints and their relationships:

### 🗺️ API Endpoints Diagram

```plaintext
+-------------------+       +-------------------+       +-------------------+
|   User Endpoints  |       | Product Endpoints |       |  Order Endpoints  |
+-------------------+       +-------------------+       +-------------------+
| POST /users       |       | GET /products     |       | POST /orders      |
| POST /login       |       | POST /products    |       | GET /orders       |
| GET /users/{id}   |       | PUT /products/{id}|       | PUT /orders/{id}  |
| PUT /users/{id}   |       | DELETE /products  |       | DELETE /orders    |
+-------------------+       +-------------------+       +-------------------+

+-------------------+       +-------------------+
|  Cart Endpoints   |       | Payment Endpoints |
+-------------------+       +-------------------+
| POST /cart        |       | POST /payments    |
| GET /cart         |       | GET /payments     |
| PUT /cart/{id}    |       | PUT /payments     |
| DELETE /cart/{id} |       | DELETE /payments  |
+-------------------+       +-------------------+
```

---

## 📌 Endpoint Descriptions

### 1. 👤 User Endpoints
- **POST /users**: Register a new user.
- **POST /login**: Authenticate a user and generate a session token.
- **GET /users/{id}**: Retrieve user details by ID.
- **PUT /users/{id}**: Update user details by ID.

### 2. 🛒 Product Endpoints
- **GET /products**: Retrieve a list of all products with optional filters (e.g., category, price range).
- **POST /products**: Add a new product (Admin only).
- **PUT /products/{id}**: Update product details by ID (Admin only).
- **DELETE /products/{id}**: Delete a product by ID (Admin only).

### 3. 📦 Order Endpoints
- **POST /orders**: Place a new order.
- **GET /orders**: Retrieve a list of all orders (Admin) or user-specific orders.
- **PUT /orders/{id}**: Update the status of an order (e.g., "Processing", "Shipped").
- **DELETE /orders/{id}**: Cancel an order.

### 4. 💳 Payment Endpoints
- **POST /payments**: Initiate a payment for an order.
- **GET /payments/{id}**: Retrieve payment details by ID.
- **PUT /payments/{id}**: Update payment status (e.g., "Completed", "Failed").
- **DELETE /payments/{id}**: Process a refund for a payment.

### 5. 🛍️ Cart Endpoints
- **POST /cart**: Add a product to the cart.
- **GET /cart**: Retrieve the current user's cart.
- **PUT /cart/{id}**: Update the quantity of a product in the cart.
- **DELETE /cart/{id}**: Remove a product from the cart.