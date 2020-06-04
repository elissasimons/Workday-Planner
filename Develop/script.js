$(document).ready(function () {

    //Display current date and time
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text("Today's Date is: " + currentDate);

    //Onclick function to save user input to local storage
    $(".saveBtn").on("click", function () {
        var click = $(this).attr("data-value");
        var eventInput = $(click).val();
        localStorage.setItem(click, eventInput);
    });

    //Variable that refers to work hour timeblocks
    var timeBlocks = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    for (var i = 0; i < timeBlocks.length; i++) {
        var savedEvent = $('.saved-info');
        $(timeBlocks[i]).val(localStorage.getItem(timeBlocks[i]));
    };

    //Defines current work hour
    var currentHour = moment().hours();

    //Changes color of timeblock based on time of work day
    function currentTimeColor() {
        for (var i = 6; i < 18; i++) {

            var hour = '#' + i;
            var scheduleHour = parseInt($(hour).attr("id"));
            $(hour).removeClass();
            if (
                scheduleHour > currentHour) {
                $(hour).attr("class", "row future");
            } else if (
                scheduleHour === currentHour) {
                $(hour).attr("class", "row present");
            } else if (
                scheduleHour < currentHour) {
                $(hour).attr("class", "row past");
            }

        };
    }
    currentTimeColor();
});