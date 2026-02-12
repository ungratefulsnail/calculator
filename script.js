/* ===========
  Selectors
=========== */
const keys = document.querySelector('.keys');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const modifiers = document.querySelectorAll('.modifier');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const input = document.querySelector('#input');

/* ================
  Event Listeners
================ */
/*
Single event listeners using event delegation - listen on the parent (.keys)
and determine which button was pressed based on its class.
Did this to avoid attaching listeners to each button and keeps it clean.
*/
keys.addEventListener('pointerdown', (e) => {
    if(e.target.classList.contains('number')) {
        handleNumbers(e.target.textContent);

    } else if(e.target.classList.contains('clear')) {
        handleClear();

    } else if(e.target.classList.contains('delete')) {
        handleDelete();

    } else if(e.target.classList.contains('operator')) {
        handleOperators(e.target.textContent);

    } else if(e.target.classList.contains('equals')) {
        handleEquals();
    }
});

/* ================
  Event Handlers
================ */
/*
Each one is responsible for a single action and it's triggered by a specific
button - they update the calculator state and display.
*/
function handleNumbers(digit) {
    if(currentValue === '0') currentValue = ''; // removes leading 0
    currentValue += digit;
    input.textContent = currentValue;
};

function handleClear() {
    // reset the current input
    previousValue = '';
    currentValue = ''; 
    currentOperator = '';
    input.textContent = '0';
};

function handleDelete() {
    currentValue = currentValue.slice(0, -1); // remove the last digit, backspace
    input.textContent = currentValue;
    if (currentValue === '') { // if all digits are deleted, show 0
        input.textContent = '0';
    }
};

function handleOperators(operator) {
    // Chaining case
    if(previousValue != '' && currentValue != '') { // if we have values on both of them
        // call operate and convert to numbers
        let result = operate(Number(previousValue), Number(currentValue), currentOperator);
        // store as the new previousValue & convert back to string to avoid future bugs
        previousValue = String(result); 
        currentOperator = operator;
        input.textContent = result;
        currentValue = '';
    // First operator case
    } else {
        previousValue = currentValue; // stores the first operand
        currentOperator = operator;
        input.textContent = previousValue;
        currentValue = ''; // removes the previousValue from the new currentValue
    }
};

function handleEquals() {
    // finish the current operation and display result
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    let result = operate(previousValue, currentValue, currentOperator);
    currentValue = String(result);
    input.textContent = result;
    previousValue = '';
    currentOperator = '';
};

/* ==============
  Math Functions
============== */
const add = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};
const multiply = function(a, b) {
    return a * b;
};
const divide = function(a, b) {
    return a / b;
};

/* ==================
  Operation dispatch
================== */
/*
Determines which operation to perform based on the selected operator.
Acts for all calculations and keeps the math logic separate from events and UI.
*/
const operate = function(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
};

/* ===============
  State Variables
=============== */
/*
Represents the current state of the calculator.
previousValue: stored value before an operation
currentValue: number currently being entered
currentOperator: selected math operator
 */
let previousValue = '';
let currentValue = '';
let currentOperator = '';

