/**
*Author: Wei-Yan Chiang, Philip Orihuela
*Created: November 1, 2022
*Lab 9: Javascript for the Web
**/

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML = "Testing grounds. Well not grounds, words. Testing words!"
new2El.innerHTML = "It's Halloween! Where can I get candies..."

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.fontFamily = "Times New Roman";
new2El.style.color = "#25BC5B";
