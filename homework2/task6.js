let calculator = {
    val: 0,
    result: 0,
    set value(value) {
        this.val = value;
        this.result = value;
    },
    subtr(subtrahend) {
        console.log('[Subtraction start]: Initial value: ' + this.val + ' Result before: ' + this.result)
        this.result = this.result - subtrahend;
        console.log('Result after: ' + this.result)
        return this;
    },
    sum(addend) {
        console.log('[Sum start] Initial value: ' + this.val + ' Result before: ' + this.result)
        this.result = this.result + addend;
        console.log('Result after: ' + this.result)
        return this;
    },
    mul(multiplier) {
        console.log('[Multiplication start] Initial value: ' + this.val + ' Result before: ' + this.result)
        this.result = this.result * multiplier;
        console.log('Result after: ' + this.result)
        return this;
    },
    div(divisor) {
        console.log('[Division start] Initial value: ' + this.val + ' Result before: ' + this.result)
        this.result = this.result / divisor;
        console.log('Result after: ' + this.result)
        return this;
    }
}
calculator.value = 5
calculator.subtr(4).sum(11).div(2).result
