//Rebecca Machamer //deGrader.js
//January 28, 2019 //JSINTERN

var grade = Math.floor(Math.random() * (+100 - +0));
var testTypes = ["standard, "pop-quiz" , "final" , "pre-test" , "post-test"];

function didPass(grade , testTypes){
    switch(testTypes)(
        case "standard";
            if(grade >=89 && grade <= 100) {
                 return true
             }
        break;
         case "pop-quiz";
             if(grade >=89 && grade <= 100) {
                 return true
              }
        break;
        case "final";
             if(grade >=89 && grade <= 100) {
                return true
             }
        break;
        case "pre-test";
             if(grade >=89 && grade <= 100) {
               return true
        }
        break;
        case "post-test";
             if(grade >=89 && grade <= 100) {
              return true
        }   
        break;
        default;
        return false;

    )
}
function degrade (){
    for( i = 0 ; i < testTypes.length ; i++ ) {
        var test = testTypes(i);
        var score = grade ;
        didPass(score, tests)

    }
}
console.log(grade);
