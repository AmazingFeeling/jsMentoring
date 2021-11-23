let car = {};

Object.defineProperties(car, {
    model: {
        value: 'BMW', writable: true, configurable: true, enumerable: true
    },
    year: {
        value: '1995', writable: true, configurable: true, enumerable: true
    }
})

console.log(car.model)
car.model = 'Audi'
console.log(car.model)
