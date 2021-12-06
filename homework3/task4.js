let array1 = [1, 2]
let array2 = ['a', 'b']

function logAllPairs(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            resultArray.push([array1[i], array2[j]])
        }
    }
    console.log(JSON.stringify(resultArray))
}

logAllPairs(array1, array2)
