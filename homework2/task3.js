function removeProps(object, ...propertiesToRemove) {
    for (let property of propertiesToRemove) {
        delete object[property]
    }
    return object;
}

let borisObject = {
    name: "Boris",
    age: 25,
    city: "London",
    color: "orange"
}

let squareObject = {
    size: "12",
    shape: "square",
    color: "purple"
}

let updatedBoris = removeProps(borisObject,  "color");
let updatedSquare = removeProps(squareObject,  "size", "color");

console.log(updatedBoris)
console.log(updatedSquare)
