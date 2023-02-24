class Player{
    #position;
    #velocity;
    #lives;        
        
    constructor(x, y, lives){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(0,0);
        this.#lives = lives;
    }

    get position(){
        return new Vector(this.#position.x, this.#position.y);
    }
    get center(){
        let x = this.#position.x + tileSize/2;
        let y = this.#position.y + tileSize;
        return new Vector(x, y);
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
        this.#position.add(Vector.multiply(this.#velocity,tileSize/(2.5*60)));
        this.#velocity.add(Vector.multiply(new Vector(0,2),tileSize/(2.5*60)));        
    }

    draw(){        
        //Generates a player sprite for each scenario, then draws the given sprite
        let playerSpriteSheet;
        let playerSpriteCutStartX;
        let playerSpriteCutStartY;

        if(this.#velocity.y != 0){            
            playerSpriteSheet = playerJumpingSprite;
            playerSpriteCutStartX = 0;
            playerSpriteCutStartY = 0;
        }
        //Walking animations
        else if(keys.s == true){
            playerSpriteSheet = playerCrouchingSprite;
            playerSpriteCutStartX = 0;
            playerSpriteCutStartY = 0;
        }
        //Idle animation
        ctx.drawImage(playerSpriteSheet, 
            playerSpriteCutStartX, playerSpriteCutStartY,
            16, 32,
            this.position.x, this.position.y,
            tileSize, 2*tileSize
        );

    }
}