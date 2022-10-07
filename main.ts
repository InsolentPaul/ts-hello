/* function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i + "finnaly");
}

doSomething(); */

let count = 5;
// count = "a"; // error because count is number

let x; // no error because x has any value
x = "a";
x = 1;
x = true;

let y: number; // only numbers can be assigned, other will be error
let y1: boolean;
let y2: string;
let y3: any;

let yArray: number[] = [1, 2, 3]; // only set by type (numbers) in array

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum color {
  Red = 0,
  Green = 1,
  Blue = 2,
}

let backgroundColor = color.Red;

/* let message = "abc"; // type string
let endsWithC = message.endsWith("c"); // true */

// but

let message;
message = "abc"; // type any
// let endsWithC = message.endsWith("c"); // error because ends.With needs string
// let endsWithC = (<string>message).endsWith("c"); // type asortion to string == true
// let alternativeWay = (message as string).endsWith("c"); // another way of type asortion == true

// arrow functions

let log = function (message) {
  console.log(message);
};

let doLog = (message) => {
  console.log(message);
};

let doLogShort = (message) => console.log(message); //

// custom types

let drawPoints = (x, y) => {
  // ...
};

let drawPointsLong = (x, y, a, b, c, d, e) => {
  // ...
};

let drawPointsPoint = (point: { x: number; y: number }) => {
  // inline anotation
  // ...
};

drawPointsPoint({
  x: 1,
  y: 2,
});

interface Point {
  // Pascal naming convention, first letter uppercase
  x: number;
  y: number;
  draw: () => void;
}

let drawPointsPointInterface = (point: Point) => {
  // interface
  // ...
};

let getDistance = (pointA: Point, pointB: Point) => {
  // ...
};

// class

/* interface Point {
  // Pascal naming convention, first letter uppercase
  x: number;
  y: number;
  draw: () => void;
} */

class Point {
  x: number;
  y: number;
  drawClass() {
    // ...
  }
  getDistance(another: Point) {}
}
