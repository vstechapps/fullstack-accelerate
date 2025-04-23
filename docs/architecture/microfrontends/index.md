# Micro Frontends Architecture

Micro Frontends is an architectural style where a frontend app is decomposed into individual, semi-independent "micro-apps" that are owned by different teams and developed, tested, and deployed independently.

This approach extends the principles of microservices to the frontend, helping to scale frontend development across multiple teams and codebases.

---

## Why Micro Frontends?

Micro Frontends solve key challenges in large frontend applications:

- **Scalability**: Teams can work independently on different parts of the frontend.
- **Flexibility**: Different frameworks or versions can coexist across different micro-apps.
- **Independent Deployment**: Each micro-frontend can be deployed without redeploying the entire frontend.
- **Code Ownership**: Teams have full ownership over their UI features.
- **Maintainability**: Smaller, isolated codebases are easier to manage and test.

---

## Micro Frontend Components

### 1. Micro App

Each **micro app** is a self-contained frontend module responsible for a distinct feature or domain of the application. Examples include:

- User Profile  
- Shopping Cart  
- Admin Dashboard  

Each micro app can be:

- Built with a specific frontend framework (Angular, React, Vue, etc.)
- Developed and deployed independently
- Loaded dynamically at runtime or during the build phase

---

### 2. Shell (Container Application)

The **Shell** (also called Host or Container) is the main application responsible for:

- Bootstrapping the overall frontend
- Orchestrating which micro apps are loaded and when
- Handling shared concerns like authentication, routing, layout, and state management

The shell can use integration strategies like:

- **Module Federation** (Webpack 5)
- **Single-SPA**
- **Iframe-based embedding** (legacy)

---

### 3. Routing and Composition

Routing in a micro frontend setup can be handled:

- **Centrally in the Shell** (e.g., using Angular Router)
- **Decentralized**, where each micro app handles its own routing

Apps are composed into the shell:

- **Statically** during build time (e.g., monorepo)
- **Dynamically** during runtime (e.g., remote modules with Webpack Module Federation)

---

### 4. Shared Libraries and Dependencies

To avoid duplication and reduce bundle size, micro apps can share:

- UI libraries (e.g., Angular Material, Tailwind)
- State management libraries
- Utility functions

These shared dependencies are typically declared as `singletons` when using Module Federation.

---

## Micro Frontends in Fullstack Applications

### With Angular

- Each micro app is an Angular project (or module) with its own `main.ts`, `AppModule`, routes, and components.
- The shell application integrates all micro apps and handles root-level concerns.
- Shared services (like authentication, config, etc.) are injected via the shell or imported as shared libraries.

### Integration Strategies

- **Module Federation** (Webpack 5) — Recommended for modern Angular setups  
- **Single-SPA** — Framework-agnostic and highly flexible  
- **Custom Integration** — Using dynamic script injection or iframes  

---

## Folder Structure Example

```plaintext

microfrontends-app/
├── shell-app/
│   ├── src/
│   ├── webpack.config.js
│   ├── angular.json
├── user-profile-app/
│   ├── src/
│   ├── webpack.config.js
│   ├── angular.json
├── orders-app/
│   ├── src/
│   ├── webpack.config.js
│   ├── angular.json
└── shared-lib/
    ├── src/

```
