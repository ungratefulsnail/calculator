const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const modifiers = document.querySelectorAll('.modifiers');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const input = document.querySelector('#input');

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

alert(divide(30, 5));