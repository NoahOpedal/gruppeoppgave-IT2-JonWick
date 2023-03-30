class Bullet{
    #position;
    #speed;
    #direction;


    constructor(position, speed, direction){
        this.#position = position;
        this.#speed = speed;
        this.#direction = direction;
    }

    get position(){
        return this.#position;
    }

    update(){
        this.#position.add(new Vector(this.#direction.x * this.#speed * 1/fps, this.#direction.y * this.#speed * 1/fps));

    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, 2, 0, Math.PI*2);
    }
    
}