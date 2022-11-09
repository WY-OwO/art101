//
//Author: Wei-Yan Chiang, Jorge Gonzalez
//Created: November 7, 2022
//Lab 11: Libraries and jQuery
//

$('#box1').append('<button id="buttonChalEl">Click Me</button>');

$('#box2').append('<button id="buttonResEl">Over HERE!</button>');

$('#box3').append('<button id="buttonProbEl">CLICK! HERE!</button>');

$('#boxX').append('<button id="buttonChange2El">To Blue!</button>');
$('#boxX').append('<button id="buttonChange1El">To Red!</button>');


$('#buttonChalEl').click(function() {
  $('#box1').toggleClass("special");
});

$('#buttonResEl').click(function() {
  $('#box2').toggleClass("special-more");
});

$('#buttonProbEl').click(function() {
  $('#box3').toggleClass("special-the-best");
});

$('#buttonChange1El').click(function() {
  $('#buttonChange2El').toggleClass("Red");
})

$('#buttonChange2El').click(function() {
  $('#buttonChange1El').toggleClass("Blue");
});
