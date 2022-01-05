function myFunction(name, timeout) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log(name)
            resolve(name);
        }, timeout);
    })
}

myFunction('Paul', 1000);
