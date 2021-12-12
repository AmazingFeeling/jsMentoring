function longestWord(...args) {
    let length = 0;
    let longestWord = '';
    for(let value of args) {
        if(value.length > length) {
            longestWord = value;
            length = value.length;
        }
    }
    return longestWord;
}
console.log(longestWord('this', 'is', 'a', 'real', 'world'));
console.log(longestWord('keeper', 'or', 'Harry'));
console.log(longestWord('sportcar'));
