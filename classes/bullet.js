class Bullet{
    #position;
    #speed;
    #direction;
    #show;


    constructor(position, speed, direction){
        this.#position = new Vector(position.x, position.y);
        this.#speed = speed;
        this.#direction = new Vector(direction.x, direction.y);
        this.#show = true; 
    }

    get position(){
        return this.#position;
    }

    get visible(){
        return this.#show;
    }

    update(){
        this.#position.add(new Vector(this.#direction.x * this.#speed * 1/fps, this.#direction.y * this.#speed * 1/fps));

    }

    draw(){
        ctx.beginPath()
        ctx.fillstyle = "red";
        ctx.arc(this.position.x, this.position.y, 2, 0, Math.PI*2);
        ctx.fill();
    }

    bulletCollicion(){
        bulletTiles = tileVector(this.#position.x, this.#position.y);
        if(roomTileValues[bulletTiles.y][bulletTiles.x] == 1 || roomTileValues[bulletTiles.y][bulletTiles.x] == 4){
            this.#show = false;
        }
    }


    
}