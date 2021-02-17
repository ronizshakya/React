var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach((value, i, arr) => {
  console.log(value);
  console.log(i);

  console.log(arr);
});

//map
numbers.map((value, i, arr) => {
  console.log(value);
  console.log(i);

  console.log(arr);
});

//filter
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(function myFunction(value, index, array) {
  return value > 18;
});


//reduce
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}


//The every() method check if all array values pass a test.
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


//The some() method check if some array values pass a test.
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//The indexOf() method searches an array for an element value and returns its position.
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
//Array.indexOf() returns -1 if the item is not found.


//The find() method returns the value of the first array element that passes a test function.
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//find the index where  the condition is true
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}