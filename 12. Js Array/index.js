var cars = ["Saab", "Volvo", "BMW"];
//to do object array

var cars = new Array("Saab", "Volvo", "BMW");

var name = cars[0];
cars[4] = "Ford";
cars.push("Ford");

var x = cars.length; // The length property returns the number of elements
var y = cars.sort(); // The sort() method sorts arrays

//check if el is array
Array.isArray(cars); // returns true
