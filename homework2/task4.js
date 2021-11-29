const guineaPig = {
    name: "Jojo",
    type: "guinea pig",
    pawsCount: 4,
    logGuineaPigData() {
        console.log(`This is ${this.name} the ${this.type}, has ${this.pawsCount} paws`)
    }
}
guineaPig.logGuineaPigData();

const cow = {
    name: "Molly",
    type: "cow",
    pawsCount: 4,
    logCowData() {
        console.log(`This is ${this.name} the ${this.type}, has ${this.pawsCount} paws`)
    }
}
cow[`logCowData`]();

const ostrich = {
    name: "Jack",
    type: "ostrich",
    pawsCount: 2,
    logOstrichData() {
        console.log(`This is ${this.name} the ${this.type}, has ${this.pawsCount} paws`)
    }
}
ostrich.logOstrichData();
