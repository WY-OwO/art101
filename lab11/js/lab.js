/**
*Author: Wei-Yan Chiang, Jorge Gozan
*Created: November 7, 2022
*Lab 11: Javascript Events and Forms
**/

function caseInsensitive(strA,strB){
  return strA.toLowerCase().localeCompare(strB.toLowerCase());
}
function sortName(userName){
  console.log("username =",userName);
  userName = userName.split("").sort();
  userName = userName.sort( caseInsensitive);
  userName = userName.join("");
  return userName;
}

myButton = document.getElementById("myButton");
console.log("My button =",myButton);

myButton.addEventListener("click",wordSort);

function wordSort(){
  var inputBox = document.getElementById("user-name").value;
  console.log(sortName(inputBox));
  var sortInputBox = sortName(inputBox);

  inputNode = document.createElement("div");
  inputNode.setAttribute("class","welcome");
  inputNode.innerHTML = "<h1>" + sortInputBox + "</h1>";
  console.log(inputNode)

  outputEl = document.getElementById("output");
  outputEl.appendChild(inputNode);

  lineBreak = document.createElement("br");
  outputEl.appendChild(lineBreak);
}
