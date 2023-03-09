function collisionDetection(){
//controlPoints

        //Starter med kordinatene oppe i venstre hjørne, går så med klokka etter arrayen for å ha system

        //static her
       // [player.position,
           // Vector.add(new Vector(tileSize, 0), player.position),
        
           let playerControlPoints = 
            [player.position, Vector.add(player.position, new Vector(tileSize, 0)), 
            Vector.add(new Vector(tileSize, 2*tileSize), player.position),
            Vector.add(new Vector(0, 2*tileSize), player.position) ];
        
        for(let i = 0; i < playerControlPoints.length; i ++){
            

            //Må sjekke x og y seperat:
            let newPosX = Vector.add(player.velocity.x, playerControlPoints[i]);
            let newPosY = Vector.add(player.velocity.y, playerControlPoints[i]);

            let playerTiles = tileVector(player.position); 

            let tileI = tileVector(newPosX).x;
            let tileA = tileVector(newPosY).y;
            if (player.roomTileValues[tileA][playerTiles.x] == 1){
                player.setVelocityY(0);
                player.setPosition(player.position.x, (playerTiles.y)*tileSize )
                
        
            }
            if (player.roomTileValues[playerTiles.y][tileI] == 1){
                player.setVelocityX(0);
                player.setPosition(playerTiles.x*tileSize, player.position.y)
                }
               
                

        }
  
}