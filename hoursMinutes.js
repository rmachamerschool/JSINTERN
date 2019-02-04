//Rebecca Machamer //hoursMinutes.js
//Febuary 2 2019 //JSINTERN
//Write a JavaScript program to convert a given number to hours and minutes
//#51

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));
