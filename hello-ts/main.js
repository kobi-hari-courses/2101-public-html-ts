var colors = require('colors');

var i = 5;
var j = 10;
var sum = i + j;

var s1 = "" + i + " + " + j + " = ";
s1 = s1.yellow;

var s2 = sum.toString();
s2 = s2.red;

console.log(s1 + s2);
