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
    q:false
}
const height = canvas.height = 524;
const width = canvas.width = 1048;
const tileSize = width/24;
const pixel = tileSize/16;
let bullets;
let roomTileValues;
let rooms;
let fps;
let player;
let enemy1;
let animCounter = 0;
let playerSpriteCutStartX;
let playerSpriteCutStartY;
let playerStanding = false;
function init(){
    bullets = [];
    roomTileValues = new Array(45);

    rooms = [];

    for(let i = 0; i < 45; i ++){
        roomTileValues[i] = new Array(90);
        for(let a = 0; a < 90; a++){

            if (layers[2].data[i*90+a] == 1){
                roomTileValues[i][a] = 1; 
            }
            else{
                roomTileValues[i][a] = 0; 
            }

            
        }
    }

    fps = 60;
    player = new Player(tileSize*10, tileSize*10, 5, roomTileValues);
    enemy1 = new Enemy(tileSize*20, tileSize*10, 10, 3);
    //SpriteSheet variables

    setInterval(gameLoop, (1/fps)*1000);

}
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
let enemy1Sprite = new Image();
enemy1Sprite.src = "sprites/red_cube_enemy_sprite.png";
enemy1Sprite.onload = loaded();
let tilesheet = new Image();
tilesheet.src = "sprites/tiles/tilesheet3.png";
tilesheet.onload = loaded();


let url = "sprites/tiles/tilesheet.json";
let layers;

let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", url);
httpRequest.onload = handleResponse;
httpRequest.send();

function handleResponse(){
    let klasser = JSON.parse(httpRequest.responseText);
    layers = klasser.layers;
    loaded();
}



function gameLoop(){
    

    ctx.clearRect(0, 0, width, height);
    let playerPosTile = tileVector(player.position)
    for(let i = playerPosTile.y-7; i<14;i++){
        for(let j = playerPosTile-13; j<26;j++){
            /*
            if(roomTileValues[i][j]==1){
                ctx.fillStyle = "red";
            }
            else if(roomTileValues[i][j]==4){
                ctx.fillStyle = "orange";
            }
            else ctx.fillStyle = "blue";
            ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);
            */
           let tilenum = layers[0].data[i*90+j];
           if(tilenum != 0)
           ctx.drawImage(tilesheet, (tilenum-1)%5*16, Math.floor((tilenum-1)/5)*16, 16, 16,j*tileSize, i*tileSize, tileSize, tileSize);
        }
    }
   
    for(let i = 0; i < bullets.length; i ++){
        
        bullets[i].update();
    }
    player.update();
    enemy1.update();

    
    

    for(let i = 0; i < bullets.length; i ++){
        if(bullets[i].visible){
            bullets[i].draw();
        }
    }
    enemy1.draw();
    player.draw();


    
 
    
    if(bullets.length > 0){
        
    }

}



function loaded(){    
    assetsLoaded++;
    if(assetsLoaded >= totalAssets){
        setTimeout(
        init,
        100);
    }
}