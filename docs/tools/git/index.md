# [Fullstack Tools](../) > > Git Installation Guide

## GIT
Git is a distributed version control system widely used for source code management.
It allows multiple developers to work on a project simultaneously without overwriting each other's changes.
This guide will help you install Git on your system and introduce you to a graphical user interface (GUI) for easier management.

## Step 1: Install Git
### On Windows:
1. Download the Git for Windows installer from the [official website](https://gitforwindows.org/).
2. Run the installer and follow the on-screen instructions.
3. During installation, when prompted to select components, ensure that "Git GUI Here" is checked to install the Git GUI tool.

### On macOS:
1. Open the Terminal application.
2. Install Git using Homebrew by running:
   ```sh
   brew install git
   ```
3. Alternatively, download the Git installer for macOS from the [official website](https://git-scm.com/download/mac) and follow the prompts.

### On Linux:
1. Open the terminal.
2. Use the package manager specific to your distribution to install Git:
   - **Debian/Ubuntu:**
     ```sh
     sudo apt-get install git
     ```
   - **Fedora:**
     ```sh
     sudo dnf install git
     ```
   - **Arch Linux:**
     ```sh
     sudo pacman -S git
     ```

## Step 2: Verify Installation
To confirm that Git is installed correctly, open your terminal or command prompt and run:
```sh
git --version
```
If installed successfully, you should see output similar to:
```
git version 2.x.x
```
where `2.x.x` represents the installed Git version.

## Step 3: Configure Git
Set your user name and email:
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Github Desktop

![Github Desktop](https://git-scm.com/images/guis/github-desktop@2x.png)

*Figure: Git GUI Interface*

### Usage of Git

- Clone repositories.
- Commit and push changes.
- View commit history.
- Manage branches and merges.

---

[← Fullstack Tools ](../)

---

## References
[Git Documentation](https://git-scm.com/doc)
