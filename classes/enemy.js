class Enemy{
    #position;
    #health; 
    #maxHealth; 
    #velocity;
    #acceleration;    

    constructor(x, y, maxHealth, velocity, acceleration){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(velocity, 0);
        this.#acceleration = new Vector(0, 2);
        this.#maxHealth = maxHealth;
        this.#health = maxHealth;        
    }    

    get acceleration(){
        return new Vector(this.#acceleration.x, this.#acceleration.y);
        
    }
    get position(){
        return new Vector(this.#position.x, this.#position.y);
    }
    get center(){
        let x = this.#position.x + tileSize/2;
        let y = this.#position.y + tileSize/2;
        return new Vector(x, y);

    }
    get velocity(){
        return this.#velocity;
    }

    update(){
        this.#position.add(Vector.multiply(this.velocity,tileSize/60));
        this.#velocity.add(Vector.multiply(this.acceleration,tileSize/60));
        collisionDetection(enemy1, 1);
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