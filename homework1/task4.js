function myFunc(variable) {
    if(typeof variable == 'number') {
        console.log('About to convert number ' + variable + ' to "string" using String():')
        let stringResult1 = String(variable);
        console.log('result: ' + stringResult1 + ', type: ' + typeof stringResult1);

        console.log('About to convert number ' + variable + ' to "string" using toString():')
        let stringResult2 = variable.toString();
        console.log('result: ' + stringResult2 + ', type: ' + typeof stringResult2);

        console.log('About to convert number ' + variable + ' to "boolean" using Boolean():')
        let booleanResult1 = Boolean(variable);
        console.log('result: ' + booleanResult1 + ', type: ' + typeof booleanResult1);

        console.log('About to convert number ' + variable + ' to "boolean" using "!!":')
        let booleanResult2 = !!variable;
        console.log('result: ' + booleanResult2 + ', type: ' + typeof booleanResult2);
    } else if (typeof variable == 'string') {
        console.log('About to convert string ' + variable + ' to "number" using String():')
        let stringResult1 = Number(variable);
        console.log('result: ' + stringResult1 + ', type: ' + typeof stringResult1)

        console.log('About to convert string ' + variable + ' to "number" using parseInt():')
        let stringResult2 = parseInt(variable);
        console.log('result: ' + stringResult2 + ', type: ' + typeof stringResult2)

        console.log('About to convert string ' + variable + ' to "boolean" using Boolean():')
        let booleanResult1 = Boolean(variable);
        console.log('result: ' + booleanResult1 + ', type: ' + typeof booleanResult1)

        console.log('About to convert number ' + variable + ' to "boolean" using "!!":')
        let booleanResult2 = !!variable;
        console.log('result: ' + booleanResult2 + ', type: ' + typeof booleanResult2);
    }
}
myFunc(1397);
myFunc('5307');