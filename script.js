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

let userNumberOne = Number(prompt("What is your first number?"));
let userOperator = prompt("What operator would you like to use?");
let userNumberTwo = Number(prompt("What is your second number?"));

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

evaluate(userNumberOne, userOperator, userNumberTwo);