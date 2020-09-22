var btn = document.getElementById("btn");
var cpsText = document.getElementById("cps-text");
var timerText = document.getElementById("timer-text");
var timerValue = document.getElementById("time-input").value;
var clicks = 0;
var hasFuncRan = false;

btn.addEventListener("click", function() {
    clicks++;
    cpsText.style.color = "green";

    if (hasFuncRan == false) {
        btn.textContent = "Click!";
        firstTime = performance.now();
        hasFuncRan = true;
    }
});

setInterval (function() {
    if (hasFuncRan == true) {
        var latestTime = performance.now();
        var elapsedTime = (latestTime - firstTime)/1000;
        var CPS = clicks / (elapsedTime);
        var roundedCPS = CPS.toFixed(2);

        cpsText.style.color = "red";
        cpsText.textContent = `Clicks Per Second: ${roundedCPS}`;
        timerText.textContent = `Time Elapsed: ${elapsedTime.toFixed(1)}`;
    }
}, 125);
