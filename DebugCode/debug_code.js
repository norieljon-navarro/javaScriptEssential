function performOperation() {
    // Get user input from input fields
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;
    let result;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                result = 'Invalid operation';
        }
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b) {
    // Add the numbers
    return a + b;
}

function multiply(a, b) {
    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    // Divide the numbers
    debugger;
    if (b !== 0) {
        return a / b;
    } else {
        return 'Cannot divide by zero';
    }    
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}