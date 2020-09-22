var btn = document.getElementById("btn");
var cpsText = document.getElementById("cps-text");
var timerText = document.getElementById("timer-text");
var timerInput = document.getElementById("timer-input");
var timerValue = 0;
var clicks = 0;
var hasTimerRan = false;
var hasFuncRan = false;
var hasTimeRanOut = false;

btn.addEventListener("click", function() {
    if (hasTimeRanOut == false && timerValue >= 0.5) {
        clicks++;
        cpsText.style.color = "green";
    }

    if (hasTimerRan == false && hasTimeRanOut == false) {
        if (timerInput.value.length <= 8) { timerValue = timerInput.value; }
    }

    if (hasFuncRan == false && hasTimeRanOut == false && timerValue >= 0.5) {
        btn.textContent = "Click!";
        firstTime = performance.now();
        timerInput.style.display = "none";
        timerText.style.display = "block";

        hasFuncRan = true;
        hasTimerRan = true;
    }

    if (hasTimeRanOut == true) {
        hasTimerRan = false;
        hasFuncRan = false;
        hasTimeRanOut = false;
        clicks = 0;
        timerValue = 0;

        document.getElementById("timer-input").value = 0;
        timerInput.style.display = "flex";
    }
});

setInterval (function() {
    if (hasFuncRan == true && hasTimeRanOut == false && timerValue >= 0.5) {
        var latestTime = performance.now();
        var elapsedTime = (latestTime - firstTime)/1000;
        var CPS = clicks / (elapsedTime);

        cpsText.style.color = "red";
        cpsText.textContent = `Clicks Per Second: ${CPS.toFixed(2)}`;
        timerText.textContent = `Time Elapsed: ${elapsedTime.toFixed(1)} / ${timerValue}`;

        if (elapsedTime >= timerValue) {
            timerText.textContent = `Time Elapsed: ${timerValue} / ${timerValue}`;
            cpsText.textContent = `CPS: ${CPS.toFixed(2)} Time: ${timerValue} Clicks: ${clicks}`
            cpsText.style.color = "white";
            timerText.style.display = "none";
            btn.textContent = "Click To Restart";

            hasTimeRanOut = true;
        }
    }
}, 100);
