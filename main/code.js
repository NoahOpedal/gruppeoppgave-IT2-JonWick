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
const width = canvas.width;
const height = canvas.height;
let tileSize = 16;


let player = new Player(30, 30, 5, "");

function gameLoop(){
    ctx.clearRect(0, 0, width, height);
    player.update();
    player.draw();
    






    
}

let fps = 60;

setInterval(gameLoop, (1/fps)*1000);