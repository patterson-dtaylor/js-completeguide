/* eslint-disable no-undef */
// Basic Calculator Needs//
// 1. Result Variable 
// 2. 

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Start of functions to keep the code DRY
//Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value); // From vender.js file
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // From vender.js file
}

// Generates and writes Log Entries
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}
// End of functions to keep the code DRY

function addNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtractNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiplyNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divideNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);

// currentResult = addNumbers(7, 8);

// On the right side of the "=", we are referring to currentResult.  
// You could say: We're reading (& using) its current value.
// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Although this is a mathematical equation, because this is a string,
// it will expressed as a string with quotes.
// Example of string concatenation. 
// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 -1`;

// \n = line break
// let errorMessage = 'An error \n' + 'occurred!';



