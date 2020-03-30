var m = moment();
// Call today's date and time through moment.js. console log the desired format to check.
console.log(m.format("dddd MMMM Do, YYYY"));
// create a new var that takes this desired format (for display in DOM below).
var today = m.format("dddd MMMM Do, YYYY");
// Inject today in currentDay paragraph.
$("#currentDay").text(today);
// Create a variable for the current hour of the day, console log to check.
var hour = m.format("H");
// var for array of 24 military hours.
var hourArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
// var to create an html id, based on the current hour (see ids in the html)
var currentHourId = "#" + hour;
// var to reference the array index position based on the current military hour. 
// This will be used in the 'pastHours' function following.
var hourArrayIndexPosition = hourArray[hour];

// This function iterates through the hours array until it reaches the current hour. While iterating
// through it changes the class of the table rows in the html, to reflect different background colors,
// as required in this application. Past hours are given a grey background.
function pastHours() {

    for (let i = 0; i < hourArrayIndexPosition; i++) {
        const pastHourId = "#" + hourArray[i];
        const pastHourIdString = pastHourId.toString();
        $(pastHourIdString).attr("class", "table-secondary");
    }
}

// Performing pastHours function defined above.
pastHours();

// This function simply alters the current hour's related row in the html, with a class that
// paints the background in red.
function currentHour() {
    $(currentHourId).attr("class", "table-danger");
}

// Perforing currentHour function above.
currentHour();

