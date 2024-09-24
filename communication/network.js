const { MongoClient } = require("mongodb");
const readline = require("readline");

// MongoDB credentials
const username = "mongoadmin"; // Replace with your MongoDB username
const password = "secret"; // Replace with your MongoDB password
const host = "some-mongo"; //name of container

// Connection URL with credentials
const url = `mongodb://${username}:${password}@${host}:27017`;

// MongoDB client
const client = new MongoClient(url);

// Database name
const dbName = "mydatabase";

// Create a readline interface to accept user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to connect to MongoDB and insert data
async function insertData(name, age) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("people");

    // Insert the provided data into MongoDB
    const result = await collection.insertOne({ name, age });
    console.log(`Data inserted with _id: ${result.insertedId}`);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    rl.close();
  }
}

// Get user input from terminal
rl.question("Enter name: ", (name) => {
  rl.question("Enter age: ", (age) => {
    insertData(name, parseInt(age)); // Call function to insert the data
  });
});
