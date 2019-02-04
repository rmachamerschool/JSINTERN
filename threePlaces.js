//Rebecca Machamer //threePlaces.js
//Febuary 2 2019 //JSINTERN
//Write a JavaScript program to check if the characters a and b are seperated by exactly 3 places 
//anywhere (at least once) in a given string
//#53

function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));
