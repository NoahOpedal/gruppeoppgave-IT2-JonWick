const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Constants
let keys = {
    a:false,
    s:false,
    d:false,
    w:false,
    space:false
}
const height = canvas.height = window.innerHeight;
const width = canvas.width = height*2;
const tileSize = width/90;
const pixel = tileSize/16;


let player = new Player(30, 30, 5, "");

function gameLoop(){
    ctx.clearRect(0, 0, width, height);
    player.update();
    player.draw();
}

let fps = 60;

setInterval(gameLoop, (1/fps)*1000);