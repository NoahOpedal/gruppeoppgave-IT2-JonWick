function collisionDetection(){
//controlPoints

        //Starter med kordinatene oppe i venstre hjørne, går så med klokka etter arrayen for å ha system

        //static her
       // [player.position,
           // Vector.add(new Vector(tileSize, 0), player.position),
        
           let playerControlPoints = 
            [new Vector(player.position.x,player.position.y),
            Vector.add(player.position, new Vector(tileSize, 0)), 
            Vector.add(new Vector(tileSize, 2*tileSize), player.position),
            Vector.add(new Vector(0, 2*tileSize), player.position) ];
        
        for(let i = 0; i < playerControlPoints.length; i ++){
            console.log(player.position, player.velocity, i, "anfidvsmk")

            //Må sjekke x og y seperat:
            let newPosX = Vector.add( playerControlPoints[i], new Vector(player.velocity.x,0));
            let newPosY = Vector.add( playerControlPoints[i],new Vector(0,player.velocity.y));

            let playerTiles = tileVector(player.position); 

            let tileI = tileVector(newPosX).x;
            let tileA = tileVector(newPosY).y;
            console.log(player.roomTileValues[tileA],tileA,player.velocity,newPosY,playerControlPoints,i)
            if (player.roomTileValues[tileA][playerTiles.x] == 1){
                player.setVelocityY(0);
                console.log(player.position, "eisnoceconec")
                player.setPosition(new Vector(player.position.x, (playerTiles.y)*tileSize))
                console.log(player.position, "ncincc")
                
        
            }
            if (player.roomTileValues[playerTiles.y][tileI] == 1){
                player.setVelocityX(0);
                console.log(player.position, "iowndo")

                player.setPosition(new Vector(playerTiles.x*tileSize, player.position.y))
                }
               
                

        }
  
}
