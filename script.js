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

  




 })
