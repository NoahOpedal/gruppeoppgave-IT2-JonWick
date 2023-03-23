class Player{    
    #position;
    #velocity;
    #lives;    
    #acceleration;
    roomTileValues;

    constructor(x, y, lives, roomTileValues){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(0,0);
        this.#acceleration = new Vector(0,2);
        this.#lives = lives;        
        this.roomTileValues = roomTileValues;
        this.damageCounter = 0;
        console.log(this.roomTileValues);

    }
    
        


    get acceleration(){
        return new Vector(this.#acceleration.x, this.#acceleration.y);
        
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


 

    addVelocity(vector){
        this.#velocity.add(vector);
    }



    setAcceleration(vector){
        this.#acceleration = vector;

    }

    setVelocityX(newVelocityX){
        this.#velocity = new Vector(newVelocityX,this.velocity.y);
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
        /*if (keys.a == true){
            this.#velocity = (new Vector(-1,this.#velocity.y));
        }


        if (keys.d == true){
            this.#position.add(new Vector(1,0));
        }
        */

        /*if (keys.s == true){
            this.#position.add(new Vector(0,1));
        }
        if (keys.w == true){
            this.#velocity = new Vector(0,(-1.5/2.5)*tileSize);
            keys.w = false
        }*/

    

        collisionDetection();
        //Room index defined in constructor

        /*
        if(keys.a == false && this.#velocity.x < -0.1 && this.#velocity.x != 0 ){
            this.#velocity = new Vector(this.#velocity.x + 1, this.#velocity.y);
        }
        if(keys.d == false && this.#velocity.x > 0.1 && this.#velocity.x != 0){
            this.#velocity = new Vector(this.#velocity.x - 1, this.#velocity.y);
        }*/

        /*
        if (this.#velocity.x > 6){
            this.#velocity = new Vector(6, this.#velocity.y);
        }
        if (this.#velocity.x < -6){
            this.#velocity = new Vector(-6, this.#velocity.y);
        }
        */


       
        this.#position.add(Vector.multiply(this.velocity,tileSize/60));
        console.log(Vector.multiply(this.acceleration,tileSize/60));
        this.#velocity.add(Vector.multiply(this.acceleration,tileSize/60));


        
        if(keys.a == false && this.#velocity.x < 0 ){
            this.#velocity.subtract(new Vector(-0.5, 0));
    
        }
        if(keys.d == false && this.#velocity.x > 0 ){
            this.#velocity.subtract(new Vector(0.5, 0));
            console.log("jskjefhsjfk");
        }
        
       
        if(this.#velocity.x > 0.1){

            //this.#velocity.subtract(new Vector(0.5, 0));
       

            /*
            this.setAcceleration(this.#acceleration.subtract(new Vector(1, 0)));
            this.#acceleration.subtract(new Vector(1, 0));

            */
        }
        if(this.#velocity.x < -0.1){

           // this.#velocity.subtract(new Vector(-0.5, 0));
            
            //this.#acceleration.subtract(new Vector(-1, 0));

        }
        
        this.damageCounter+=1;

    }

   

    draw(){        
        //Generates a player sprite for each scenario, then draws the given sprite
        let playerSpriteSheet;        

        //Jumping sprite
        if(!playerStanding){
            animCounter = 0;        
            playerSpriteSheet = playerJumpingSprite;
            playerSpriteCutStartX = 0;
            playerSpriteCutStartY = 0;            
        }

        //Walking left animation
        else if(this.#velocity.x < 0){            
            playerSpriteSheet = playerWalkingLeftAnimationSheet;
            playerWalkingLeftAnimation();
        }

        //Walking right animation
        else if(this.#velocity.x >0){
            playerSpriteSheet = playerWalkingRightAnimationSheet;
            playerWalkingRightAnimation();
        }

        //Crounching animation
        else if(keys.s){
            animCounter = 0;
            playerSpriteSheet = playerCrouchingSprite;
            playerSpriteCutStartX = 0;
            playerSpriteCutStartY = 0;
        }
        //Idle animation
        else{
            playerSpriteSheet = playerIdleAnimationSheet;
            playerIdleAnimation();            
        }
        ctx.drawImage(playerSpriteSheet, 
            playerSpriteCutStartX, playerSpriteCutStartY,
            15, 31,
            this.position.x, this.position.y,
            tileSize, 2*tileSize
        );

    }
}



