{
    var x = 2;
  }
  // x CAN be used here

  {
    let x = 2;
  }
  // x can NOT be used here


  var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10


let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5


//Global variables defined with the var keyword belong to the window object:
var carName = "Volvo";
// code here can use window.carName

//Global variables defined with the let keyword do not belong to the window object:
let carName = "Volvo";
// code here cannot use window.carName


var x = 2;

// Now x is 2
 
var x = 3;

// Now x is 3



var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

let x = 2;       // Allowed
var x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  var x = 5;   // Not allowed
}


let x = 2;       // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}


//hoisting
carName = "Volvo";
alert(carName);
var carName;

carName = "Volvo";
let carName;