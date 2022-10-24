/**
*Author: Wei-Yan Chiang, Philip Orihuela
*Created: October 24, 2022
*Lab 7: Functions
**/

function sortNames() {
  var userName = window.prompt("Hello there. Please tell me your name so that I may fix it.");
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =",nameArraySort);
  nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

document.writeln("Hi! I fixed your name: ",  sortNames(), "</br>");
