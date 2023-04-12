/*class Enemy{
    #position;
    #health; 
    #maxHealth; 
    #velocity;
    #acceleration;  
    #mapIndex;  

    constructor(x, y, maxHealth, velocity, acceleration, mapIndex){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(velocity, 0);
        this.#acceleration = new Vector(0, 2);
        this.#maxHealth = maxHealth;
        this.#health = maxHealth;       
        this.#mapIndex = mapIndex; 
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

    pathFinding(){
        
    }

    
    update(){

        this.#velocity.add(Vector.multiply(this.acceleration,tileSize/60));
        this.#position.add(Vector.multiply(this.velocity,tileSize/60));
     
        collisionDetection(this, 1);        
        
        
       
        
        //Chase player
 

        //Collision between player and enemy   Må fikse 2x1 logikk
        if(player.position.x - tileSize < this.#position.x && player.position.x + tileSize > this.#position.x
            && player.position.y - 2*tileSize < this.#position.y && player.position.y + 2*tileSize > this.#position.y){
            player.kill();
            console.log("player killed");
        }
    
    }
    
    
    
    draw(){        
        ctx.drawImage(enemy1Sprite, 
            0, 0,
            16, 16,
            this.#position.x, this.#position.y + tileSize,
            tileSize, tileSize
        );    
    }
    
}
*/