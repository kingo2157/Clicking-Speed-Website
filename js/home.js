var btn = document.getElementById("btn");
var counter = document.getElementById("cps-counter");
var clicks = 0;
var hasFuncRan = false;

btn.addEventListener("click", function() {
    clicks++;
    if (hasFuncRan == false) {
        btn.textContent = "Click!";
        firstTime = new Date().getTime();
        hasFuncRan = true;
    }
    var latestTime = new Date().getTime();
    var CPS = clicks / (latestTime - firstTime) * 1000;
    var roundedCPS = CPS.toFixed(3);
    counter.textContent = `Clicks Per Second: ${roundedCPS}`;
});