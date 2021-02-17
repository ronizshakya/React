var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30); //6 numbers specify year, month, day, hour, minute, second:
new Date().getDate(); //gives today date in number
new Date().getDay(); //gives today day in number
new Date().getMonth(); //gives month in number
new Date().getFullYear(); //gives full year
new Date().toDateString(); //date to string
new Date().toJSON(); // date to JSON
new Date("March 21, 2012"); //string to date
Date.parse("March 21, 2012"); //Date.parse() method to convert it to milliseconds.
new Date().setFullYear(2020, 11, 3);
new Date().setMonth(11);
new Date().setDate(15);


var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
months[d.getMonth()]
days[d.getDay()]