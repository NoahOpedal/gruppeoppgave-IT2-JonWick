class Player{    
    #position;
    #velocity;
    #lives;    
    #acceleration;    

    constructor(x, y, lives, roomTileValues){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(0,0);
        this.#acceleration = new Vector(0,2);
        this.#lives = lives;        
        this.damageCounter = 0;
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
        if(this.damageCounter >= fps){
            this.#lives -= 1;
            this.damageCounter = 0;
        }
    }





    update(){   
        //If killed
        if(this.#lives == 0){
            this.#position = (new Vector(100, 100)); 
            this.#velocity = new Vector(0, 0);           
            this.#lives = 3;

        }

        if(keys.s){
            //Sliding
            if(this.#velocity.x < 0.001 && this.#velocity.x > -0.001){
                this.setVelocityX(0);
            }
            else{
                this.setVelocityX(this.#velocity.x/1.001);
            }
            this.setAcceleration(new Vector(0, 0));
            this.setVelocityY(0);
            keys.d = false;
            keys.a = false;
        }

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

        
        if(!keys.a && !keys.d && (this.velocity.x < 0.5 && this.velocity.x > -0.5)){
            this.#velocity.subtract(new Vector(this.velocity.x, 0));
        }
        /*
        
        if(keys.a == false && this.velocity.x < 0 ){
            this.#velocity.subtract(new Vector(-0.5, 0));    
        }
        if(keys.d == false && this.velocity.x > 0 ){
            this.#velocity.subtract(new Vector(0.5, 0));
        }
        */
        

       
        this.#position.add(Vector.multiply(this.velocity,tileSize/60));
        this.#velocity.add(Vector.multiply(this.acceleration,tileSize/60));        

        collisionDetection(this, 2); 
        
        
        if(this.#velocity.x > 0 && keys.a && !keys.d){

           

            this.#velocity.subtract(new Vector(0.35, 0));
            
        }
        

        if(this.#velocity.x < 0 && !keys.a && keys.d){

           

            this.#velocity.subtract(new Vector(-0.35, 0));
            
        }
       
        if(this.#velocity.x > 0 && !keys.a && !keys.d){

            //this.#velocity.subtract(new Vector(0.5, 0));
       

            /*
            this.setAcceleration(this.#acceleration.subtract(new Vector(1, 0)));
            */
           // this.#acceleration.subtract(new Vector(0.1, 0));

            this.#velocity.subtract(new Vector(0.35, 0));
            
        }
        if(this.#velocity.x < -0 && !keys.a && !keys.d){

            this.#velocity.subtract(new Vector(-0.35, 0));
            
            //this.#acceleration.subtract(new Vector(-0.1, 0));

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

        //Crounching sprite
        else if(keys.s){
            animCounter = 0;
            playerSpriteSheet = playerCrouchingSprite;
            playerSpriteCutStartX = 0;
            playerSpriteCutStartY = 0;            
        }
        //Walking left animation
        else if(keys.a && !keys.d){            
            playerSpriteSheet = playerWalkingLeftAnimationSheet;
            playerWalkingLeftAnimation();
        }

        //Walking right animation
        else if(!keys.a && keys.d){
            playerSpriteSheet = playerWalkingRightAnimationSheet;
            playerWalkingRightAnimation();
        }

        /*
        else if(!keys.a && !keys.d){
            if(player.velocity < 0.01){
                playerSpriteSheet = playerWalkingLeftAnimationSheet;
                playerWalkingLeftAnimation();

            }
            if(player.velocity > 0.01){
                playerSpriteSheet = playerWalkingRightAnimationSheet;
                playerWalkingRightAnimation();

            }
        }
        */

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



