function playerIdleAnimation(){
    if(idleAnimCounter < 200){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 0;
    }
    else if((idleAnimCounter > 200 && idleAnimCounter < 250) || (idleAnimCounter > 450 && idleAnimCounter > 700)){
        playerSpriteCutStartX = 32;
        playerSpriteCutStartY = 0;
    }
    else if(idleAnimCounter < 450){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 32;
    }
    else{
        idleAnimCounter = 0;
    }
    idleAnimCounter++;
}