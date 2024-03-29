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
        this.#health = 0; 
    }

    
    update(){
        
        this.#velocity.add(Vector.multiply(this.#acceleration,tileSize/60));
        if(this.#velocity.x>1){
            this.setVelocityX(1);
        }
        if(this.#velocity.x<-1){
            this.setVelocityX(-1);
        }        
        this.setPosition(new Vector(this.#position.x + this.#velocity.x, this.#position.y));             

        //Chase player
        if(this.#position.x > player.position.x){
            //console.log("player to the left");
            if(this.#velocity.x == Math.abs(this.#velocity.x)){
                this.setVelocityX(-1 * this.#velocity.x);
            }
            if(this.#acceleration.x == Math.abs(this.#acceleration.x)){
                this.setAcceleration(new Vector(-1, this.#acceleration.y))
            }
        }
        else if(this.#position.x < player.position.x){
            //console.log("player to the right");
            if(this.#velocity.x != Math.abs(this.#velocity.x)){
                this.setVelocityX(-1 * this.#velocity.x);
            }
            if(this.#acceleration.x != Math.abs(this.#acceleration.x)){
                this.setAcceleration(new Vector(1, this.#acceleration.y))
            }
        }

        
        //Chase player
 

        //Collision between player and enemy
        if(player.position.x - tileSize < this.#position.x && player.position.x + tileSize > this.#position.x
            && player.position.y - 2*tileSize < this.#position.y && player.position.y + 2*tileSize > this.#position.y){
            player.kill();
            console.log("player killed");
        }
    
    }
    
    
    
    draw(){        
        ctx.drawImage(enemy1Sprite, 
            0, 0,
            48, 16,
            this.#position.x, this.#position.y,            
            3*tileSize, tileSize
        );        
    }
}