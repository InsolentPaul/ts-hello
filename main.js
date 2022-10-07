/* function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i + "finnaly");
}

doSomething(); */
var count = 5;
// count = "a"; // error because count is number
var x; // no error because x has any value
x = "a";
x = 1;
x = true;
var y; // only numbers can be assigned, other will be error
var y1;
var y2;
var y3;
var yArray = [1, 2, 3]; // only set by type (numbers) in array
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var backgroundColor = color.Red;
