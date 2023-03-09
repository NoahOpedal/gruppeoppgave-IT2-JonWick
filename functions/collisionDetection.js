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


            

            //Lava
            if (player.roomTileValues[tileA][playerTiles.x] == 4){
                player.kill();
                
        
            }
            if (player.roomTileValues[playerTiles.y][tileI] == 4){
                player.kill();
            }

            
            //Air that damages you: 
            if (player.roomTileValues[tileA][playerTiles.x] == 2){
                player.damage();
                
        
            }
            if (player.roomTileValues[playerTiles.y][tileI] == 2){
                player.damage();

            //Block that damages you
            if (player.roomTileValues[tileA][playerTiles.x] == 3){
                player.damage();

                player.setVelocityY(0);
                player.setPosition(player.position.x, (playerTiles.y)*tileSize )
                
            }

            if (player.roomTileValues[playerTiles.y][tileI] == 3){
                player.damage();

                player.setVelocityX(0);
                player.setPosition(playerTiles.x*tileSize, player.position.y)
            }

            //Blocks you can stand on
            if (player.roomTileValues[tileA][playerTiles.x] == 1){
                player.setVelocityY(0);
                console.log(player.position, "eisnoceconec")
                if (player.velocity.y < 0){
                    player.setPosition(new Vector(player.position.x, (playerTiles.y)*tileSize))
                    console.log(player.position, "ncincc")
                }
                else{
                    player.setPosition(new Vector(player.position.x, (playerTiles.y + 1)*tileSize))
                }
        
            }
            if (player.roomTileValues[playerTiles.y][tileI] == 1){
                player.setVelocityX(0);
                console.log(player.position, "iowndo")

                player.setPosition(new Vector(playerTiles.x*tileSize, player.position.y))
                
                if (player.velocity.x > 0){
                    player.setPosition(new Vector(playerTiles.x*tileSize,  player.position.y ))
                    console.log(player.position, "ncincc")
                }
                else{
                    player.setPosition(new Vector((playerTiles.x + 1)*tileSize,  player.position.y ))
                }
            
            }

               
                
        }
    }
  
}
