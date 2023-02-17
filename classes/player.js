class Player{
    #position;
    #lives;
    #sprite;

    constructor(x, y, lives, sprite){
        this.#position = new Vector(x, y);
        this.#lives = lives;
        this.#sprite = sprite;
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
            this.#position.subtract(new Vector(0,1));
        }


    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x,this.position.y, tileSize, 2*tileSize);
        ctx.fill();


    }
}