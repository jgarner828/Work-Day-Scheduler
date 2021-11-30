
//This is setting the current date in the header element using moment.js and jquery commands.
var currentDate = moment().format("MMM Do YYYY");
$('#currentDay').text(currentDate);
console.log("this is the currentDate variable showing current time: " + currentDate);

// on click of the save button on any row.... save the text area and the time to local storage.
$('.saveBtn').click(function() {

    var time = $(this).siblings("textarea").attr('id');

    var userInput = $(this).siblings("textarea").val();

    localStorage.setItem(time, userInput);
});



// get current hour in military format... 
var currentHour = moment().hour();
console.log("this is the currentHour variable showing current time: " + currentHour);

// running through all IDs 1 through 24 and comparing to current time...
for (let i = 1; i <= 24; i++) {

    let checkHour = $('#'+i).attr('id');
    console.log(checkHour);


    if (checkHour < currentHour) {
        $('#'+i).addClass("past");
    }
    if (checkHour == currentHour) {
        $('#'+i).addClass("present");
    } 
    if (checkHour > currentHour) {
        $('#'+i).addClass("future");
    } 
}



