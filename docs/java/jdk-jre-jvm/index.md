# [Java](../) > JDK, JRE and JVM

# Understanding JDK, JRE and JVM

Java is a powerful programming language, and to execute Java programs efficiently, we need an understanding of three key components: **JDK (Java Development Kit), JRE (Java Runtime Environment), and JVM (Java Virtual Machine).** Each plays a vital role in Java program execution.

## 1. **Java Virtual Machine (JVM)**
JVM is the core of Java's platform independence. It is an abstract machine responsible for executing Java bytecode, making Java programs portable across different operating systems.

### **Functions of JVM:**
- Converts **bytecode** into **machine code** using the Just-In-Time (JIT) compiler.
- Manages **memory allocation** and **garbage collection**.
- Provides **runtime environment** for Java applications.
- Ensures **security** by running code inside a sandbox environment.

### **JVM Workflow:**
1. The Java program is compiled into **bytecode** (`.class` file).
2. The bytecode is loaded into the JVM by the **ClassLoader**.
3. The **Bytecode Verifier** checks for illegal code.
4. The JIT Compiler translates bytecode into native machine code for execution.
5. The JVM executes the code, handling memory management and garbage collection.

## 2. **Java Runtime Environment (JRE)**
JRE is a package that provides all the necessary libraries and components to run Java programs. It contains:
- The **JVM**, which executes Java programs.
- **Java Class Libraries (rt.jar)**, containing essential classes and utilities.
- **Support files**, such as configuration files and other dependencies.

### **JRE's Role:**
- Required to **run** Java applications.
- Provides necessary **libraries** and **resources**.
- Ensures smooth **execution of Java programs**.

> **Note:** JRE does not include development tools like compilers and debuggers, so it cannot be used to develop Java applications.

## 3. **Java Development Kit (JDK)**
JDK is a **complete package** for Java development. It contains everything needed to **write, compile, debug, and run** Java applications.

### **Components of JDK:**
1. **JRE** - Includes JVM and standard libraries to execute Java programs.
2. **Java Compiler (javac)** - Converts `.java` source files into `.class` bytecode.
3. **Debugger (jdb)** - Helps in debugging Java applications.
4. **Java Archive (JAR) Tool** - Packages multiple class files into a single JAR file.
5. **Other Development Tools** - Includes JavaDoc (for documentation), keytool, and security tools.

### **JDK Versions:**
- **Oracle JDK** (Official release by Oracle, requires licensing for commercial use after JDK 8).
- **OpenJDK** (Open-source implementation, free to use).
- Other distributions like Amazon Corretto, Azul Zulu, and AdoptOpenJDK.

## **Differences Between JDK, JRE, and JVM**

| Feature       | JVM | JRE | JDK |
|--------------|-----|-----|-----|
| Used for Development | ❌ | ❌ | ✅ |
| Contains Compiler | ❌ | ❌ | ✅ |
| Contains Libraries | ❌ | ✅ | ✅ |
| Contains JVM | ✅ | ✅ | ✅ |
| Used for Running Java Applications | ✅ | ✅ | ✅ |

## **Example: Compilation and Execution Process**
```java
// Sample Java Program
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
### **Steps to Execute:**
1. **Compilation (`javac HelloWorld.java`)**:
   - The JDK compiler converts the `.java` file into a `.class` (bytecode) file.
2. **Execution (`java HelloWorld`)**:
   - The JVM loads the `.class` file, translates it into machine code, and runs the program.

## **Conclusion**
- **JVM** is responsible for executing Java programs.
- **JRE** provides the necessary environment to run Java applications.
- **JDK** includes JRE plus additional tools for Java development.

Understanding these components is essential for both beginners and advanced Java developers, as they form the foundation of Java's execution process.

---

[← Features](../introduction) | [Datatypes →](../datatypes)

---

🔗 **Related Topics:**
- [Introduction](../introduction/)
- [History and Evolution](../history-evolution/)
- [Java Features](../features)
- [JDK / JRE / JVM](../jdk-jre-jvm)
- [Install JDK](../install-jdk)
- [Install IDE](../install-ide/)
- [Hello Java](../hellojava/)

---