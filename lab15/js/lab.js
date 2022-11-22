/**
*Author: Wei-Yan Chiang, Aaron Dangc
*Created: November 21, 2022
*Lab 15: AJAX
**/

$("#activate").click(function(){
  console.log("Button activated");
  var pokeList = $.ajax({
    url:"https://pokeapi.co/api/v2/",
    method: "GET",
    datatype: "JSON",
  });
  pokeList.done(function(data){
    console.log("API functioning. See the following: ", data);
    console.log(data.berry)
    var pokeAbil = $.ajax({
      url:data.berry,
      method: "GET",
      datatype: "JSON",
    });
    pokeAbil.done(function(data){
      console.log("Pokemon berry functioning: ",data);
      for (var num=0;num<20;num++){
        $("#output").append(data.results[num].name+"<br />");
      }
    })
  });
  pokeList.fail(function(request,error){
    console.log(request,error)
  })
})
