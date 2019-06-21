var number = prompt("Enter number");
alert("Сумма чисел от 1 до "+ number +": " + RecursiveSum(number, 1));
if (number > 2) alert("Число Фибоначи: " + FibonachiFunc(number, 3, 1, 1));

function RecursiveSum(limitIteration, currentIteration){
    if (currentIteration >= limitIteration) return currentIteration;
    return currentIteration + RecursiveSum(limitIteration, currentIteration + 1);
}

function FibonachiFunc(limitIteration, currentIteration, preNumber, prePreNumber){
    if (currentIteration == limitIteration) return  preNumber + prePreNumber;
    return FibonachiFunc(limitIteration, currentIteration + 1, preNumber + prePreNumber, preNumber)
}