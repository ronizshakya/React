var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;//result 26

var str = "Please locate where 'locate' occurs!";

var pos = str.indexOf("locate");

var pos = str.lastIndexOf("locate");

var pos = str.lastIndexOf("locate", 15);

var pos = str.search("locate");

var res = str.slice(7);

var res = str.slice(7, 13);

var res = str.substring(7, 13); //no negative index

var res = str.substr(7, 6); // 2nd param is length of string

var n = str.replace("locate", "find");
var n = str.replace(/locate/g, "W3Schools");

var text1 = "Hello World!";
var text2 = text1.toUpperCase();
var text2 = text1.toLowerCase();

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

var str = "       Hello World!        ";
var trim = str.trim();
var leftTrim = str.trimLeft();
var rightTrim = str.trimRight();

var txt = "a,b,c,d,e"; // String
txt.split(","); // Split on commas
txt.split(" "); // Split on spaces
txt.split("|"); // Split on pipe


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.splice(2, 1, "Lemon", "Kiwi");
fruits.splice(2, 2, "Lemon", "Kiwi");
