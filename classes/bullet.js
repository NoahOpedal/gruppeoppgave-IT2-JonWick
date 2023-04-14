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
        if(roomTileValues[ tileVector(this.#position).y ][tileVector(this.#position).x] != 0){
            console.log("bsdjs");
    
            this.#show = false;
            this.#speed = 0;
        }

        this.#position.add(new Vector(this.#direction.x * this.#speed * 1/fps, this.#direction.y * this.#speed * 1/fps));
       
    }

    draw(){
        ctx.beginPath()
        ctx.fillstyle = "red";
        ctx.arc(this.position.x, this.position.y, 2, 0, Math.PI*2);
        ctx.fill();
    }
    //this.#position.x > player.position.x && this.#position.x < player.position.x + tileSize

   


    
}