//Rebecca Machamer //capFirst.js
//Febuary 2 2019 //JSINTERN

//Write a JavaScript program to capitalize the first letter of each word of a given string.
//#50

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
