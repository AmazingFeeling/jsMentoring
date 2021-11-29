let car = {};

Object.defineProperties(car, {
    model: {
        value: 'BMW', writable: true, configurable: true, enumerable: true
    },
    year: {
        value: '1995', writable: true, configurable: true, enumerable: true
    },
    color: {
        value: 'Black', writable: true, configurable: false, enumerable: false
    },
    type: {
        value: 'Sedan', writable: true, configurable: false, enumerable: false
    }
})

console.log('`color` variable before delete: ' + car.color)
delete car.color
console.log('`color` variable after delete: ' + car.color)

console.log('`color` variable before delete: ' + car.type)
delete car.type
console.log('`color` variable after delete: ' + car.type)


for(let [prop, value] of Object.entries(car)) {
    console.log(`[loop] Property ${prop} has value ${value}`)
}
