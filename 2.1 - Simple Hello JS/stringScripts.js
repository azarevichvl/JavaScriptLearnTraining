var usFirst = function FirstLetterToUppercase(str){
    if (str == "") return str;
    let firstLetter = str.slice(0, 1).toUpperCase();
    return firstLetter + str.slice(1);
  }

  alert(usFirst(prompt("Enter string.")));
