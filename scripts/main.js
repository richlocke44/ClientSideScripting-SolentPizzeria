var checkTime;
function startTime() {
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
	curr_hour = checkTime(curr_hour);
    curr_minute = checkTime(curr_minute);
    curr_second = checkTime(curr_second);
    document.getElementById('clock').innerHTML =
    curr_hour + ":" + curr_minute + ":" + curr_second;
    var time = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startDate(date) {
	var d = new Date();
    if (date) {
        document.getElementById(date).innerHTML = d.toDateString();
    }
}