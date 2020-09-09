var btn = document.getElementById("btn");
var i = 0;
var stopNum = 10;
var funcRan = true;
var firstTime;

btn.addEventListener("click", function() {
    i++;
    console.log(i);
    var latestTime = new Date().getTime();
    if (funcRan == true) {
        btn.textContent = "Click!"
        firstTime = new Date().getTime();
    }
    if (stopNum == i) {
        console.log("Stopped Counting");
    }
    console.log(i / (latestTime - firstTime) * 1000);
    funcRan = false;
});