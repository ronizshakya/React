// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
//JavaScript Classes are templates for JavaScript Objects.

//syntax
class ClassName {
  constructor() {
    //...
  }
}

//example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//using a class
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

class ClassName {
  constructor() {
    //...
  }
  method_1() {
    //...
  }
  method_2() {
    //...
  }
  method_3() {
    //...
  }
}

class a {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class b extends a {
  getValue(val) {
    return this.name + val;
  }
}

var newVar = new b("hhghfs", 22);
console.log(newVar.getValue("ghghgh"));
