# [Java](../) > Java Installation Guide

## Introduction
Java is a powerful, object-oriented programming language used for building cross-platform applications, including web, desktop, and mobile applications. This guide will help you install Java on your system.

## Step 1: Download Java
1. Go to the official [Oracle Java Download](https://www.oracle.com/java/technologies/javase-downloads.html) page.
2. Select the latest Java SE version and download the installer suitable for your operating system (Windows, macOS, or Linux).

## Step 2: Install Java
### On Windows:
1. Run the downloaded `.exe` file.
2. Follow the installation wizard and complete the setup.
3. Once installed, verify the installation by running the following command in Command Prompt:
   ```sh
   java -version
   ```

### On macOS:
1. Run the downloaded `.dmg` file and follow the installation instructions.
2. Verify installation using:
   ```sh
   java -version
   ```

### On Linux:
1. Open the terminal and run:
   ```sh
   sudo apt update
   sudo apt install default-jdk
   ```
2. Verify installation:
   ```sh
   java -version
   ```

## Step 3: Set Up JAVA_HOME Environment Variable
Setting up the `JAVA_HOME` variable is essential for Java-based applications.

### On Windows:
1. Open System Properties > Advanced > Environment Variables.
2. Add a new system variable:
   - **Variable name:** JAVA_HOME
   - **Variable value:** Path to Java installation (e.g., `C:\Program Files\Java\jdk-XX.X.X`)

### On macOS and Linux:
1. Open the terminal and edit your profile file:
   ```sh
   nano ~/.bashrc  # or ~/.zshrc
   ```
2. Add the following line:
   ```sh
   export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))
   ```
3. Apply changes:
   ```sh
   source ~/.bashrc
   ```

## Step 4: Verify Installation
Run the following command to check if Java is correctly installed and configured:
```sh
java -version
```

## Step 5: Run an Example Java Program
1. Open a text editor and create a new file named `HelloWorld.java`.
2. Copy and paste the following Java code:
   ```java
   public class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```
3. Save the file and navigate to the directory where it is saved using the terminal or command prompt.
4. Compile the program using:
   ```sh
   javac HelloWorld.java
   ```
5. Run the compiled Java program:
   ```sh
   java HelloWorld
   ```
6. You should see the output:
   ```sh
   Hello, World!
   ```

## Conclusion
You have successfully installed Java on your system!

🔗 **Related Topics:**
- [Install IDE](../install-ide)
