const guineaPig = {
    name: "Jojo",
    type: "guinea pig",
    pawsCount: 4,
    logGuineaPigData: function() {
        console.log(`This is ${this.name} the ${this.type}, has ${this.pawsCount} paws`)
    }
}
guineaPig.logGuineaPigData();

const cow = {
    name: "Molly",
    type: "cow",
    pawsCount: 4,
    logCowData: function() {
        console.log(`This is ${this.name} the ${this.type}, has ${this.pawsCount} paws`)
    }
}
cow[`logCowData`]();

const ostrich = {
    logOstrichData: function() {
        console.log(`This is ${this.name} the ${this.type}, has ${this.pawsCount} paws`)
    }
}

const ostrichDetails = {
    name: "Jack",
    type: "ostrich",
    pawsCount: 2,
}

ostrich.logOstrichData.call(ostrichDetails)
