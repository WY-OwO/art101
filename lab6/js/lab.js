/**
*Author: Aaron Dangc, Wei-Yan Chiang
*Created: October 17, 2022
*Lab 6: Arrays and Objects
**/

const myTransport = ["Car", "Bus","Bike","Metro"];

const myMainRide = {make:"Proton",model:"Wira",color:"Red",year:1995,age:function(){return 2022-year;}};

document.writeln("Getting around: "+ myTransport +" "+"<br/>")

document.writeln("My Main Ride: <pre>",JSON.stringify(myMainRide, null, '\t'), "</pre>");
