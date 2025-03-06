# Angular Installation Guide

## Introduction
Angular is a popular framework for building web applications using TypeScript. This guide will help you install Angular and set up a new project.

## Step 1: Install Node.js
Angular requires Node.js to manage dependencies.
1. Download and install Node.js from [Node.js official website](https://nodejs.org/).
2. Verify installation by running the following commands:
   ```sh
   node -v
   npm -v
   ```

## Step 2: Install Angular CLI
Angular CLI (Command Line Interface) is used to create and manage Angular projects.
1. Open a terminal or command prompt and run:
   ```sh
   npm install -g @angular/cli
   ```
2. Verify installation:
   ```sh
   ng version
   ```

## Step 3: Create a New Angular Project
1. Navigate to the directory where you want to create your project.
2. Run the following command to create a new project:
   ```sh
   ng new my-angular-app
   ```
3. Navigate to the project folder:
   ```sh
   cd my-angular-app
   ```

## Step 4: Serve the Application
1. Start the development server by running:
   ```sh
   ng serve
   ```
2. Open a browser and go to `http://localhost:4200/` to see the running Angular application.

## Step 5: Run an Example Angular Component
1. Generate a new component:
   ```sh
   ng generate component hello-world
   ```
2. Open `src/app/hello-world/hello-world.component.ts` and modify it:
   ```ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-hello-world',
     template: '<h1>Hello, Angular!</h1>',
     styles: ['h1 { color: blue; }']
   })
   export class HelloWorldComponent {}
   ```
3. Open `src/app/app.component.html` and add:
   ```html
   <app-hello-world></app-hello-world>
   ```
4. Save and restart the server if needed.
5. You should see "Hello, Angular!" displayed in blue.

## Conclusion
You have successfully installed Angular and created your first component! You can now start building powerful web applications with Angular.
