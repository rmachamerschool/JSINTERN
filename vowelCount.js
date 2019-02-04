//Rebecca Machamer //vowelCount.js
//Febuary 2 2019 //JSINTERN
//Write a JavaScript program to count the number of vowels in a given string.
//#54

function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));
