# [Fullstack Tools](../) > Maven Installation Guide

## Introduction
Apache Maven is a powerful build automation tool used primarily for Java projects. It helps manage dependencies, build processes, and project structures efficiently. This guide will help you install Maven on your system.

## Step 1: Download Maven
1. Go to the official [Apache Maven Download](https://maven.apache.org/download.cgi) page.
2. Download the latest **binary zip file** for your operating system (Windows, macOS, or Linux).
3. Extract the downloaded file to a directory of your choice (e.g., `C:\Program Files\Apache\Maven` on Windows or `/opt/maven` on Linux/macOS).

## Step 2: Set Up Environment Variables
### On Windows:
1. Open **System Properties > Advanced > Environment Variables**.
2. Add a new system variable:
   - **Variable name:** `MAVEN_HOME`
   - **Variable value:** Path to the extracted Maven directory (e.g., `C:\Program Files\Apache\Maven`)
3. Edit the `Path` variable and add `%MAVEN_HOME%\bin`.

### On macOS and Linux:
1. Open the terminal and edit your shell profile file:
   ```sh
   nano ~/.bashrc  # or ~/.zshrc
   ```
2. Add the following lines:
   ```sh
   export MAVEN_HOME=/opt/maven
   export PATH=$MAVEN_HOME/bin:$PATH
   ```
3. Apply changes:
   ```sh
   source ~/.bashrc
   ```

## Step 3: Verify Installation
To check if Maven is installed correctly, run the following command:
```sh
mvn -version
```
If installed successfully, you should see output similar to:
```
Apache Maven 3.x.x (latest version)
Maven home: /path/to/maven
Java version: 1.8.0_xxx, vendor: Oracle Corporation
```

## Step 4: Run a Sample Maven Project
1. Open a terminal or command prompt and create a new Maven project:
   ```sh
   mvn archetype:generate -DgroupId=com.example -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
   ```
2. Navigate into the project directory:
   ```sh
   cd my-app
   ```
3. Build the project:
   ```sh
   mvn package
   ```
4. Run the application:
   ```sh
   java -cp target/my-app-1.0-SNAPSHOT.jar com.example.App
   ```

## Conclusion
You have successfully installed Maven on your system! You can now use it to manage dependencies and build Java projects efficiently.

---

[← Fullstack Tools ](../)

---