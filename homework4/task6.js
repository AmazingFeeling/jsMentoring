function logger() {
    console.log(`This is a book library\nBook info:\nname - ${this.name}\nauthor - ${this.author}\navailable - ${this.isAvailable}`);
}

const book1 = {
    name: "The Idiot",
    author: "Fyodor Dostoevsky",
    isAvailable: true
};

const book2 = {
    name: "War and Peace",
    author: "Lev Tolstoy",
    isAvailable: true
};

const book3 = {
    name: "Generation P",
    author: "pelevin viktor",
    isAvailable: false
}

function logging() {
    logger.call(book1);
    logger.apply(book2);
    logger.bind(book3)();
}

logging();

