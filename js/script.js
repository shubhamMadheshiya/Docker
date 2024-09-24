// Import the readline module to read input from the terminal
const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for the first number
rl.question("Enter the first number: ", (num1) => {
  // Ask for the second number
  rl.question("Enter the second number: ", (num2) => {
    // Convert the input strings to numbers and calculate the sum
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    // Close the readline interface
    rl.close();
  });
});
