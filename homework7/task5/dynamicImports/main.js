async function logModules()  {
    let modulePath
    let moduleNumber = prompt('Which to log? (\'1\' or \'2\')')
    if(moduleNumber === '1') {
        modulePath = './first.js'
    } else {
        modulePath = './second.js'
    }
    let {field, someFunc, SomeClass} = await import(modulePath)
    console.log(field)
    someFunc()
    let instance = new SomeClass()
    instance.classFunction()
}
logModules()
