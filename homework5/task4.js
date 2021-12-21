person = {
    age: 27
};
const firstname = {
    firstname: "Samantha"
};
const surname = {
    surname: "Woodson"
};
const occupation = {
    occupation: "Accounter"
};
const nationality = {
    nationality: "American"
};

Object.assign(person, firstname, surname, occupation, nationality)

console.log(JSON.stringify(person))
