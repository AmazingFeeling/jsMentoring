let field = '2nd: some random value'

function someFunc() {
    console.log('2nd: function is called')
}

class SomeClass {
    classFunction() {
        console.log('2nd: function inside class called')
    }
}

export {field, someFunc, SomeClass};
