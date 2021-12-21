let animal = {
    fly: false,
    walk() {
        console.log('animal walk');
    },
    say() {
        console.log('animal');
    },
    set isFlying(isFlying) {
        this.fly = isFlying;
    },
    get isFlying() {
        return this.fly;
    }
};

// 1) make animal object as prototype for dog object
let dog = {
    run: true
};
Object.setPrototypeOf(dog, animal)

// 2) make animal object as prototype for dog object
// let dog = {
//     run: true,
// };
// dog.__proto__ = animal

dog.say = function() {
    console.log('Woof')
}

dog.say()

let newObject = {
    __proto__: animal
}

Object.setPrototypeOf(dog, newObject)

console.log('Dog own properties: ' + Object.getOwnPropertyNames(dog))
console.log('Dog all properties:')
for(let prop in dog) {
    console.log(prop)
}
