//Rebecca Machamer //forty.js
//Febuary 2 2019 //JSINTERN


function three_numbers(x, y, z) {
    if (x == y && y == z) {
      return 30;
    }
  
    if (x == y || y == z || z == x) {
      return 20;
    }
  
    return 40;
  }
  console.log(three_numbers(10, 10, 10));
  console.log(three_numbers(10, 10, 18));
  console.log(three_numbers(10, 7, 18));


  