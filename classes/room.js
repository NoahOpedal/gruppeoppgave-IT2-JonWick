class Room{

    #tileValues;
    #enemies;
    #key;


    constructor(img,tileValues){
        this.#tileValues = tileValues;
    }





draw(){
    for(let i = 0; i < this.#tileValues.length; i++){
        for(let j = 0; j < this.#tileValues[i].length; j++){
            if(this.#tileValues[i][a] == 1){
                ctx.fillStyle = "black";
                ctx.fillRect(tileSize*i, tileSize*a, tileSize, tileSize);
                ctx.fill();
            }
        }
    }
}

get tileValues(){
    return this.#tileValues;
}
}