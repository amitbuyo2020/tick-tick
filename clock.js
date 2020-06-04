var noon = 12;

var showCurrentTime = function() {
    
    var clockk = document.getElementById('clockey');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutess = currentTime.getMinutes();
    var secss = currentTime.getSeconds();
    var meridian = 'AM';

    // Set Hours
    if(hours >= noon) {
        meridian = "PM";
    }
    
    if(hours > noon){
        hours = hours - 12;
    }

    // Set Minutes
    if(minutess < 10) {
        minutess  = "0" + minutess;
    }

    // Set Seconds
    if(secss < 10) {
        secss = "0" + secss;
    }

    // Putting Together hours, minutes and seconds
    var clockTime = hours + ":" + minutess + ":" + secss + " " + meridian + "!";
    clockk.innerText = clockTime;
};

var updateClock = function(){
    showCurrentTime();
}
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
a