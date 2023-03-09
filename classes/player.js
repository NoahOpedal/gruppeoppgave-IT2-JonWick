class Player{    
    #position;
    #velocity;
    #lives;    
    roomTileValues;

    constructor(x, y, lives, roomTileValues){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(0,0);
        this.#lives = lives;        
        this.roomTileValues = roomTileValues;
        this.damageCounter = 0;
        console.log(this.roomTileValues);

    }
    
        


    

    get position(){
        return new Vector(this.#position.x, this.#position.y);
    }
    get center(){
        let x = this.#position.x + tileSize/2;
        let y = this.#position.y + tileSize;
        return new Vector(x, y);

    }
    get velocity(){
        return this.#velocity;
    }


 

    setVelocityX(newVelocityX){
        this.#velocity.x = newVelocityX;
    }

    setVelocityY(newVelocityY){
        this.#velocity = new Vector(this.velocity.x,newVelocityY);
    }

    setPosition(vector){
        this.#position = new Vector(vector.x, vector.y);
    }

    kill(){
        this.#lives = 0; 
    }

    damage(){
        if(this.damageCounter >= 60){
        this.#lives -= 1;
        this.damageCounter = 0;
        }
    }





    update(){
        if (keys.a == true){
            this.#position.subtract(new Vector(1,0));
        }
        if (keys.d == true){
            this.#position.add(new Vector(1,0));
        }
        if (keys.s == true){
            this.#position.add(new Vector(0,1));
        }
        if (keys.w == true){
            this.#velocity = new Vector(0,(-1.5/2.5)*tileSize);
            keys.w = false
        }

    

        collisionDetection();
        //Room index defined in constructor


        this.#position.add(Vector.multiply(this.#velocity,tileSize/60));
        this.#velocity.add(Vector.multiply(new Vector(0,2),tileSize/60));
    
        this.damageCounter+=1;

    }

   

    draw(){        
        //Generates a player sprite for each scenario, then draws the given sprite
        let playerSpriteSheet;        

        //Jumping sprite
        if(this.#velocity.y != 0){            
            playerSpriteSheet = playerJumpingSprite;
            playerSpriteCutStartX = 0;
            playerSpriteCutStartY = 0;
        }
        //Walking animations

        //Crounching animation
        else if(keys.s == true){
            playerSpriteSheet = playerCrouchingSprite;
            playerSpriteCutStartX = 0;
            playerSpriteCutStartY = 0;
        }
        //Idle animation
        else{
            playerIdleAnimation();
            playerSpriteSheet = playerIdleAnimationSheet;
        }
        ctx.drawImage(playerSpriteSheet, 
            playerSpriteCutStartX, playerSpriteCutStartY,
            15, 31,
            this.position.x, this.position.y,
            tileSize, 2*tileSize
        );                            

    }
}



