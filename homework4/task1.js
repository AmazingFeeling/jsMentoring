const todayDate = function() {
    let date = new Date(Date.now());

    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return dayOfMonth + '.' + month + '.' + year
}
console.log(todayDate());
