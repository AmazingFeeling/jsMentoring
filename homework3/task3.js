let firstArray = [1,2,2,3,4,4,5]
let secondArray = [1,2,3,4]
const getDuplicates = array => array.filter((element, i, array) => array.indexOf(element) !== i)

function removeDuplicated(array) {
    let result = [];
    let duplicates = getDuplicates(array);
    array.forEach(value => {
        if(!duplicates.includes(value)) {
            result.push(value)
        }
    })
    console.log(result)
}
removeDuplicated(firstArray)
removeDuplicated(secondArray)
