//Rebecca Machamer //rightmostDigit.js
//Febuary 2 2019 //JSINTERN

//write a JavaScript program to check from three given numbers
//(non negative integers) that two or all of them have the same rightmost digit
//#43

function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
           
}

console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(20,22,45));
