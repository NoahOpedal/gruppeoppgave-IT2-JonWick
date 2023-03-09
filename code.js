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
const tileSize = width/90*2.5;
const pixel = tileSize/16;

let fps = 60;
let player = new Player(30, 30, 5);

//SpriteSheet variables
let idleAnimCounter = 0;
let playerSpriteCutStartX;
let playerSpriteCutStartY;

//Import sprites
let totalAssets = 7; //Oppdater denne når vi legger til flere assets
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
let cobbleStoneTile = new Image();
cobbleStoneTile.src = "sprites/tiles/cobblestone_tile.png";
cobbleStoneTile.onload = loaded();
let brickTile = new Image();
cobbleStoneTile.src = "sprites/tiles/brick_tile.png";
cobbleStoneTile.onload = loaded();
function gameLoop(){
    ctx.clearRect(0, 0, width, height);
    player.update();
    player.draw();
}

function loaded(){    
    assetsLoaded++;
    if(assetsLoaded >= totalAssets){
        setInterval(gameLoop, (1/fps)*1000);
    }
}