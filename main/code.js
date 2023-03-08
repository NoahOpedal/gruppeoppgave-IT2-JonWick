const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let roomTileValues = new Array(45);

for(let i = 0; i < 45; i ++){
    roomTileValues[i] = new Array(90);
    for(let a = 0; a < 90; a++){

        if (i == 45 ){
            roomTileValues[i][a] = 1
        }
        else{
            roomTileValues[i][a] = 0; 
        }
    }
}

console.log(roomTileValues);

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


let player = new Player(30, 30, 5, "", roomTileValues);

function gameLoop(){
    ctx.clearRect(0, 0, width, height);
    player.update();
    player.draw();
}

let fps = 60;

setInterval(gameLoop, (1/fps)*1000);