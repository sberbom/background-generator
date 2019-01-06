var css=document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomRgb(){
    return "rgb(" + Math.floor(Math.random() *256) + "," + Math.floor(Math.random() *256) +"," +Math.floor(Math.random() *256) +")";
}

function setRandomColor(){
    var lokalColor1 = getRandomRgb();
    var lokalColor2 = getRandomRgb();
    body.style.background = "linear-gradient(to right, " 
    + lokalColor1
    + ", " 
    + lokalColor2
    + ")";

    css.textContent = body.style.background + ";";
}

setRandomColor();

button.addEventListener("click", setRandomColor)

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)