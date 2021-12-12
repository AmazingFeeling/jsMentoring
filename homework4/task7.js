const isLegal = age => {
    if (age > 17)
        return "Action allowed.";
    else
        return "Warning! Action restricted.";
};

const getGreeting = name => `Hello! My name is ${name}`;

const calculateSum = (a, b) => {
    if(a === 0 && b === 0)
        return 0;

    return a + b;
};

console.log(isLegal(5));
console.log(getGreeting('Paul'));
console.log(calculateSum(2,2));
