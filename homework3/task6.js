const object = {
    objectStringProperty: 'test',
    objectNumberProperty: 42,
    objectBooleanProperty: true
};

function createArrayFromObject(object) {
    let arrayFromObject = Object.entries(object);
    console.log('Log array created from object:')
    console.log(JSON.stringify(arrayFromObject));

    let objectFromArray = Object.fromEntries(arrayFromObject);
    console.log('Log object created from array:')
    console.log(objectFromArray);
}

createArrayFromObject(object)
