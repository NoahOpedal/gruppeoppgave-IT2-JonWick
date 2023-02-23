class Player{
    #position;
    #velocity;
    #lives;    

    constructor(x, y, lives){
        let assetsLoaded = 0;
        let totalAssets = 1;    //Husk å oppdatere denne når du legger til flere bildefiler
        let allAssetsLoaded = false;
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(0,0);
        this.#lives = lives;        
        let playerJumpingSprite = new Image();
        imgSpriteSheet.src = "player_jumping_sprite.png";

    }

    get position(){
        return new Vector(this.#position.x, this.#position.y);
    }
    get center(){
        let x = this.#position.x + tileSize/2;
        let y = this.#position.y + tileSize;
        return new Vector(x, y);
    }

    loaded(){
        assetsLoaded++;
        if(assetsLoaded >= totalAssets){
            allAssetsLoaded = true;
        }
    }

    update(){
        if(allAssetsLoaded){
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
                this.#velocity = new Vector(0,-1.5*tileSize);
                console.log(this.#velocity);
                keys.w = false
            }
            this.#position.add(Vector.multiply(this.#velocity,tileSize/60));
            this.#velocity.add(Vector.multiply(new Vector(0,2),tileSize/60));
        }    
    }

    draw(){
        if(allAssetsLoaded){
            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.fillRect(this.position.x,this.position.y, tileSize, 2*tileSize);
            ctx.fill();
            if(this.#velocity.y != 0){            

        }
        }
    }
}