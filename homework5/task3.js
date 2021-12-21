class Circle {

    #radius;
    _color;

    constructor(radius, color) {
        this.#radius = radius;
        this._color = color;
    }

    getArea() {
        return 3.14159 * Math.pow(this.#radius, 2)
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

}

class Cylinder extends Circle {

    #radius;
    _height;

    constructor(radius, height, color) {
        super(radius, color)
        this.#radius = radius;
        this._height = height;
    }

    getArea() {
        let pi = 3.14159;
        return 2 * pi * this.#radius * this._height + 2 * pi * Math.pow(this.#radius, 2)
    }

    getVolume() {
        return super.getArea() * this._height;
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }

}

let circle = new Circle(2, 'red');
let cylinder = new Cylinder(2 , 2, 'purple');

console.log('circle methods:')
console.log('area: ' + circle.getArea());
console.log('color: ' + circle.color);
circle.color = 'blue'

console.log('cylinder methods:')
console.log('area: ' + cylinder.getArea());
console.log('color: ' + cylinder.color);
cylinder.color = 'yellow'
console.log('volume: ' + cylinder.getVolume())
console.log('height: ' + cylinder.height)
cylinder.height = 3;
