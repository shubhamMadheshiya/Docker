// Import the necessary modules
const fs = require("fs");
const readline = require("readline");

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// File path to store the names
const filePath = "names.txt";

// Function to store the name in the file
const storeName = (name) => {
  fs.appendFile(filePath, name + "\n", (err) => {
    if (err) throw err;
    console.log("Name saved!");
    askToSeeNames();
  });
};

// Function to display all names from the file
const displayNames = () => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    if (data) {
      console.log("\nStored Names:");
      console.log(data);
    } else {
      console.log("No names found.");
    }
    rl.close();
  });
};

// Function to ask if the user wants to see all stored names
const askToSeeNames = () => {
  rl.question("Do you want to see all stored names? (yes/no): ", (answer) => {
    if (answer.toLowerCase() === "yes") {
      displayNames();
    } else {
      console.log("Goodbye!");
      rl.close();
    }
  });
};

// Start by asking for the name
rl.question("Enter a name to store: ", (name) => {
  storeName(name);
});
