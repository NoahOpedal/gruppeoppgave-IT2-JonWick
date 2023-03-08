function tileVector(vector){
    x = Math.floor(vector.x/tileSize)
    y = Math.floor(vector.y/tileSize)
    return new Vector(x, y);
}