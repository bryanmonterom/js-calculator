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

function percentage() {
    setDisplayValue(getDisplayValue() / 100)
}

function inverse() {
    setDisplayValue(getDisplayValue()*-1)
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
        case '%':
            return divide((+a)/100);
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

function populateDisplaywithKeyboard(value) {
    if(value.key == '.'){
        appendDecimal()
        return;
    } if(value.key == '%'){
        percentage()
        return;
    }if(value.key == '+' || value.key== "*" ||value.key== '-' || value.key == "/"){
        prepareOperation(value.key,"key");
        return
    }
    if(value.key >= 0  && value.key <= 9){
        setDisplayValue(getDisplayValue() + value.key);
        return
    }
    
    if(value.key == '='){
        getResult()
        return;
    }
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

function prepareOperation(value,source) {
    if (/*operandA !== 0 &&*/ typeof operandA !== "undefined") {
        operandB = getDisplayValue();
        operandA = getResult();
        operator  = source == "key" ? value:value.target.attributes.value.value;
        // setDisplayValue(operandA)
        // clearDisplay();
    }
    else {
        operandA = getDisplayValue();
        clearDisplay();
    }
    operator = source == "key" ?value :value.target.attributes.value.value;
        clearDisplay();
    
}





function appendDecimal(){
    const display = document.getElementById('display');
    let displayArray = display.textContent.split('')
    if(!displayArray.includes('.')){
        display.textContent +='.';
    }
}

function CleanAll(){
    operandB=0;
    operandA=0;
    operator = '';
    clearDisplay();
   }

//Events Listeners

function addOperandEventListener() {
    const operands = document.querySelectorAll('[data-type="operand"]');
    operands.forEach(operand => {
        operand.addEventListener('click', populateDisplay);
    })
    // console.log(operands);
}
function addOperatorEventListener() {
    const operators = document.querySelectorAll('[data-type="operator"]');
    operators.forEach(operator => {
        operator.addEventListener('click', prepareOperation);
    })
    // console.log(operands);
}
function addEqualEventListener() {
    const operator = document.querySelector('[data-type="equal"]');
    operator.addEventListener('click', getResult);

    // console.log(operands);
}
function addDecimalEventListener(){
    const operator = document.querySelector('[data-type="decimal"]');
    operator.addEventListener('click', appendDecimal);
}
function percentangeEventListener(){
    const operator = document.querySelector('[data-type="percentange"]');
    operator.addEventListener('click', percentage);
}
function inverseEventListener(){
    const operator = document.querySelector('[data-type="inverse"]');
    operator.addEventListener('click', inverse);
}

function clearEventListener(){
    const operator = document.querySelector('[data-type="clean"]');
    operator.addEventListener('click', CleanAll);
}



addOperandEventListener();
addOperatorEventListener();
addEqualEventListener();
addDecimalEventListener();
percentangeEventListener();
inverseEventListener();
clearEventListener();
window.addEventListener('keydown', populateDisplaywithKeyboard);


