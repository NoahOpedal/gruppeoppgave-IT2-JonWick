function collisionDetection(character, characterHeight){
//controlPoints

        //Starter med kordinatene oppe i venstre hjørne, går så med klokka etter arrayen for å ha system

        //static her
       // [character.position,
           // Vector.add(new Vector(tileSize, 0), character.position),
        
           let playerControlPoints = 
            [new Vector(character.position.x,character.position.y),
            Vector.add(character.position, new Vector(tileSize, 0)), 
            Vector.add(new Vector(tileSize, characterHeight*tileSize), character.position),
            Vector.add(new Vector(0, characterHeight*tileSize), character.position) ];
        
        for(let i = 0; i < playerControlPoints.length; i ++){

            //Må sjekke x og y seperat:
            let newPosX = Vector.add( playerControlPoints[i], new Vector(character.velocity.x*tileSize/60,0));
            let newPosY = Vector.add( playerControlPoints[i], new Vector(0,character.velocity.y*tileSize/60));

            let playerTiles = tileVector(character.position); 

            let tileI = tileVector(newPosX).x;
            let tileA = tileVector(newPosY).y;

      

            //Lava
         
            if (character.roomTileValues[tileA][playerTiles.x] == 4){
                character.kill();
                
        
            }
            if (character.roomTileValues[playerTiles.y][tileI] == 4){
                character.kill();
            }

            
            //Air that damages you: 
            if (character.roomTileValues[tileA][playerTiles.x] == 2){
                character.damage();
                
        
            }
            if (character.roomTileValues[playerTiles.y][tileI] == 2){
                character.damage();
            }
            //Block that damages you
            if (character.roomTileValues[tileA][playerTiles.x] == 3){
                character.damage();

                character.setVelocityY(0);
                character.setPosition(character.position.x, (playerTiles.y)*tileSize )
                
            }

            if (character.roomTileValues[playerTiles.y][tileI] == 3){
                character.damage();

                character.setVelocityX(0);
                character.setPosition(playerTiles.x*tileSize, character.position.y)
            }

            //Blocks you can stand on

            if (character.roomTileValues[tileA][playerTiles.x] == 1){


                

                if (character.velocity.y < 0){
                    character.setPosition(new Vector(character.position.x, (playerTiles.y)*tileSize))

                }
                else{
                    character.setPosition(new Vector(character.position.x, (playerTiles.y+0.999)*tileSize))
                }            
                character.setVelocityY(0);
                standing = true; 
                playerStanding = true;
            }
            else{
                
            }
            
        
           
            if (character.roomTileValues[playerTiles.y][tileI] == 1){


               
                if (character.velocity.x > 0){
                    character.setPosition(new Vector((playerTiles.x + 0.999)*tileSize,  character.position.y ))
                    collisionRight = true;
                    
                }
                else{
                    character.setPosition(new Vector((playerTiles.x)*tileSize,  character.position.y ));
                    collisionLeft = true;
                    
                }
                intersection = true; 
                character.setVelocityX(0);
                character.setAcceleration(new Vector(0, character.acceleration.y ));
            }
            else{
                
                collisionLeft = false; 
                collisionRight = false;
            }
            

               
                
        }
    }
