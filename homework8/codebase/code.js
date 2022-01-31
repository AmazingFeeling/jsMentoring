function sortArray() {
   const array = ['one', 'two', 'three'];

   return array.sort();
}

console.log(sortArray());

function duplicate(firstName) {
   console.log(`Name of the person is: ${firstName}`);
}

duplicate();

function condition(value) {
   if (value > 0) {
      console.log('Number is positive');
   } else if (value < 0) {
      console.log('Number is negavive');
   }
}

condition();

const person = {
   name: 'John',
   lastName: 'Smith',
   age: 35,
};

console.log(`Person's name is ${person.name}`);

console.log('This is a good day!');

function richTheCode(flag) {
   console.log(flag);
   return flag ? 'positive' : 'negative';
}

richTheCode(true);

let temperature = 34;
temperature = 20;

console.log(temperature);

class Animal {
   constructor(kind, age) {
      this.kind = kind;
      this.age = age;
      this.age = kind;

      console.log('Creating animal...');
   }
}

let animal = new Animal('dog', 2);
console.log(animal);

animal = { name: 'sun' };
