// Function to perform the operation based on user input
function calculator() {
    // Prompt the user for the first number
    let num1 = parseFloat(prompt("Enter the first number:"));
    
    // Prompt the user for the second number
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    // Prompt the user to choose an operation
    let operation = prompt("Enter the operation (+, -, *, /):");
    
    let result;
    
    // Perform the desired operation based on the user input
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Check for division by zero
            if (num2 === 0) {
                alert("Error: Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation!");
            return;
    }
    
    // Display the result
    alert("Result: " + result);
}

// Call the calculator function
calculator();
