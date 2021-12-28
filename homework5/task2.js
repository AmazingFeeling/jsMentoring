// 1)
function Car() {

}

Car.prototype = {
    constructor: Car,
    drive: true
};

let car = new Car();
console.log(car.constructor === Car);

// 2)
let animal = {
    eats: true
};
let mammals = {
    run() {
        console.log('Run');
    }
};

let cat = Object.create(animal);

Object.setPrototypeOf(animal, mammals);

cat.run();
