//Rebecca Machamer //Gregorian
//January 26 20119 //JSINTERN


year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);