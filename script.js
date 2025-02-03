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

let userNumberOne = null;
let userOperator = null;
let useNumberTwo = null;