var btn = document.getElementById("btn");
var i = 0;
var stopNum = 10;
var funcRan = true;
var firstTime;

btn.addEventListener("click", function() {
    i++;
    var latestTime = new Date().getTime();
    console.log(i);
    if (funcRan == true) {
        btn.textContent = "Click!"
        firstTime = new Date().getTime();
    }
    if (stopNum == i) {
        console.log("Stopped Counting");
    }
    CPS = i / (latestTime - firstTime) * 1000;
    funcRan = false;
});