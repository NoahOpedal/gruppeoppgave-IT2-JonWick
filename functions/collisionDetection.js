function collisionDetection(){
//controlPoints

        //Starter med kordinatene oppe i venstre hjørne, går så med klokka etter arrayen for å ha system

        //static her
       // [player.position,
           // Vector.add(new Vector(tileSize, 0), player.position),
        
           let playerControlPoints = 
            [Vector.add(new Vector(tileSize, 2*tileSize), player.position),
            Vector.add(new Vector(0, 2*tileSize), player.position) ];
        for(let i = 0; i < playerControlPoints.length; i ++){
            
            let newPos = Vector.add(player.velocity, playerControlPoints[i]);
            let tileI = tileVector(newPos).x;
            let tileA = tileVector(newPos).y;
            if (player.roomTileValues[tileA][tileI] == 1){
                player.setVelocityY(0);
                player.setPosition(player.position.x, tileA*tileSize -2*tileSize)
            }
  
       }
}