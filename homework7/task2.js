function isEmailAddress(string) {
    let mailAddressRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return mailAddressRegex.test(string)
}

function isIpAddress(string) {
    let ipAddressRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    return ipAddressRegex.test(string)
}

function isVisaCreditCardNumber(string) {
    let visaCreditCardRegex = /^4[0-9]{12}(?:[0-9]{3})$/
    return visaCreditCardRegex.test(string)
}

console.log(isEmailAddress('pavlo_nykonenko@epam.com'))
console.log(isIpAddress('255.255.255.255'))
console.log(isVisaCreditCardNumber('4062877462775238'))