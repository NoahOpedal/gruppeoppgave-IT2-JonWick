function playerIdleAnimation(){
    if(animCounter <= 200){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 0;
    }
    else if((animCounter > 200 && animCounter < 225) || (animCounter > 425 && animCounter < 450)){
        playerSpriteCutStartX = 32;
        playerSpriteCutStartY = 0;
    }
    else if(animCounter <= 425){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 32;
    }
    else{
        animCounter = 0;
    }    
    animCounter++;
}

function playerWalkingLeftAnimation(){
    if(animCounter <= 10){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 0;
    }
    else if(animCounter <= 20){
        playerSpriteCutStartX = 32;
        playerSpriteCutStartY = 0;
    }
    else if(animCounter <= 30){
        playerSpriteCutStartX = 0;
        playerSpriteCutStartY = 32;
    }
    else if(animCounter <= 40){
        playerSpriteCutStartX = 32;
        playerSpriteCutStartY = 32;
    }
    else{
        animCounter = 0;
    }                
    animCounter++;
}

function playerWalkingRightAnimation(){
    if(animCounter <= 10){
        playerSpriteCutStartX = 16;
        playerSpriteCutStartY = 0;
    }
    else if(animCounter <= 20){
        playerSpriteCutStartX = 48;
        playerSpriteCutStartY = 0;
    }
    else if(animCounter <= 30){
        playerSpriteCutStartX = 16;
        playerSpriteCutStartY = 32;
    }
    else if(animCounter <= 40){
        playerSpriteCutStartX = 48;
        playerSpriteCutStartY = 32;
    }
    else{        
        animCounter = 0;
    }                
    animCounter++;
}