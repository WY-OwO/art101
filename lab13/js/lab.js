/**
*Author: Wei-Yan Chiang, Philip Orihuela
*Created: November 13, 2022
*Lab 13: Loops
**/

function FBB(maxNums, factorObj) {
  for (var i=0;i<maxNums;i++){
    var resulting= "";
    for (var factor in factorObj) {
      if (i % factor ==0) {
        resulting += factorObj[factor];
      }
    }
    if (resulting){
      resulting = " - " + resulting + "!";
    }
    $("#output").append($("<p></p>").html(i.toString()+resulting))
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'" + str + "</div>";
}

$("#submit").click(function(){
  if ($("#max").val()>200){
    alert("Give me a smaller number!")
  }
  else if ($("#max").val()<0){
    alert("Give me a positive number!")
  }
  else {
    const factorObj = {};
    factorObj [$("#num1").val()]=$("#text1").val();
    factorObj [$("#num2").val()]=$("#text2").val();
    factorObj [$("#num3").val()]=$("#text3").val();
    factorObj [$("#num4").val()]=$("#text4").val();
    FBB($("#max").val(),factorObj);
  }
});
