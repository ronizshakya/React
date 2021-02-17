try {
    //Block of code to try
  }
  catch(err) {
   // Block of code to handle errors
  }
  finally {
   // Block of code to be executed regardless of the try / catch result
  }

  var num = 1;
try {
  num.toUpperCase();
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}