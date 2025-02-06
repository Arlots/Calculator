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
let userOperator;
let userNumberTwo;

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

    document.getElementById("evaluationText").innerText = result;
}

document.querySelector('#numberButtons')
    .addEventListener('click', event => {
        if (event.target.value == undefined || event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*') {
            return;
        } else {
      let numberValue = event.target.value;
        document.getElementById("evaluationText").innerText += numberValue;
        }
    });


document.querySelector('#operatorButtons')
    .addEventListener('click', event => {
        if (event.target.value == '') {
            return;
        } else {
            userNumberOne = document.querySelector('#evaluationText').innerText;
            document.querySelector('#evaluationText').innerText = '';
            userOperator = event.target.value;        
        }

    });

document.querySelector('#evaluateButton')
    .addEventListener('click', event => {
        userNumberTwo = document.querySelector('#evaluationText').innerText;
        evaluate(userNumberOne, userOperator, userNumberTwo);

    })

//     document.querySelector('#buttonContainer')
//     .addEventListener('click', event => {

//         if (event.target.value == undefined || event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*') {
//         userOperator = event.target.values
//         };


    
//         console.log(userNumberOne);
//         console.log(document.querySelector('#evaluationText').innerText)
//         console.log(userOperator);
    
//     });
   
    

