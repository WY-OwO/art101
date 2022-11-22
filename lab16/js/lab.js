/**
*Author: Wei-Yan Chiang, Jorge Gonzalez
*Created: November 16, 2022
*Lab 14: Debugging
**/


var Array1 = [
  [{
    index:'1',
    value:'100'
  }, {
    index:'2',
    value:'200'
  }],
  [{
    index:'1.1',
    value:'100'
  }, {
    index:'1.2',
    value:'200'
  }]
];

var Array2 = [
  [{
    index:'10',
    value:'100'
  }, {
    index:'20',
    value:'200'
  }],
  [{
    index:'10.1',
    value:'100'
  }, {
    index:'10.2',
    value:'200'
  }]
];

Array1.push(Array2)

console.log(Array1)
