# Node.js Installation Guide

## Introduction
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable and fast web applications. This guide will help you install Node.js on your system.

## Step 1: Download Node.js
1. Go to the official [Node.js Download](https://nodejs.org/) page.
2. Choose the **LTS (Long Term Support)** version for stability or the **Current** version for the latest features.
3. Download the installer suitable for your operating system (Windows, macOS, or Linux).

## Step 2: Install Node.js
### On Windows:
1. Run the downloaded `.msi` file.
2. Follow the installation wizard and complete the setup.
3. Verify the installation by running the following commands in Command Prompt:
   ```sh
   node -v
   npm -v
   ```

### On macOS:
1. Run the downloaded `.pkg` file and follow the installation instructions.
2. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### On Linux (Using Package Manager):
#### Ubuntu/Debian:
1. Open the terminal and run:
   ```sh
   sudo apt update
   sudo apt install nodejs npm
   ```
2. Verify installation:
   ```sh
   node -v
   npm -v
   ```

#### Using Node Version Manager (NVM):
1. Install NVM:
   ```sh
   curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
   ```
2. Close and reopen the terminal, then install Node.js:
   ```sh
   nvm install --lts
   ```
3. Verify installation:
   ```sh
   node -v
   npm -v
   ```

## Step 3: Set Up NODE_HOME Environment Variable
Setting up the `NODE_HOME` variable ensures proper Node.js configuration.

### On Windows:
1. Open System Properties > Advanced > Environment Variables.
2. Add a new system variable:
   - **Variable name:** NODE_HOME
   - **Variable value:** Path to Node.js installation (e.g., `C:\Program Files\nodejs`)

### On macOS and Linux:
1. Open the terminal and edit your profile file:
   ```sh
   nano ~/.bashrc  # or ~/.zshrc
   ```
2. Add the following line:
   ```sh
   export NODE_HOME=$(dirname $(dirname $(which node)))
   ```
3. Apply changes:
   ```sh
   source ~/.bashrc
   ```

## Step 4: Verify Installation
Run the following command to check if Node.js and npm are correctly installed:
```sh
node -v
npm -v
```

## Step 5: Run an Example Node.js Program
1. Open a text editor and create a new file named `app.js`.
2. Copy and paste the following Node.js code:
   ```js
   console.log("Hello, Node.js!");
   ```
3. Save the file and navigate to the directory where it is saved using the terminal or command prompt.
4. Run the program using:
   ```sh
   node app.js
   ```
5. You should see the output:
   ```sh
   Hello, Node.js!
   ```

## Conclusion
You have successfully installed Node.js on your system! You can now start building server-side applications using JavaScript.
