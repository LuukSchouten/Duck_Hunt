// define duckgif element
var duck = document.getElementById("duckgif");


// Duck positioning

var richting = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var startY = Math.floor(Math.random() * 800);
var startX = Math.floor(Math.random() * 1700);
duck.style.top = startY + "px";
duck.style.left = startX + "px";



// let duck fly

function moveDuck(){
    var direction = richting[Math.floor(Math.random() * richting.length)];
    switch(direction){
        case "N":
            startY -= 75;
            duck.style.top = startY + "px";
            break;
        case "NE":
            startY -= 56;
            startX += 56;
            duck.style.top = startY + "px";
            duck.style.left = startX + "px";
            break;
        case "E":
            startX += 75;
            duck.style.left = startX + "px";
            break;
        case "SE":
                startX += 56;
                startY += 56;
                duck.style.top = startY + "px";
                duck.style.left = startX + "px";
                break;
        case "S":
                startY += 75;
                duck.style.top = startY + "px";
                break;
        case "SW":
                startY += 56;
                startX -= 56;
                duck.style.top = startY + "px";
                duck.style.left = startX + "px";
                break;
        case "W":
                startX -= 75;
                duck.style.left = startX + "px";
                break;
        case "NW":
                startY -= 56;
                startX -= 56;
                duck.style.top = startY + "px";
                duck.style.left = startX + "px";
                break;
    }
}

// define elements, Add counter and make duck clickable
var hitcounter = 0;
var miscounter = 0;
var raak = document.getElementById("hitteller");
var achtergrond = document.getElementById("background");
var mis = document.getElementById("missteller");
raak.innerHTML = hitcounter;
mis.innerHTML = miscounter;

duck.onclick = function(){
    startY = Math.floor(Math.random() * 800);
    startX = Math.floor(Math.random() * 1700);
    hitcounter += 1;
    raak.innerHTML = hitcounter;
    if(hitcounter == 20){
        alert("YOU WIN");
    }
}

achtergrond.onclick = function(){
    miscounter += 1;
    mis.innerHTML = miscounter;
    if(miscounter == 20){
        alert("DEFEAT");
    }
}

window.setInterval(moveDuck, 500);
