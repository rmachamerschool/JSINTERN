//Rebecca Machamer //withoutFirstlast.js
//February 3 2019 //JSINTERN
//Write a JavaScript program to create a new stirng without the first and last character of a given string
//#60

function without_first_end(str) {
    return str.substring(1, str.length - 1);
  }
  console.log(without_first_end('JavaScript'));
  console.log(without_first_end('JS'));
  console.log(without_first_end('PHP'));
  