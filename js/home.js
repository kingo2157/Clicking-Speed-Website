var btn = document.getElementById("btn");
var i = 0;
var stopNum = 10;

btn.addEventListener("click", function() {
    btn.textContent = "Click!"
    i++;
    console.log(i);
    if (stopNum == i) {
        console.log("Stopped Counting");
    }
});