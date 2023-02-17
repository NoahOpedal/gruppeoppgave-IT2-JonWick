class Player{
    #position;
    #velocity;
    #lives;
    #sprite;

    constructor(x, y, lives, sprite){
        this.#position = new Vector(x, y);
        this.#velocity = new Vector(0,0);
        this.#lives = lives;
        this.#sprite = sprite;

    }

    get position(){
        return new Vector(this.#position.x, this.#position.y);
    }
    get center(){
        let x = this.#position.x + tilePixels/2;
        let y = this.#position.y + tilePixels;
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
            this.#velocity = new Vector(0,-1.5*tilePixels);
            console.log(this.#velocity);
            keys.w = false
        }
        this.#position.add(Vector.multiply(this.#velocity,tilePixels/60));
        this.#velocity.add(Vector.multiply(new Vector(0,2),tilePixels/60));
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x,this.position.y, tilePixels, 2*tilePixels);
        ctx.fill();


    }
}