$(document).ready(function() {
    $('a').markCurrentPage();
});

// Should I make myself some Date() tools?

// Takes an input Date object and returns the date of month suffix (e.g., st, nd, rd, th)
function dateSuffix(date) {
    var dateDay = date.getDate();
    var dateSuffix = 'th';
    if (dateDay == 1) {
        dateSuffix = 'st';
    } else if (dateDay == 2) {
        dateSuffix = 'nd';
    } else if (dateDay == 3) {
        dateSuffix = 'rd';
    }
    return dateSuffix;
}

// Takes an inpute Date object and returns the name of that month
function monthName(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth() - 1];
}

// Accepts a string date in the format of YYYY-MM-DD and returns a Date() object for that string
function timeFormatter(inputDate) {

    // Make sure number is formatted YYYY-MM-DD, fail if not
    if (!inputDate.match(/\d{4}-\d{2}-\d{2}/i)) {
        console.log('invalid date used as input');
        return;
    }
    var d = new Date();

    dateArray = inputDate.split('-');

    d.setFullYear(dateArray[0]);
    d.setMonth(dateArray[1]);
    d.setDate(dateArray[2]);

    return d;
}

// Adds leading zeroes to numbers between 0-10 exclusive and returns as string, otherwise returns number unaltered
function addZeroLead(num) {
    if (num < 10 && num > 0) {
        return "0" + num;
    } else {
        return num;
    }
}
