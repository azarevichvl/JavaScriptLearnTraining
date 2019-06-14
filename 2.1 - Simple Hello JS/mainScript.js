let number = prompt("Enter a number over 100:");
while (number <= 100 && number != null){
    number = prompt("Wrong number. Try again. Enter a number over 100:");
}
if (number != null){
    alert("Eeeeeey! You entered " + number +"!");
} else {
    alert("You canceled action.");
}
