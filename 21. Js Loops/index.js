for (statement 1; statement 2; statement 3) {
    // code block to be executed
  }

var i = 2;
var len = cars.length;
var text = "";
for (i; i < len; i++) {
  text += cars[i] + "<br>";
}


//The JavaScript for/in statement loops through the properties of an object:
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}



//The JavaScript for/of statement loops through the values of an iterable objects.(Arrays, Strings, Maps, NodeLists, and more)
for (variable of iterable) {
    // code block to be executed
  }
var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
  document.write(x + "<br >");
}

//The while loop loops through a block of code as long as a specified condition is true.
while (condition) {
    // code block to be executed
  }

  while (i < 10) {
    text += "The number is " + i;
    i++;
  }


//   The do/while loop is a variant of the while loop. This loop will execute the code block
//    once, before checking if the condition is true, then it will repeat the loop as long as
//     the condition is true.
  do {
    // code block to be executed
  }
  while (condition);

  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);



  var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (;cars[i];) {
  text += cars[i] + "<br>";
  i++;
}

  var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}