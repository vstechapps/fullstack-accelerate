# MongoDB Installation Guide

## Introduction
MongoDB is a popular NoSQL database designed for scalability and flexibility. This guide will help you install MongoDB on your system and set up a basic database.

## Step 1: Download MongoDB
1. Go to the official [MongoDB Download Center](https://www.mongodb.com/try/download/community).
2. Select the latest **Community Server** version for your operating system.
3. Download and install MongoDB following the provided instructions.

## Step 2: Install MongoDB
### On Windows:
1. Run the downloaded `.msi` file.
2. Follow the installation wizard and select **Complete Installation**.
3. Ensure the **MongoDB Database Server** option is checked.
4. Optionally, install **MongoDB Compass** (GUI tool for MongoDB).
5. Complete the installation and restart your system if necessary.

### On macOS:
1. Open the terminal and install MongoDB using Homebrew:
   ```sh
   brew tap mongodb/brew
   brew install mongodb-community@6.0
   ```
2. Start the MongoDB service:
   ```sh
   brew services start mongodb-community@6.0
   ```
3. Verify installation:
   ```sh
   mongod --version
   ```

### On Linux (Ubuntu/Debian):
1. Import the MongoDB public key:
   ```sh
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   ```
2. Add the MongoDB repository:
   ```sh
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   ```
3. Update package lists and install MongoDB:
   ```sh
   sudo apt update
   sudo apt install -y mongodb-org
   ```
4. Start MongoDB service:
   ```sh
   sudo systemctl start mongod
   ```
5. Enable MongoDB to start on boot:
   ```sh
   sudo systemctl enable mongod
   ```

## Step 3: Verify MongoDB Installation
Run the following command to check if MongoDB is running:
```sh
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

## Step 4: Create and Use a Database
1. Open the MongoDB shell:
   ```sh
   mongo
   ```
2. Create a new database:
   ```sh
   use mydatabase
   ```
3. Insert a document into a collection:
   ```sh
   db.users.insertOne({ name: "John Doe", age: 30 })
   ```
4. Retrieve the document:
   ```sh
   db.users.find().pretty()
   ```

## Step 5: Run an Example Node.js MongoDB Connection
1. Install the MongoDB Node.js driver:
   ```sh
   npm install mongodb
   ```
2. Create a new JavaScript file `app.js`:
   ```js
   const { MongoClient } = require('mongodb');

   const uri = "mongodb://localhost:27017";
   const client = new MongoClient(uri);

   async function run() {
       try {
           await client.connect();
           console.log("Connected to MongoDB");
           const database = client.db("mydatabase");
           const users = database.collection("users");
           const user = await users.findOne({ name: "John Doe" });
           console.log(user);
       } finally {
           await client.close();
       }
   }
   run().catch(console.error);
   ```
3. Run the script:
   ```sh
   node app.js
   ```

## Conclusion
You have successfully installed MongoDB, created a database, and connected it with a Node.js application. You can now start developing applications using MongoDB!
