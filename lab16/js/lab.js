/**
*Author: Wei-Yan Chiang, Philip Orihuela
*Created: November 28, 2022
*Lab 16: JSON and APIs
**/

$("#starting").click(function(){
  console.log("Button activated");

  var num = Math.floor(Math.random()*2705);
  if (num == 0){
    console.log("0 is not applicable.");
    num = Math.floor(Math.random()*2705);
  }
  else {
    console.log("Number: "+num)
    var comicObj = $.ajax({
      url:"https://xkcd.com/"+num+"/info.0.json",
      method:"GET",
     datatype: "JSON",
   });
   comicObj.done(function(data){
     $("#output1").append($("<h2></h2>").html("Comic Name: " + data.title));
     $("#output1").append("<br />");
     $("#output1").append("<br />");
     $("#output1").append($('<img src="#" alt="Comic_Image" title="#" id="inTextImage"/>').attr('src',data.img).attr('alt',data.alt).attr('title',data.safe_title).height(500));
     $("#output1").append("<br />");
     $("#output1").append("<hr>");
   });
   comicObj.fail(function(request,error){
     console.log(request,error);
   });
 };
});

var xNum = 1 ;
xComicObj = $.ajax({
  url:"https://xkcd.com/"+xNum+"/info.0.json",
  method:"GET",
  datatype:"JSON",
});
xComicObj.done(function(data){
  console.log("API",data);
  $("#output").append($("<h2></h2>").html("Comic Name: " + data.title));
  $("#output").append("<br />");
  $("#output").append("<br />");
  $("#output").append($('<img src="#" alt="Comic_Image" title="#" id="inTextImage"/>').attr('src',data.img).attr('alt',data.alt).attr('title',data.safe_title).height(500));
  $("#output").append("<br />");
  $("#output").append("<hr>");
});

$("#previous").click(function(){
  if (xNum == 1){
    alert("No previous pages!");
  }
  else {
    xNum -=1;
    var newXCom=$.ajax({
      url:"https://xkcd.com/"+xNum+"/info.0.json",
      method:"GET",
      datatype:"JSON",
    });

    newXCom.done(function(data){
      $("#title").html(data.title);
      $("#year").html(data.year);
      $("#butImg").attr('src',data.img);
    });
  };
});

$("#Next").click(function(){
  if (xNum == 2705){
    alert("No later pages!");
  }
  else {
    xNum +=1;
    var newXCom= $.ajax({
      url:"https://xkcd.com/"+xNum+"/info.0.json",
      method:"GET",
      datatype:"JSON",
    });

    newXCom.done(function(data){
      $("#title").html(data.title);
      $("#year").html(data.year);
      $("#butImg").attr('src',data.img);
    });
  };
});
