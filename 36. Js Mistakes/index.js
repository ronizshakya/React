//Accidentally Using the Assignment Operator
//using this
var x = 0;
if (x = 10)

//instead of 
var x = 0;
if (x == 10)


//Expecting Loose Comparison
var x = 10;
var y = "10";
if (x == y)

var x = 10;
var y = "10";
if (x === y)


//Confusing Addition & Concatenation
var x = 10 + 5;          // the result in x is 15
var x = 10 + "5";        // the result in x is "105"

//Misunderstanding Floats
var x = 0.1;
var y = 0.2;
var z = x + y            // the result in z will not be 0.3

var z = (x * 10 + y * 10) / 10;       // z will be 0.3



//Breaking a Return Statement
function myFunction(a) {
    var
    power = 10; 
    return
    a * power;
  }


  //Undefined is Not Null

  //Incorrect:
if (myObj !== null && typeof myObj !== "undefined") {}
//Because of this, you must test for not undefined before you can test for not null:

//Correct:
if (typeof myObj !== "undefined" && myObj !== null) {}