function playerIdleAnimation(){
    if(idleAnimCounter <= 200){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 0;
    }
    else if((idleAnimCounter > 200 && idleAnimCounter < 225) || (idleAnimCounter > 425 && idleAnimCounter < 450)){
        playerSpriteCutStartX = 32;
        playerSpriteCutStartY = 0;
    }
    else if(idleAnimCounter <= 425){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 32;
    }
    else{
        idleAnimCounter = 0;
    }    
    idleAnimCounter++;
}