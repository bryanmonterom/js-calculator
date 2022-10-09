let operations = ['', '', ''];
let displayValue = ''
let operandA;
let operandB;
let operandC;
let operator = '';

//Math Operations
function add(operandA, operandB) {
    return operandA + operandB;
}

function substract() {
    return operandA - operandB;
}

function multiply() {
    return operandA * operandB;
}

function divide() {
    return operandA / operandB;

}

//Math Operations

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return add(+a, +b);
        case '-':
            return substract(+a, +b);
        case '*':
            return multiply(+a, +b);
        case '/':
            return divide(+a, +b);
        default:
            break;
    }
}

//Display Handling
function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = 0;
}

function setDisplayValue(valuePresed) {
    const display = document.getElementById('display');
    display.textContent = +valuePresed;
}

function getDisplayValue() {
    return document.getElementById('display').textContent;
}

function populateDisplay(value) {
    let valuePresed = value.target.attributes.value.value;
    setDisplayValue(getDisplayValue() + valuePresed);

}
//Display Handling





function getResult() {


    
    // if (typeof operandB == "undefined" ) {
    //     operandB = getDisplayValue();
    // }
    operandB = getDisplayValue();



    clearDisplay();

    let results = operate(operandA, operator, operandB)

    setDisplayValue(results);
    console.log(results);
    return results;
}

function prepareOperation(value) {
    if (/*operandA !== 0 &&*/ typeof operandA !== "undefined") {
        operandB = getDisplayValue();
        operandA = getResult();
        operator = value.target.attributes.value.value;
        // setDisplayValue(operandA)
        clearDisplay();

    }
    else{
        operandA = getDisplayValue();

        clearDisplay();
    }
    operator = value.target.attributes.value.value;

    // if (operandA !== 0 && operandB !== 0) {
    //     // operandA = getResult();
    //     // clearDisplay();
    //     // setDisplayValue(operandA)

    // }
  
    //    console.log(operatorPressed);

}




//Events Listeners

function addOperandEventLister() {
    const operands = document.querySelectorAll('[data-type="operand"]');
    operands.forEach(operand => {
        operand.addEventListener('click', populateDisplay);
    })
    // console.log(operands);
}
function addOperatorEventLister() {
    const operators = document.querySelectorAll('[data-type="operator"]');
    operators.forEach(operator => {
        operator.addEventListener('click', prepareOperation);
    })
    // console.log(operands);
}
function addEqualEventLister() {
    const operator = document.querySelector('[data-type="equal"]');
    operator.addEventListener('click', getResult);

    // console.log(operands);
}

//Events Listeners


addOperandEventLister();
addOperatorEventLister();
addEqualEventLister();
