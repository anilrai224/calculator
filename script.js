let resultEl = document.getElementById('display-area')
let num1 = 0
let num2 = 0
let isOperatorGiven = false
let operator = 'none'

function one() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 1
        resultEl.textContent = num1

    } else {
        num2 = num2 * 10 + 1
        resultEl.textContent = num1 + operator + num2
    }
}
function two() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 2
        resultEl.textContent = num1

    } else {
        num2 = num2 * 10 + 2
        resultEl.textContent = num1 + operator + num2

    }
}
function three() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 3
        resultEl.textContent = num1

    } else {
        num2 = num2 * 10 + 3
        resultEl.textContent = num1 + operator + num2

    }
}
function four() {
    resultEl.textContent = 4;
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 4
        resultEl.textContent = num1

    } else {
        num2 = num2 * 10 + 4
        resultEl.textContent = num1 + operator + num2

    }
}
function five() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 5
        resultEl.textContent = num1

    } else {
        num2 = num2 * 10 + 5
        resultEl.textContent = num1 + operator + num2

    }
}
function six() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 6
        resultEl.textContent = num1

    } else {
        num2 = num2 * 10 + 6
        resultEl.textContent = num1 + operator + num2

    }
}
function seven() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 7
        resultEl.textContent = num1
    } else {
        num2 = num2 * 10 + 7
        resultEl.textContent = num1 + operator + num2

    }
}
function eight() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 8
        resultEl.textContent = num1
    } else {
        num2 = num2 * 10 + 8
        resultEl.textContent = num1 + operator + num2
    }
}
function nine() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 9
        resultEl.textContent = num1
    } else {
        num2 = num2 * 10 + 9
        resultEl.textContent = num1 + operator + num2
    }
}
function zero() {
    if (isOperatorGiven == false) {
        num1 = num1 * 10 + 0
        resultEl.textContent = num1
    } else {
        num2 = num2 * 10 + 0
        resultEl.textContent = num1 + operator + num2
    }
}

function add() {
    isOperatorGiven = true
    operator = '+'
    resultEl.textContent = num1 + operator
}
function mul() {
    isOperatorGiven = true
    operator = '*'
    resultEl.textContent = num1 + operator
}
function div() {
    isOperatorGiven = true
    operator = '/'
    resultEl.textContent = num1 + operator
}
function sub() {
    isOperatorGiven = true
    operator = '-'
    resultEl.textContent = num1 + operator
}

function reset() {
    num1 = 0
    num2 = 0
    resultEl.textContent = num1
}


function operation() {
    if (operator == '+') {
        console.log(num1)
        console.log(num2)
        resultEl.innerText = num1 + num2
        num1 = 0
        num2 = 0
        isOperatorGiven = false
    } else if (operator == '*') {
        console.log(num1)
        console.log(num2)
        resultEl.innerText = num1 * num2
        num1 = 0
        num2 = 0
        isOperatorGiven = false
    } else if (operator == '/') {
        console.log(num1)
        console.log(num2)
        resultEl.innerText = num1 / num2
        num1 = 0
        num2 = 0
        isOperatorGiven = false
    } else {
        console.log(num1)
        console.log(num2)
        resultEl.innerText = num1 - num2
        num1 = 0
        num2 = 0
        isOperatorGiven = false
    }
}