function isEmpty(obj){
    for (const key in obj) {
        return false;
    }
    return true;
}

function sumOfSalaries(obj){
    finalSum = 0;
    for (const key in obj) {
        finalSum += +obj[key];
    }
    return finalSum;
}

function getObjKeyWithMaxSalaries(obj){
    currentMaxSalary = -Infinity;
    var currentMaxSalaryKey;
    for (const key in obj) {
        if (+obj[key] > currentMaxSalary) {
            currentMaxSalary = +obj[key];
            currentMaxSalaryKey = key;
        }
    }
    if (currentMaxSalaryKey !== undefined) return currentMaxSalaryKey;
    return "нет сотрудников";
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

function multiplyNumericProperties(obj){
    const coeff = 2;
    for (const key in obj) {
        if (isNumeric(obj[key])) obj[key] *= coeff;
    }

    return obj;
}

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
//   };

// alert(getObjKeyWithMaxSalaries(salaries))

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

alert(multiplyNumericProperties(menu).width);