var btn = document.getElementById("btn");
var i = 0;

btn.addEventListener("click", function() {
    btn.textContent = "Click!"
    i++;
    console.log(i);
});