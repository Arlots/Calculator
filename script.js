//function to add 
function addition(term1, operand, term2) {
    if (operand == '+') {
        return term1 + term2;
    }
};

function subtraction(term1, operand, term2) {
    if (operand == '-') {
        return term1 - term2;
    }
};

function multiplication(term1, operand, term2) {
    if (operand == '*' || operand == 'x') {
        return term1 * term2;
    }
};

function division(term1, operand, term2) {
    if (operand == '/') {
        return term1 / term2;
    }
};

// let userNumberOne = Number(prompt("What is your first number?"));
// let userOperator = prompt("What operator would you like to use?");
// let userNumberTwo = Number(prompt("What is your second number?"));

function evaluate(userNumberOne, userOperator, userNumberTwo) {
    let result;

    if (userOperator == '+') {
        result = addition(userNumberOne, userOperator, userNumberTwo);
    } else if (userOperator == '-') {
        result = subtraction(userNumberOne, userOperator, userNumberTwo);
    } else if (userOperator == '*' || userOperator== 'x') {
        result = multiplication(userNumberOne, userOperator, userNumberTwo);
    } else if (userOperator == '/') {
        result = division(userNumberOne, userOperator, userNumberTwo);
    }

    console.log(result);
}
// this is the base code for inserting values, but can I condense it?
// function insertSeven(){
//     numberValue = document.getElementById("sevenButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertEight(){
//     numberValue = document.getElementById("eightButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertNine(){
//     numberValue = document.getElementById("nineButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertDivide(){
//     numberValue = document.getElementById("divideButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertFour(){
//     numberValue = document.getElementById("fourButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertFive(){
//     numberValue = document.getElementById("fiveButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertSix(){
//     numberValue = document.getElementById("sixButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertMultiply(){
//     numberValue = document.getElementById("multiplyButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertOne(){
//     numberValue = document.getElementById("oneButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertTwo(){
//     numberValue = document.getElementById("twoButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertThree(){
//     numberValue = document.getElementById("threeButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertMinus(){
//     numberValue = document.getElementById("minusButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertZero(){
//     numberValue = document.getElementById("zeroButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }

// function insertDecimal(){
//     numberValue = document.getElementById("decimalButton").textContent;
//     document.getElementById("evaluationText").innerText += numberValue;
// }


//condensed version of insertvalue() function

document.querySelector('#buttonContainer')
    .addEventListener('click', event => {
      let numberValue = event.target.value;
        document.getElementById("evaluationText").innerText += numberValue;
    });

