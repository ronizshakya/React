var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits
fruits.reverse();     // Then reverse the order of the elements
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});//asending sort
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});//descending sort

function Compare(a, b){return a - b}//compare

Math.max.apply(null, [10, 100, 11, 25, 40, 5]);// max number Math.max(1, 2, 3)

Math.min.apply(null, [10, 100, 11, 25, 40, 5]);// min number Math.min(1, 2, 3)