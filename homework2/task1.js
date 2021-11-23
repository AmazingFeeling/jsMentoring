function Car(model, color) {
    this.model = model;
    this.color = color;
    this.logCarDetails = function() {
        console.log('Car`s model: ' + this.model + ', and color: ' + this.color)
    }
}

let firstObject = new Car('Mercedes', 'Black');
firstObject.logCarDetails();


let secondObject = {
    model: 'Bentley',
    color: 'White',
};

secondObject.logCarDetails =  function() {
    console.log('Car`s model: ' + this.model + ', and color: ' + this.color)
}

secondObject.logCarDetails();
