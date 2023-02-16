class Key{
    #number;
    #collected;
    #sprite;
    #x;
    #y;

    constructor(number, sprite, x, y){
        this.#number = number;
        this.#sprite = sprite;
        this.#collected = false;
        this.#x = x;
        this.#y = y;

    }

    get number(){
        return this.#number;
    }
    get collected(){
        return this.#collected;
    }
    get position(){
        //return new Vektor2(x, y)
    }

    collect(){
        this.#collected = true;
    }

    draw(){

    }
}