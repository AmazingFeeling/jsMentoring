function Calculator(value) {
    this.value = value;
    this.result;
    this.subtr = function (subtrahend) {
        console.log('[Subtraction start]: ' + (typeof this.result == 'undefined' ? 'Initial value: ' + this.value : 'Result before: ' + this.result))
        this.result = (this.result ?? this.value) - subtrahend;
        console.log('Result after: ' + this.result)
        return this;
    }
    this.sum = function (addend) {
        console.log('[Sum start] ' + (typeof this.result == 'undefined' ? 'Initial value: ' + this.value : 'Result before: ' + this.result))
        this.result = (this.result ?? this.value) + addend;
        console.log('Result after: ' + this.result)
        return this;
    }
    this.mul = function (multiplier) {
        console.log('[Multiplication start] ' + (typeof this.result == 'undefined' ? 'Initial value: ' + this.value : 'Result before: ' + this.result))
        this.result = (this.result ?? this.value) * multiplier;
        console.log('Result after: ' + this.result)
        return this;
    }
    this.div = function (divisor) {
        console.log('[Division start] ' + (typeof this.result == 'undefined' ? 'Initial value: ' + this.value : 'Result before: ' + this.result))
        this.result = (this.result ?? this.value) / divisor;
        console.log('Result after: ' + this.result)
        return this;
    }
}

let calculator = new Calculator(5);
calculator.subtr(4).sum(11).div(2).result
