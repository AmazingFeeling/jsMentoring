function greetingAfterTimeout(name, timeoutSeconds) {
    setTimeout(() => console.log(`Hello, I am ${name}`), timeoutSeconds * 1000)
}

greetingAfterTimeout('Paul', 5);
