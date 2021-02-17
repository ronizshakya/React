async function myFunction() {
  return "Hello";
}
//Is the same as:

async function myFunction() {
  return Promise.resolve("Hello");
}

//await syntax

let value = await promise;

async function myDisplay() {
  let myPromise = new Promise(function (myResolve, myReject) {
    myResolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


//
async function myDisplay() {
  let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
      myResolve("I love You !!");
    }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
