//optional chaining

plantFlowers?.()// undefined

//Nullish Coalescing
//The right-hand side value will only be assigned if the left-hand value is equal to null or undefined.
const delay = windowAnimDelay ?? 300; // delay is only set to 300 in case windowAnimDelay is null or undefined
const title = windowTitle ?? "Alert"; // title is only set to 'Alert' in case windowTitle is null or undefined

const someObj = {};
someObj.nonExistentProp1.nonExistentProp2.nonExistentProp3; // Error >> "Cannot read property 'nonExistentProp2' of undefined"

const nonFunction = null;
nonFunction(); // Error >> "nonFunction is not a function"

const anotherObj = {};
anotherObj.nonExistentFunction(); // Error >> "anotherObj.nonExistentFunction is not a function"





const someObj = {};
someObj?.nonExistentProp1?.nonExistentProp2?.nonExistentProp3; // undefined

const nonFunction = null;
nonFunction?.(); // undefined

const anotherObj = {};
anotherObj.nonExistentFunction?.(); // undefined

const nonArray = null;
nonArray?.[10]; // undefined


//Dynamic import

// ...
const utilsPath = '../utils';

if (keys) {
  const keysUtilsModule = await import(`${utilsPath}/keys.js`);
  keys = keysUtilsModule.getKeys();
}




//new export syntax
// utils/general.js

export const double = n => n * 2;
export const triple = n => n * 3;
export const sayHello = name => console.log(`Hello, ${name}!`);

// utils/common.js

export const sayHello = name => console.log('Hello!!!');

// utils/index.js

export * as General from './general.js';
export * as Common from './common.js';

// index.js
import { General, Common } from './utils';

General.sayHello('Joe'); // => "Hello, Joe!"
Common.sayHello(); // => "Hello!!!"


//Private Fields

class Flower {
  #leaf_color = "green";
  constructor(name) {
    this.name = name;
  }

  get_color() {
    return this.#leaf_color;
  }
}

const orchid = new Flower("orchid");

console.log(orchid.get_color()); // green
console.log(orchid.#leaf_color) // Private name #leaf_color is not defined 

//Static Fields
class Flower {
  constructor(type) {
    this.type = type;
  }
  static create_flower(type) {
    return new Flower(type);
  }
}

const rose = Flower.create_flower("rose"); // Works fine

//Top Level Await


//Promise.allSettled
// To wait for multiple promises to finish,
//  Promise.all([promise_1, promise_2]) can be used. 
//  The problem is that if one of them fails, 
//  then an error will be thrown. Nevertheless, 
//  there are cases in which it is ok for one of the promises to fail,
//   and the rest should still resolve.
//    To achieve that, ES11 introduced Promise.allSettled.


promise_1 = Promise.resolve('hello')
primise_2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'problem'))

Promise.allSettled([promise_1, promise_2])
    .then(([promise_1_result, promise_2_result]) => {
        console.log(promise_1_result) // {status: 'fulfilled', value: 'hello'}
        console.log(promise_2_result) // {status: 'rejected', reason: 'problem'}
    })