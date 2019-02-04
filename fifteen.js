//Rebecca Machamer //fifteen.js
//Febuary 2 2019 //JSINTERN

//Write a JavaScript program to check two given integer values and return true if one of the number is 15
//or if their sum or difference is 15
//#45

function test_nmuber(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

console.log(test_nmuber(15, 9));
console.log(test_nmuber(25, 15));
console.log(test_nmuber(7, 8));
console.log(test_nmuber(25, 10));
console.log(test_nmuber(5, 9));
console.log(test_nmuber(7, 9));
console.log(test_nmuber(9, 25));
