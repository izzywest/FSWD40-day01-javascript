var fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = fruits.split('/');
console.log(temp);
document.write(temp[0] + "<br>" + temp[1] + "<br>" + temp[2] + "<br>" + temp[3] + "<br>" + temp[4] + "<br>" + temp[5] + "<br>" + temp[6] + "<br>" + temp[7]);