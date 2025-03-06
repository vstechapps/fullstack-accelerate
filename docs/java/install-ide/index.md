# [Java](../) >  Visual Studio Code (VS Code) Installation
### Introduction
VS Code is a popular code editor with extensive extensions and debugging tools.

### Installation Steps
1. Download from [VS Code](https://code.visualstudio.com/).
2. Run the installer and follow the setup instructions.
3. Open VS Code and install necessary extensions.


# Setting Up Java in Visual Studio Code

## 1. Install Java Extension Pack
1. Open VS Code.
2. Click on the **Extensions** icon in the left sidebar or press `Ctrl+Shift+X`.
3. Search for **Java Extension Pack**.
4. Click **Install** to add the extension pack.
5. Restart VS Code if needed.

## 2. Prerequisite Java Development Kit (JDK)
1. [Install Java](..install-jdk)

## 4. Create a Java Program
1. Open VS Code.
2. Click on **File > Open Folder** and select or create a new folder for your Java project.
3. Click **New File** and name it `HelloWorld.java`.
4. Add the following Java code:
   ```java
   public class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```
5. Save the file (`Ctrl+S`).

## 5. Run the Java Program
### Using the VS Code Run Button:
1. Click on the **Run** button (`▶` symbol) at the top right corner.
2. Select **Run Java File**.
3. The output should appear in the terminal:
   ```
   Hello, World!
   ```

### Using the Terminal:
1. Open the terminal in VS Code (`Ctrl+`` `).
2. Navigate to the folder containing `HelloWorld.java`.
3. Compile the program:
   ```sh
   javac HelloWorld.java
   ```
4. Run the compiled program:
   ```sh
   java HelloWorld
   ```
5. You should see:
   ```
   Hello, World!
   ```


