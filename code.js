const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Constants
 let collisionLeft = false;
 let collisionRight = false;
 let standing = false; 


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

        if (i == 15 || i == 0  || a == 0 || (a == 45 && (i == 14 ))){
            roomTileValues[i][a] = 1
        }
        else if (i == 14 && a>10){
            roomTileValues[i][a] = 0;
        }
        else{
            roomTileValues[i][a] = 0; 
        }

        if(i == 10 && a == 10){
    
        }
    }
}

let fps = 60;
let player = new Player(700, 100, 5, roomTileValues);
let enemy1 = new Enemy(500, 100, 10, 3);

//SpriteSheet variables
let animCounter = 0;
let playerSpriteCutStartX;
let playerSpriteCutStartY;
let playerStanding = false;

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
let enemy1Sprite = new Image();
enemy1Sprite.src = "sprites/enemies/red_cube_enemy_sprite.png";
enemy1Sprite.onload = loaded();

function gameLoop(){
    

    ctx.clearRect(0, 0, width, height);
    for(let i = 0; i<roomTileValues.length;i++){
        for(let j = 0; j<roomTileValues[i].length;j++){
            if(roomTileValues[i][j]==1){
                ctx.fillStyle = "red";
            }
            else if(roomTileValues[i][j]==4){
                ctx.fillStyle = "orange";
            }
            else ctx.fillStyle = "blue";
            ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);
        }
    }
    for(let i = 0; i < bullets.length; i ++){
        bullets.update();
    }
    player.update();
    enemy1.update();
    enemy1.draw();
    player.draw();
    for(let i = 0; i < bullets.length; i ++){
        bullets.draw();
    }

}

function loaded(){    
    assetsLoaded++;
    if(assetsLoaded >= totalAssets){
        setInterval(gameLoop, (1/fps)*1000);
    }
}