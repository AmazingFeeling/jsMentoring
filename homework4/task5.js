function greetingAfterTimeout(name, timeoutSeconds) {
    setTimeout(greetingFunction, timeoutSeconds * 1000)
}

function greetingFunction(name) {
    console.log(`Hello, I am ${name}`)
}

greetingAfterTimeout('Paul', 5);
