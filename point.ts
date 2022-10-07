export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // point.draw();
  }
  drawClass() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }
  getDistance(another: Point) {
    // ...
  }
}
