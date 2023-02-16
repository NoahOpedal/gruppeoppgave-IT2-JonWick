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
        let x = this.#postion.x + tileSize/2;
        let y = this.#position.y + tileSize;
        return new Vector(x, y);
    }

    update(){

    }
    draw(){

    }
}