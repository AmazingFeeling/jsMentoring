const guineaPig = {
    name: "Jojo",
    type: "guinea pig",
    pawsCount: 4,
    logGuineaPigData: (name, type, pawsCount) => {
        console.log(`This is ${name} the ${type}, has ${pawsCount} paws`)
    }
}
guineaPig.logGuineaPigData(guineaPig.name, guineaPig.type, guineaPig.pawsCount);

const cow = {
    name: "Molly",
    type: "cow",
    pawsCount: 4,
    logCowData: (name, type, pawsCount) => {
        console.log(`This is ${name} the ${type}, has ${pawsCount} paws`)
    }
}
cow[`logCowData`](cow.name, cow.type, cow.pawsCount);

const ostrich = {
    name: "Jack",
    type: "ostrich",
    pawsCount: 2,
    logOstrichData: (name, type, pawsCount) => {
        console.log(`This is ${name} the ${type}, has ${pawsCount} paws`)
    }
}

ostrich.logOstrichData(ostrich.name, ostrich.type, ostrich.pawsCount)
