// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  var saveBtnEl = $(".saveBtn")
  
  saveBtnEl.on("click", function() {

    var time = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();

    localStorage.setItem(time, task)

  })



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var today = dayjs();

  $("#currentDay").text(today.format("dddd, MMMM DD"));

  var currentHour = dayjs().hour();
  console.log("The current hour is: " + currentHour);

  function timeBlockChange() {
    
    $(".time-block").each(function() {
      
      var timeBlockHour = parseInt($(this).attr("id").split("hour-")[1]);

      console.log(this);

      if(timeBlockHour === currentHour) {
        $(this).addClass("present")
      }
      else if(timeBlockHour < currentHour) {
        $(this).addClass("past")
      }
      else if (timeBlockHour > currentHour) {
        $(this).addClass("future")
      }
    })
  }

  timeBlockChange();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

 $("#text-9").val(localStorage.getItem("hour-9"))
 $("#text-10").val(localStorage.getItem("hour-10"))
 $("#text-11").val(localStorage.getItem("hour-11"))
 $("#text-12").val(localStorage.getItem("hour-12"))
 $("#text-13").val(localStorage.getItem("hour-13"))
 $("#text-14").val(localStorage.getItem("hour-14"))
 $("#text-15").val(localStorage.getItem("hour-15"))
 $("#text-16").val(localStorage.getItem("hour-16"))
 $("#text-17").val(localStorage.getItem("hour-17"))

  // TODO: Add code to display the current date in the header of the page.
});
