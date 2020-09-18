var btn = document.getElementById("btn");
var cpsText = document.getElementById("cps-text");
var timerText = document.getElementById("timer-text");
var clicks = 0;
var hasFuncRan = false;

btn.addEventListener("click", function() {
    clicks++;

    if (hasFuncRan == false) {
        btn.textContent = "Click!";
        firstTime = performance.now();
        hasFuncRan = true;
    }
});

setInterval (function() {
    var latestTime = performance.now();
    var elapsedTime = (latestTime - firstTime)/1000;
    var CPS = clicks / (elapsedTime);
    var roundedCPS = CPS.toFixed(1);

    cpsText.textContent = `Clicks Per Second: ${roundedCPS}`;
    timerText.textContent = `Time Elapsed: ${elapsedTime.toFixed(1)}`;
}, 125);
