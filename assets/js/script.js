// Code is wrapped in a jQuery function so that it is run after all elements have been rendered.

$(function () {

  var saveBtnEl = $(".saveBtn")
  
// This function will save the contents of the text area to local storage upon clicking the save button. Text area can also be saved blank.
  
  saveBtnEl.on("click", function() {

    var time = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();

    localStorage.setItem(time, task);

  })

  var today = dayjs();

// This code displays the current day and date.

  $("#currentDay").text(today.format("dddd, MMMM DD"));

// These variables show what the current hour is. Console logged to get a visual confirmation.

  var currentHour = dayjs().hour();
  console.log("The current hour is: " + currentHour);

// This function will add a class to each time-block, color-coding them according to what the current hour is.

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

// The contents saved to local storage for each time-block will display upon webpage load or refresh.

 $("#text-9").val(localStorage.getItem("hour-9"));
 $("#text-10").val(localStorage.getItem("hour-10"));
 $("#text-11").val(localStorage.getItem("hour-11"));
 $("#text-12").val(localStorage.getItem("hour-12"));
 $("#text-13").val(localStorage.getItem("hour-13"));
 $("#text-14").val(localStorage.getItem("hour-14"));
 $("#text-15").val(localStorage.getItem("hour-15"));
 $("#text-16").val(localStorage.getItem("hour-16"));
 $("#text-17").val(localStorage.getItem("hour-17"));

});