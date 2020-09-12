var btn = document.getElementById("btn");
var counter = document.getElementById("cps-counter");
var i = 0;
var stopNum = 10;
var funcRan = true;
var firstTime;

btn.addEventListener("click", function() {
    i++;
    var latestTime = new Date().getTime();
    if (funcRan == true) {
        btn.textContent = "Click!"
        firstTime = new Date().getTime();
    }
    if (stopNum == i) {
        console.log("Stopped Counting");
    }
    var CPS = i / (latestTime - firstTime) * 1000;
    var rounded_CPS = CPS.toFixed(3);
    counter.textContent = `Clicks Per Second: ${rounded_CPS}`;
    funcRan = false;
});