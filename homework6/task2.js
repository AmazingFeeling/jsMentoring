function myFunction(boolean) {
    return new Promise(function (resolve, reject) {
        if (boolean === true) {
            resolve();
        } else {
            reject();
        }
    });
}

let resolvedFunc = () => console.log('called resolved')
let rejectFunc = () => console.log('called rejected')

myFunction(true).then(resolvedFunc, rejectFunc);
myFunction(false).then(resolvedFunc, rejectFunc);
