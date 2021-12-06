let date1 = '2011-10-02';
let date2 = 1234567890000;
let date3 = [2014, 0, 1];
let date4 = new Date(2014, 0, 1);

function formatDate(providedDate) {
    let tempDate;
    if(Array.isArray(providedDate)) {
        tempDate = new Date(providedDate[0], providedDate[1], providedDate[2])
    } else {
        tempDate = new Date(providedDate);
    }

    let dayOfMonth = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    let year = tempDate.getFullYear().toString();
    if(month < 10) {
        month = '0' + month;
    }
    if(dayOfMonth < 10) {
        dayOfMonth = '0' + dayOfMonth;
    }
    if(year.length > 2) {
        year = year.slice(year.length - 2)
    }
    let formattedDate = dayOfMonth + '.' + month + '.' + year

    console.log('Formatted date: ' + formattedDate)
}

formatDate(date1)
formatDate(date2)
formatDate(date3)
formatDate(date4)
