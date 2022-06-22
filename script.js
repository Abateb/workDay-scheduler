 $(document).ready(function () { // tells engine to load html & css first.
  //display current day & time.
  $("#currentDay").text(moment().format("MMMM Do YYY, h:mm:ss a")); // use of moment.js
  //assign saveBtn click listener for user input and time stamp
  $(".saveBtn").on("click", function() {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //set items in local storage.
    localStorage.setItem(time,text);
  })
  //load any saved data from LocalStorage - do this for every hour created following html 24 hour to 12 hour conversion.
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour8 .description").val(localStorage.getItem("hour9"));
  $("#hour8 .description").val(localStorage.getItem("hour10"));
  $("#hour8 .description").val(localStorage.getItem("hour11"));
  $("#hour8 .description").val(localStorage.getItem("hour12"));
  $("#hour8 .description").val(localStorage.getItem("hour13"));
  $("#hour8 .description").val(localStorage.getItem("hour14"));
  $("#hour8 .description").val(localStorage.getItem("hour15"));
  $("#hour8 .description").val(localStorage.getItem("hour16"));
  $("#hour8 .description").val(localStorage.getItem("hour17"));

  function timeTracker() {
    //get current number of hours.
    var currentHour = moment().hour(); //the use of moment.js

    // loop over time blocks
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      //check if we moved past this time, click into given classes of past, present or future!
         if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
       }

      else if ( blockHour === currentHour ) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }

      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
  })

  }
  timeTracker(); //rerun function
})





// fetch().then() // go fetch something and then do something to it


// fetch("http://www.omdbapi.com/?t=training+day&y=2001")
// .then(function(response) {
// return response.json();
// })
// .then(function(response2) {
//   console.log (response2)
//   console.log (response2.runtime)
//   console.log (response2.ratings[1].Value)
// });


//  https://www.google.com/



//  http://www.omdbapi.com/?t=space+jam&y=1990

//  http://www.omdbapi.com/? t=space+jam & y=1990

//  "http://www.omdbapi.com/   ?  apikey= 58fr55897 & t=space+jam"
