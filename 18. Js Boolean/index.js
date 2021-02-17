Boolean(10 > 9)        // returns true

var x = 0;
Boolean(x);       // returns false

var x = -0;
Boolean(x);       // returns false

var x = "";
Boolean(x);       // returns false

var x;
Boolean(x);       // returns false

var x = null;
Boolean(x);       // returns false

var x = 10 / "H";
Boolean(x);       // returns false


var x = false;   
var y = new Boolean(false);
x==y//
x===y//