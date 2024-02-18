const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

let num1;
let num2;
let operator;

const operate = function(num1, num2, operate) {
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
    }
    return result;
}

const calculatorBox = document.querySelector("input"); 
const buttonContainer = document.querySelector(".container");
buttonContainer.addEventListener("click", (e) => {
    // Display value of element on screen
    if (e.target.classList.contains("value")) {
        calculatorBox.value += e.target.textContent;

        // Scroll to left ot display latest input number
        calculatorBox.scrollLeft = calculatorBox.scrollWidth;
    }
});