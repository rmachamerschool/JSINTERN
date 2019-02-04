//Rebecca Machamer //positiveNumber.js
//February 2 2019 //JSINTERN
//Write a JavaScript program to create a new string of specified copies (positive number) of a given 
//string
//#57

function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));
