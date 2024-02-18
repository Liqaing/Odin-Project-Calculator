const convertToNum = function(value) {
    try {
        value = value * 1;
    }
    catch (error) {
        console.log(error);
        value = 0;
    }
    return value;
}

const add = function(num1, num2) {
    num1 = convertToNum(num1);
    num2 = convertToNum(num2);
    return num1 + num2;
}

const subtract = function(num1, num2) {
    num1 = convertToNum(num1);
    num2 = convertToNum(num2);
    return num1 - num2;
}

const multiply = function(num1, num2) {
    num1 = convertToNum(num1);
    num2 = convertToNum(num2);
    return num1 * num2;
}

const divide = function(num1, num2) {
    num1 = convertToNum(num1);
    num2 = convertToNum(num2);
    return num1 / num2;
}

const sqareRoot = function(num) {
    num = convertToNum(num)
    return Math.sqrt(num)
}

let num1;
let num2;
let operator;

const operate = function(num1, num2 = 0, operate) {
    let result;
    switch(operate) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;

        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case '√':
            result = sqareRoot(num1);
            break;
        default:
            console.log("No operator");
            result = 0;
            break;
    }
    return result;
}

// Display value into calculator box
const displayValue = function(value) {
    
    const calculatorBox = document.querySelector("input"); 
    
    // Format and display to inpubox
    // const num = convertToNum(calculatorBox.value += value)
    // console.log(num.toLocaleString())
    calculatorBox.value = calculatorBox.value += value;

    // Scroll to left ot display latest input number
    calculatorBox.scrollLeft = calculatorBox.scrollWidth;
}

// Clear calculator box
const clearDisplay = function() {
    const calculatorBox = document.querySelector("input"); 
    calculatorBox.value = "";
}

const clearAll = function() {
    const calculatorBox = document.querySelector("input"); 
    calculatorBox.value = "";
    
    inputNum1 = 0;
    inputNum2 = 0;
}

const retrieveValue = function() {
    const calculatorBox = document.querySelector("input"); 
    return calculatorBox.value;
}

const backward = function() {
    value = retrieveValue();
    value = value.slice(0, value.length - 1);
    clearDisplay()
    displayValue(value);
    return value;
}

const equal = function(value) {
    displayValue(value);
}

let inputNum1;
let inputNum2;
let inputOperator;
let result;
let specialInputOperator;

const buttonContainer = document.querySelector(".container");
buttonContainer.addEventListener("click", (e) => {
    
    // User click on number value
    if (e.target.classList.contains("value")) {
        if (result) {
            clearDisplay();
            result = 0;
        }
        displayValue(e.target.textContent);
    }
    // User click on operator
    else if (e.target.classList.contains("operator")) {

        if (result) {
            clearDisplay();
            result = 0;
        }

        // Store input value in a variable
        if (!inputNum1) {
            inputNum1 = retrieveValue();
            clearDisplay();
        }
        else {
            inputNum2 = retrieveValue();            
            clearDisplay();
        }
        
        // Calculate result if user click on operator again and two input value is filled
        if (inputNum1 && inputNum2 && inputOperator) {
            result = operate(inputNum1, inputNum2, inputOperator);
            clearAll();
            displayValue(result);
            inputNum1 = result;
        }

        inputOperator = e.target.textContent;
        
        if (inputOperator === '√') {
            result = operate(inputNum1, undefined, inputOperator);
            clearAll();
            displayValue(result);
            inputNum1 = result;
        }
    }
    else {
        specialInputOperator = e.target.textContent;
        switch(specialInputOperator) {
            case 'C':
                clearAll();
                result = 0;
                break;
            case '⌫':
                if (inputNum2) {
                    inputNum2 = backward();
                }
                else {
                    inputNum1 = backward()
                }
                break;
            case '=':
                if (!inputNum2) {
                    inputNum2 = retrieveValue();
                }

                if (inputNum1 && inputNum2) {
                    result = operate(inputNum1, inputNum2, inputOperator);
                    clearAll();
                    displayValue(result);
                    inputNum1 = result;
                }
                break;
                
        }
    }
});