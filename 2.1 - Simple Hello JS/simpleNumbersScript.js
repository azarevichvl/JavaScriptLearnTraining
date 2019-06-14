let simpleNumberString = "";

mainCycle: for (let i = 2; i < 5000000; i++) {
    for(let j = 2; j < Math.sqrt(i) + 1; j++){
        if (i % j == 0) continue mainCycle;
    }
   simpleNumberString += i + ' ';
}

alert(simpleNumberString);
