var btn = document.getElementById("btn");
var cpsText = document.getElementById("cps-text");
var cpsCounter = document.getElementById("cps-counter");
var clicks = 0;
var hasFuncRan = false;

btn.addEventListener("click", function() {
    clicks++;
    if (hasFuncRan == false) {
        btn.textContent = "Click!";
        firstTime = new Date().getTime();
        hasFuncRan = true;
        cpsText.textContent = "Clicks Per Second: ";
    }
    var latestTime = new Date().getTime();
    var CPS = clicks / (latestTime - firstTime) * 1000;
    var roundedCPS = CPS.toFixed(3);
    cpsCounter.textContent = `sapd ${roundedCPS}`;
});