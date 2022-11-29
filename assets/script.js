$(function () {
    //Global var
    var currentTime = dayjs();
    var blockNumber = $(".time-block").map(function () { return (this.id) }).toArray();

    //Save Feature
    $(".saveBtn").click(saveEvent);

    function saveEvent() {
        var blockHour = $(this).parent().attr("id");
        var desc = $(this).siblings(".description").val();
        var blockHourDisplay = $(this).siblings(".hour").text();

        localStorage.setItem(blockHour, desc);

        alert("Saved event to " + blockHourDisplay + "!\n" + desc);
        //Alert to notify save
    }

    checkTime();
    setInterval(checkTime, 1000);

    //Checks the current time to update the color coding of time block
    function checkTime() {
        for (var i = 0; i < blockNumber.length; i++) {
          var blockNumberEl = document.getElementById(blockNumber[i]);
          var currentHour = dayjs().get("hour");
          blockNumberEl.classList.remove("past", "present", "future");
    
          // Coded if Time is current or passed
          if (blockNumber[i] < currentHour) {
            blockNumberEl.classList.add("past");
          } else if (blockNumber[i] == currentHour) {
            blockNumberEl.classList.add("present");
          } else {
            blockNumberEl.classList.add("future");
          }
        }
    };
    //Loading event back in
    loadEvent();
    function loadEvent() {
        var eventList = [];
        for (var i = 0; i < blockNumber.length; i++) {
            eventList.push(localStorage.getItem(blockNumber[i]));
        }
        $(".description").each(function () {
            var taskNumber = ($(this).closest(".time-block").attr("id")) - 9;
            $(this).text(eventList[taskNumber]);
        })
    };

    //Show time on page
    date();
    setInterval(date, 1000);
    //Format
    function date() {
        var currentTime = dayjs();
        $("#currentDay").text(currentTime.format("[It is] MMMM D, YYYY [ at ]hh:mm:ssa"));
    }
});