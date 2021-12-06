const object = {
    objectStringProperty: 'test',
    objectNumberProperty: 42,
    objectBooleanProperty: true
};

function createMapFromObject(object) {
    let mapFromObject = new Map(Object.entries(object));
    console.log('Log map created from object:')
    mapFromObject.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));

    let objectFromMap = Object.fromEntries(mapFromObject);
    console.log('Log object created using map:')
    Object.entries(objectFromMap).forEach(([property, value]) => console.log(`Object property ${property} has value ${value}`));
}

createMapFromObject(object)
