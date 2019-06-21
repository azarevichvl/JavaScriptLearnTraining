let firstNumber = prompt("Enter 1 number", '0');
let secondNumber = prompt("Enter 2 number", '0');

if (IsNumber(firstNumber) && IsNumber(secondNumber)) {
    alert(parseFloat(firstNumber) + parseFloat(secondNumber))
} else {
    alert("One of entered values is not a number.")
}



function IsNumber(numberCandidate){
    if (!isNaN(parseFloat(numberCandidate)) && isFinite(numberCandidate)) { return true };
    return false;
}