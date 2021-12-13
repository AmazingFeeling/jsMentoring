function toDegree(value, degree) {
    let positiveIntValue = Math.round(parseInt(value) < 0 ? -value : value);
    let positiveIntDegree = Math.round(parseInt(degree) < 0 ? -degree : degree);
    return Math.pow(positiveIntValue, positiveIntDegree);
}

console.log(toDegree(2, 2))
console.log(toDegree(-2.1, 2.5))
