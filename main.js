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
/* let message = "abc"; // type string
let endsWithC = message.endsWith("c"); // true */
// but
var message;
message = "abc"; // type any
// let endsWithC = message.endsWith("c"); // error because ends.With needs string
// let endsWithC = (<string>message).endsWith("c"); // type asortion to string == true
// let alternativeWay = (message as string).endsWith("c"); // another way of type asortion == true
// arrow functions
var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
var doLogShort = function (message) { return console.log(message); }; //
// custom types
var drawPoints = function (x, y) {
    // ...
};
var drawPointsLong = function (x, y, a, b, c, d, e) {
    // ...
};
var drawPointsPoint = function (point) {
    // inline anotation
    // ...
};
drawPointsPoint({
    x: 1,
    y: 2
});
var drawPointsPointInterface = function (point) {
    // interface
    // ...
};
