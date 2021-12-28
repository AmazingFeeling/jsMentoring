function myFunction(name, timeout) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log(name)
            resolve(name);
        }, timeout);
    })
}

let paulFunc = myFunction('Paul', 1000);
let neoFunc = myFunction('Neo', 1500);
let smithFunc = myFunction('Smith', 2000);

Promise.all([paulFunc, neoFunc, smithFunc]).then(() => {
    console.log('Success!!');
});
