//To create a class inheritance, use the extends keyword.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

//The super() method refers to the parent class.

//By calling the super() method in the constructor method,
//we call the parent's constructor method and gets access to the parent's properties and methods.

//Getters and Setters

//Hoisting
//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

//That means that you must declare a class before you can use it:

//You cannot use the class yet.
//myCar = new Car("Ford")
//This would raise an error.


class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
let myCar = new Car("Ford");
//Now you can use the class:


//Static class methods are defined on the class itself.

//You cannot call a static method on an object, only on an object class.

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return this.name;
  }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.


//getters and setters

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;



//According to the specification, 
//if a class extends another class and has no constructor,
// then the following “empty” constructor is generated:

class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}