//Rebecca Machamer //sevenorEleven.js
//Febuary 2 2019 //JSINTERN

//Write a JavaScript prorgram to check two given non-negative ibtegers and if one of the number (not both)
//is multiple of 7 or 11.

//#46

function valCheck (a, b) {
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    }
    else
    return false;
    }
    console.log(valCheck(14, 21));
    console.log(valCheck(14, 20));
    console.log(valCheck(16, 20));
    