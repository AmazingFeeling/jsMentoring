const object = {
    objectStringProperty: 'test',
    objectNumberProperty: 42,
    objectBooleanProperty: true
};

function createArrayFromObject(object) {
    let arrayFromObject = [];
    for(let [prop, value] of Object.entries(object)) {
        arrayFromObject.push(prop);
        arrayFromObject.push(value);
    }
    console.log('Log array created from object:')
    console.log(arrayFromObject);

    let objectFromArray = {};
    for (let i = 0; i < arrayFromObject.length; i++) {
        objectFromArray[arrayFromObject[i]] = arrayFromObject[i + 1];
        i++;
    }

    console.log('Log object created from array:')
    console.log(objectFromArray);
}

createArrayFromObject(object)
