const calculatedValue = currencyCalculator(7)

function currencyCalculator(multiplier) {
    return new Function('a', `return a * ${multiplier}`)
}

console.log(calculatedValue(100));
console.log(calculatedValue(200));
console.log(calculatedValue(250));
