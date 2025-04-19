# 📘 [Angular](../) > Routing

## 🏗️ Angular Routing

Angular Routing is a powerful feature that allows you to create single-page applications (SPAs) by navigating between different views or components without reloading the entire page. It provides a way to define routes, manage navigation, and pass data between components.

This guide explains the core concepts of Angular Routing and how to implement it in your application.

---

### 🛠️ Setting Up Angular Routing

To use Angular Routing, you need to configure the `RouterModule` in your application module. This is typically done during project creation or manually added later.

#### Steps to Set Up Routing:
1. Enable Routing During Project Creation: When creating a new Angular project using the CLI, you can enable routing by adding the `--routing` flag.
2. Manually Add Routing: If routing is not enabled during project creation, you can manually add it by importing `RouterModule` and `Routes` from `@angular/router`, defining your routes in a `Routes` array, and adding `RouterModule.forRoot(routes)` to the `imports` array in your `AppModule`.

---

### 🚀 Defining Routes

Routes are defined as an array of objects, where each object specifies a path and the component to display for that path. You can also define default routes, wildcard routes for 404 pages, and nested child routes for hierarchical navigation.

---

### 📄 Key Features of Angular Routing

Angular Routing provides several powerful features, including:
- Route Parameters: Pass dynamic data through the URL using route parameters.
- Query Parameters: Pass optional data using query strings.
- Lazy Loading: Load modules on demand to improve performance and reduce the initial load time.
- Guards: Control access to routes using route guards like `CanActivate` and `CanDeactivate`.
- Child Routes: Define nested routes for hierarchical navigation.
- Router Events: Listen to navigation events for advanced use cases like analytics or loading indicators.

---

### 🔄 Navigating Between Routes

You can navigate between routes programmatically or using the `routerLink` directive in templates. Programmatic navigation is useful for dynamic routing based on user actions or conditions.

---

### 📜 Route Parameters

Route parameters allow you to pass dynamic data through the URL. This is useful for scenarios like displaying user profiles or product details based on an ID in the URL. You can access route parameters using the `ActivatedRoute` service.

---

### 📄 Query Parameters

Query parameters are optional and can be appended to the URL to pass additional data. They are commonly used for search filters, pagination, or sorting. You can access query parameters using the `ActivatedRoute` service.

---

### 🔒 Route Guards

Route guards are used to control access to routes based on conditions. Common guards include `CanActivate` to prevent navigation to a route and `CanDeactivate` to prevent navigation away from a route. Guards are useful for implementing authentication, authorization, or unsaved changes warnings.

---

### 🌟 Lazy Loading

Lazy loading allows you to load feature modules only when they are needed, improving the initial load time of your application. This is especially useful for large applications with multiple modules.

---

### 📡 Router Events

You can listen to router events to track navigation progress or handle custom logic. Common events include `NavigationStart`, `NavigationEnd`, and `NavigationError`. These events are useful for implementing features like loading spinners or analytics tracking.

---

### 🔄 Lifecycle of Angular Routing

The Angular Router lifecycle includes the following steps:
1. Recognize Route: Matches the URL to a route definition.
2. Resolve Guards: Executes route guards to determine access.
3. Activate Route: Instantiates the component associated with the route.
4. Render View: Displays the component's view in the `RouterOutlet`.

---

### 🔑 Key Benefits of Angular Routing

- Enables seamless navigation without full-page reloads, creating a single-page application experience.
- Supports dynamic and parameterized routes for flexible navigation.
- Improves performance with lazy loading, reducing the initial load time.
- Provides robust access control mechanisms with route guards.
- Scales well for large applications with modular routing structures.

---

Mastering Angular Routing is essential for building modern, scalable, and user-friendly single-page applications. Understanding its features and best practices will help you create efficient navigation systems for your Angular projects.