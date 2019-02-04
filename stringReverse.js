//Rebecca Machamer //stringReverse.js
//Febuary 2 2019 //JSINTERN

//Write a JavaScript program to reverse a given string
//#48

function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));
