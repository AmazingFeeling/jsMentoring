function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    this.logDetails = function() {
        console.log(`My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`)
    }
}

let person = new Person('Paul', '26', 'Kyiv')
person.logDetails();
