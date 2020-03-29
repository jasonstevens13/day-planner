var m = moment();
// Call today's date and time through moment.js. console log the desired format to check.
console.log(m.format("dddd MMMM Do, YYYY"));
// create a new var that takes this desired format (for display in DOM below).
var today = m.format("dddd MMMM Do, YYYY");
// Inject today in currentDay paragraph.
$("#currentDay").text(today);




