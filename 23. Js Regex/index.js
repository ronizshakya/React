//normal search
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

//regex search

var str = "Visit W3Schools";
var n = str.search(/w3schools/i); //i case issensitive

//normal replace
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

//regex replace
var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");

var patt = /e/; //searches for e
patt.test("The best things in life are free!"); //return boolean

/e/.exec("The best things in life are free!"); // returns array

var str = "Is this all there is?";
var patt1 = /[ah]/g; //Find any of the characters between the brackets
var result = str.match(patt1); //return array

var str = "123456789";
var patt1 = /[1-4]/g; //Find any of the digits between the brackets
var result = str.match(patt1);//return array


var str = "Give 100%!"; 
var patt1 = /\d/g;//Find a digit
var result = str.match(patt1);

'\s'	//Find a whitespace character

var str = "HELLO, LOOK AT YOU!"; 
var patt1 = /\bLO/;//	Find a match at the beginning of a word 
var result = str.search(patt1);


[a-z]	//Characters a to z

'\w'	//Any Alphanumeric character
'\W'	//Any Non-alphanumeric character
'fd    fdfdf5454545  5'.replace(/[^a-z0-9-]/g, "") //replace any space