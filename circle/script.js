class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }

    getRadius() {
        return this.radius;
      }
    
      setRadius(newRadius) {
        this.radius = newRadius;
      }

      getColor() {
        return this.color;
      }
    
      setColor(newColor) {
        this.color = newColor;
      }

      toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
      }

      getArea() {
        return Math.PI * this.radius ** 2;
      }

      getCircumference() {
        return 2 * Math.PI * this.radius;
      }

}

const myCircle = new Circle(5, 'blue');

console.log("Initial Circle:", myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());

myCircle.setRadius(8);
myCircle.setColor('red');

console.log("Updated Circle:", myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference()); 