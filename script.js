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
// numbers.forEach((number) => {
//     number.addEventListener('pointerdown', () => {
//         input.textContent = number.textContent;
//     });
// });

keys.addEventListener('pointerdown', (e) => {
    if(e.target.classList.contains('number')) {
        currentValue += e.target.textContent;
        input.textContent = currentValue;
    } else if(e.target.classList.contains('clear')) {
        currentValue = '';
        input.textContent = '0';
    }
})

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
} ;

/* ===============
  State Variables
=============== */
let previousValue;
let currentValue = '';
let currentOperator;

