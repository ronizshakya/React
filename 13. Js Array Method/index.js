//The JavaScript method toString() converts an array to a string of (comma separated) array values.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();


// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ")

//The pop() method removes the last element from an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits


//The shift() method removes the first array element and "shifts" all other elements to a lower index.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
var x = fruits.shift();    // the value of x is "Banana"


//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");// Returns 5    // Adds a new element "Lemon" to fruits

//The splice() method can be used to add new items to an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.splice(2, 2, "Lemon", "Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits


var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys


//The slice() method slices out a piece of an array into a new array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);//takes all the el from the index
var citrus = fruits.slice(1, 3);//The method then selects elements from the start argument, and up to (but not including) the end argument.