//Rebecca Machamer //ptPresent.js
//Febuary 2 2019 //JSINTERN
//Write a JavaScript program to check of a given string contains equal number of p's and t's present
//#55

function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));
