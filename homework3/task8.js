let car = {
	brand: 'Ferrary'
};
let carInUse = {
	carBrand: car.brand,
	person: [{name: "Samanta"}, {surname: "Devis"}, {age: 25 }],
	timeInUse: 45
};
car.carInUse = carInUse;

console.log(JSON.stringify(car))
