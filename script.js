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

let userNumberOne;
let userOperator = '';
let userNumberTwo;
let result;


function evaluate(userNumberOne, userOperator, userNumberTwo) {

    if (userOperator == '+') {
        result = addition(userNumberOne, userOperator, userNumberTwo);
    } else if (userOperator == '-') {
        result = subtraction(userNumberOne, userOperator, userNumberTwo);
    } else if (userOperator == '*' || userOperator== 'x') {
        result = multiplication(userNumberOne, userOperator, userNumberTwo);
    } else if (userOperator == '/') {
        result = division(userNumberOne, userOperator, userNumberTwo);
    }

    document.getElementById("evaluationText").innerText = Math.round(result * 100) / 100;
    userNumberOne = '';
    userOperator = '';
    userNumberTwo = '';

}

document.querySelector('#numberButtons')
    .addEventListener('click', event => {
        if (event.target.value == undefined || event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*') {
            return;
        } else if (document.querySelector('#evaluationText').innerText == result){
            document.querySelector('#evaluationText').innerText = event.target.value;
        } else {
      let numberValue = event.target.value;
        // document.getElementById("evaluationText").innerText = '';
        document.getElementById("evaluationText").innerText += numberValue;
        }
    });

document.querySelector('#operatorButtons')
    .addEventListener('click', event => {

        if (document.querySelector('#evaluationText').innerText == result) {
            document.querySelector('#subEvaluationText').innerText = '';
        }

        if (((userOperator != '' &&  document.querySelector('#evaluationText').innerText == '')) || (userOperator != '' && document.querySelector('#evaluationText').innerText == result)) {
            return userOperator = event.target.value;
            ;
        }

        if (userOperator != '' && event.target.value != '') {
            userNumberTwo = document.querySelector('#evaluationText').innerText;
            evaluate(userNumberOne, userOperator, userNumberTwo);
            userNumberOne = document.querySelector('#evaluationText').innerText;
            // document.querySelector('#subEvaluationText').innerText = '';
            userOperator = event.target.value;
            return;
        } 

        if (event.target.value == '') {
            return;
        } else {
            userNumberOne = document.querySelector('#evaluationText').innerText;
            document.querySelector('#subEvaluationText').innerText += (userNumberOne + event.target.value);
            document.querySelector('#evaluationText').innerText = '';
            userOperator = event.target.value;
            return;
        }

    });


document.querySelector('#evaluateButton')
    .addEventListener('click', event => {

        if (isNaN(userNumberOne)) {
            return;
        }

        userNumberTwo = document.querySelector('#evaluationText').innerText;
        document.querySelector('#subEvaluationText').innerText += userNumberTwo;
        evaluate(userNumberOne, userOperator, userNumberTwo);
        userNumberOne = '';
        userOperator = '';
        userNumberTwo = '';
    });
    

