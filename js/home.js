var btn = document.getElementById("btn");
var cpsText = document.getElementById("cps-text");
var timerText = document.getElementById("timer-text");
var timerValue = 0;
var clicks = 0;
var hasTimerRan = false;
var hasFuncRan = false;
var hasTimeRanOut = false;

btn.addEventListener("click", function() {
    if (hasTimerRan == false && hasTimeRanOut == false) {
        timerValue = document.getElementById("timer-input").value;
    }

    clicks++;

    cpsText.style.color = "green";

    if (hasFuncRan == false && timerValue >= 0.5 && hasTimeRanOut == false) {
        hasTimerRan == true;
        btn.textContent = "Click!";
        firstTime = performance.now();
        hasFuncRan = true;
    }
});

setInterval (function() {
    if (hasFuncRan == true && timerValue >= 0.5 && hasTimeRanOut == false) {
        var latestTime = performance.now();
        var elapsedTime = (latestTime - firstTime)/1000;
        var CPS = clicks / (elapsedTime);
        var roundedCPS = CPS.toFixed(2);

        cpsText.style.color = "red";
        cpsText.textContent = `Clicks Per Second: ${roundedCPS}`;
        timerText.textContent = `Time Elapsed: ${elapsedTime.toFixed(1)} / ${timerValue}`;

        if (elapsedTime >= timerValue) {
            // timerText.textContent = `Time Elapsed: ${elapsedTime.toFixed(0)} / ${timerValue}`; doesnt work with decimals
            hasTimeRanOut = true;
        }
    }
}, 100);
