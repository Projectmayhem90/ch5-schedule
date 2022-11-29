(function () {
    var currentTime = dayjs();
    var blockNumber = $(".time-block").map(function () { return (this.id) }).toArray();

    $(".saveBtn").click(saveEvent);

    function saveEvent() {
        var blockHour = $(this).parent().attr("id");
        var desc = $(this).siblings(".description").val();
        var blockHourDisplay = $(this).siblings('hour').text();

        localStorage.setItem(blockHour, desc);

        alert("Saved event to " + blockHourDisplay + "!/n" + dec);
    }

    checkTime();
    setInterval(checkTime, 1000);

    function checkTime() {
        for (var i = 0; i < blockNumber.length; i++) {
            var blockNumberEL = document.getElementById(blockNumber[i]);
            var currentHour = dayjs().get('hour');
            blockNumberEL.classList.remove("past", "present", "future");

            if (blockNumber[i] < currentHour) {
                blockNumberEL.classList.add('past');
            } else if (blockNumber[i] == currentHour) {
                blockNumberEL.classList.add("present");
            } else {
                blockNumberEL.classList.add("future");
            }
        }
    };

    loadEvent();
    function loadEvent() {
        var eventlist = [];

        for (var i = 0; i < blockNumber.length; i++) {
            eventlist.push(localStorage.getItem(blockNumber[i]));
        }

        $(".description").each(function () {
            var taskNumber = ($(this).closets(".time-block").attr("id")) - 9;
            $(this).text(eventlist[taskNumber]);
        })
    };

    Date();
    setInterval(date, 1000);

    function date() {
        var currentTime = dayjs();
        $("#currentDay").text(currentTime.format("[It is] MMMM D, YYYY [ at ]hh:mm:ssa"));
    }

});