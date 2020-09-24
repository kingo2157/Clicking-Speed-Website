var btn = document.getElementById("btn");
var cpsText = document.getElementById("cps-text");
var cpsTextValue = document.getElementById("cps-text-value");
var timerText = document.getElementById("timer-text");
var timerTextValue = document.getElementById("timer-text-value");
var timerInput = document.getElementById("timer-input");
var timerValue = 0;
var clicks = 0;
var i = 0;
var oldCPS = 0;
var hasTimerRan = false;
var hasFuncRan = false;
var hasTimeRanOut = false;

btn.addEventListener("click", function() {
    if (hasTimeRanOut == false && timerValue >= 0.5) {
        clicks++;
    }

    if (hasTimerRan == false && hasTimeRanOut == false) {
        if (timerInput.value.length <= 8) { timerValue = timerInput.value; }
    }

    if (hasFuncRan == false && hasTimeRanOut == false && timerValue >= 0.5) {
        btn.textContent = "Click!";
        firstTime = performance.now();
        timerInput.style.display = "none";
        timerText.style.display = "block";
        timerTextValue.style.display = "block";
        cpsTextValue.style.display = "block";

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
        i++;

        cpsText.textContent = 'Clicks Per Second';
        cpsTextValue.textContent = `${CPS.toFixed(2)}`;
        timerText.textContent = 'Time Elapsed';
        timerTextValue.textContent = `${elapsedTime.toFixed(1)} / ${timerValue}`;

        if (i % 2 == 0) { 
            oldCPS = CPS; 
        } else {
            if (CPS > oldCPS) {
                cpsTextValue.style.color = "green";
            } else {
            cpsTextValue.style.color = "red";
            }
        }

        if (elapsedTime >= timerValue) {
            timerText.textContent = `Time Elapsed: ${timerValue} / ${timerValue}`;
            cpsText.textContent = `CPS: ${CPS.toFixed(2)} Time: ${timerValue}s Clicks: ${clicks}`
            cpsText.style.color = "white";
            timerText.style.display = "none";
            timerTextValue.style.display = "none";
            cpsTextValue.style.display = "none";
            btn.textContent = "Click To Restart";

            hasTimeRanOut = true;
        }
    }
}, 100);
