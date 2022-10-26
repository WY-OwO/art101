/**
*Author: Wei-Yan Chiang, Aaron Dangc
*Created: October 26, 2022
*Lab 8: Anon Functions and Callbacks
**/

function squareThem(x){
  var results = Math.pow(x,2);
  return results;
}

console.log("Square of 10 is ", squareThem(10));
console.log("Square of 15 is ", squareThem(15));

Numbar = [10, 3, 7, 5, 66, 8, 17];
console.log("My list: ", Numbar);

Numbar.map(squareThem);
console.log("Square the list: ", Numbar.map(squareThem));

Numbar.map(function isEven(x){
  var results = (x%2 == 0);
  return results;
})

console.log("Are the numbers even?: ", Numbar.map(function isEven(x){
  var results = (x%2 == 0);
  return results;
}));
