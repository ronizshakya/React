// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:

//before
hello = function () {
  return "Hello World!";
};

//now
hello = () => {
  return "Hello World!";
};


hello = () => "Hello World!";

hello = (val) => "Hello " + val;

//In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello " + val;


