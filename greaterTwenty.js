//Rebecca Machamer //greaterTwenty.js
//Febuary 2 2019 //JSINTERN
//write a JavaScript program to check 
//from three given integers that if a 
//number is greater than or equal to 20 and less than one of the others
//#44


function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));
