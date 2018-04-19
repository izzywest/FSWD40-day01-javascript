var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var result1 = a + b + Number(c) + Number(d) + e;

console.log(result1);
//document.write(result1);



var f = '1';
var g = 15;
var h = 8;
var i = "1";

var result2 = Number(f) * g * h * Number(i);

console.log(result2);
//document.write(result2);



var result3 = result1 / result2;
document.write(result3);
