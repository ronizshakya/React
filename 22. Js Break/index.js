//The break statement breaks the loop and continues executing the code after the loop (if any):
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }


//   The continue statement breaks one iteration (in the loop), 
//   if a specified condition occurs, and continues with the next iteration in the loop.

  for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }

  