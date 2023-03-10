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


let roomTileValues = new Array(45);

for(let i = 0; i < 45; i ++){
    roomTileValues[i] = new Array(90);
    for(let a = 0; a < 90; a++){

        if (i == 15 || i == 0 || a == 30 || a == 0 || (a == 10 && (i== 14 || i==13 || i == 12))){
            roomTileValues[i][a] = 1
        }
        else{
            roomTileValues[i][a] = 0; 
        }
    }
}

console.log(roomTileValues);


let fps = 60;
let player = new Player(100, 100, 5, roomTileValues);

//SpriteSheet variables
let idleAnimCounter = 0;
let playerSpriteCutStartX;
let playerSpriteCutStartY;

//Import sprites
let totalAssets = 5; //Oppdater denne når vi legger til flere assets
let assetsLoaded = 0;
let playerCrouchingSprite = new Image();
playerCrouchingSprite.src = "sprites/player/player_crouching_sprite.png";
playerCrouchingSprite.onload = loaded();
let playerIdleAnimationSheet = new Image();
playerIdleAnimationSheet.src = "sprites/player/player_idle_animation.png";
playerIdleAnimationSheet.onload = loaded();
let playerJumpingSprite = new Image();
playerJumpingSprite.src = "sprites/player/player_jumping_sprite.png";
playerJumpingSprite.onload = loaded();
let playerWalkingLeftAnimationSheet = new Image();
playerWalkingLeftAnimationSheet.src = "sprites/player/player_walking_left_animation.png";
playerWalkingLeftAnimationSheet.onload = loaded();
let playerWalkingRightAnimationSheet = new Image();
playerWalkingRightAnimationSheet.src = "sprites/player/player_walking_right_animation.png";
playerCrouchingSprite.onload = loaded();

function gameLoop(){
    ctx.clearRect(0, 0, width, height);
    for(let i = 0; i<roomTileValues.length;i++){
        for(let j = 0; j<roomTileValues[i].length;j++){
            if(roomTileValues[i][j]==1){
                ctx.fillStyle = "red";
            }
            else ctx.fillStyle = "blue";
            ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);
        }
    }
    ctx.beginPath();
    ctx.moveTo(0,tileSize*15);
    ctx.lineTo(tileSize*30,tileSize*15);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tileSize*30,0);
    ctx.lineTo(tileSize*30,tileSize*15);
    ctx.stroke();
    player.update();
    player.draw();
}

function loaded(){    
    assetsLoaded++;
    if(assetsLoaded >= totalAssets){
        setInterval(gameLoop, (1/fps)*1000);
    }
}