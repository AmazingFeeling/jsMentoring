const person = {
    name: "Josh",
    lastName: "Parker",
    city: "Rio",
    age: 45,
    isMarried: false
}

for(let [prop, value] of Object.entries(person)) {
    console.log(`Property ${prop} has value ${value}`)
}
