class Enemy{
    #position;
    #health; 
    #maxHealth; 
    #velocity;     

    constructor(x, y, maxHealth, velocity){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(velocity, 0);
        this.#maxHealth = maxHealth;
        this.#health = maxHealth;                
    }

    update(){
        //collisionDetection(enemy1, 1);f
    }
    draw(){        
        ctx.drawImage(enemy1Sprite, 
            0, 0,
            16, 16,
            this.#position.x, this.#position.y,
            tileSize, tileSize
        );

    }
}