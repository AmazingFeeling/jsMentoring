class Wheel {
    drive = () => {
        console.log('drive');
    };
}

class Tyre {
    brake = () => {
        console.log('brake');
    };
}

class Steering {
    steer = (x, y) => {
        console.log(`steering ${x} and ${y}`);
    };
}

class Wiper {
    wipe = speed => {
        console.log(`wipe with ${speed}`);
    };
}

class Engine {
    start = () => {
        console.log('start');
    };
}

class Car {

}

const car = Object.assign(Car.prototype, new Wheel(), new Tyre(), new Steering(), new Wiper(), new Engine())

car.start();
car.drive();
car.wipe(100);
car.steer(20, 30);
car.brake();
