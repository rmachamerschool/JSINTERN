//Rebecca Machamer //alphaOrder.js
//Febuary 2 2019 //JSINTERN

//Write a JavaScript program to convert the letters of a given string in alphabetical order.
//#52

function alphabet_Soup(str) { 

    return str.split("").sort().join("");
         
}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));
