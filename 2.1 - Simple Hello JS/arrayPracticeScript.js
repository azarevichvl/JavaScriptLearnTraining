 var styles = [ "Джаз", "Блюз"];
 styles.push("Рок-н-ролл");
 if (styles.length > 1 ) styles[styles.length - 2] = "Классика";
//alert(styles.shift());
styles.unshift("1","2");
//alert(styles);
//alert(getRandomArrayElement(styles))

//-----------Simple algorithms

// var sum = 0;
// var userNumber = getUserNumber();
// while (userNumber !== undefined){
//     sum+=userNumber;
//     userNumber = getUserNumber();
// }
// alert(sum);

//-------------SieveOfEratosthenes

// let simpleNumbers = SieveOfEratosthenes(100);
// console.log();
// let sum = 0;
// for (let i = 0; i < simpleNumbers.length; i++) {
//     sum += simpleNumbers[i];
// }
//alert(sum);

//-------------Algorithm returns largest sum in subarray.

alert(getMaxSumOfSubarray([1,54,7,-1,54]))

function getMaxSumOfSubarray(array){
    if (array.length < 1) return undefined;
    let maxSum = -Infinity;
    let currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        currentSum += array[i];
        if (currentSum > maxSum) maxSum = currentSum;
        if (currentSum < 0) currentSum = 0;
    }
    return maxSum;
}

function getUserNumber(){
    var userString = prompt("Enter number to sum with previous numbers.", '');
    if (userString === null || userString === "" || isNaN(userString)) return;
    return +userString;
}

function getRandomArrayElement(array){
    var rand = Math.floor(Math.random() * (array.length));
    return array[rand];
}


function SieveOfEratosthenes(size){
    var simpleNumbers = [];
    var sieveArray = new Array(size - 1);
    var sieveArrayMarkers = new Array(size - 1);
    for (let i = 2; i <= size; i++) { 
        sieveArray[i - 2] = i;
        sieveArrayMarkers[i - 2] = true;
    }

    for (let i = 0; i < sieveArray.length; i++) {
        if (sieveArrayMarkers[i]) simpleNumbers.push(sieveArray[i]);
        let j = i;
        while (j < sieveArrayMarkers.length){
            sieveArrayMarkers[j] = false;
            j += sieveArray[i];
        }
    }

    return simpleNumbers;
}


