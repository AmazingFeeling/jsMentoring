class Wheel {
    drive() {
        console.log('drive');
    }
}

class Tyre {
    brake() {
        console.log('brake');
    }
}

class Steering {
    steer(x, y) {
        console.log(`steering ${x} and ${y}`);
    }
}

class Wiper {
    wipe(speed) {
        console.log(`wipe with ${speed}`);
    }
}

class Engine {
    start() {
        console.log('start');
    }
}

class Car {

}

function mergeClasses(target, ...classesToMerge) {
    classesToMerge.forEach(classToMerge => {
        Object.getOwnPropertyNames(classToMerge.prototype).forEach(propertyName => {
            target.prototype[propertyName] = classToMerge.prototype[propertyName]
        })
    })
}

mergeClasses(Car, Wheel, Tyre, Steering, Wiper, Engine)

let car = new Car();

car.start();
car.drive();
car.wipe(100);
car.steer(20, 30);
car.brake();
