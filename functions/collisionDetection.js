function collisionDetection(character, characterHeight){
//controlPoints

        //Starter med kordinatene oppe i venstre hjørne, går så med klokka etter arrayen for å ha system

        //static her
       // [character.position,
           // Vector.add(new Vector(tileSize, 0), character.position),
        
           let playerControlPoints = 
<<<<<<< HEAD
            [new Vector(player.position.x,player.position.y),
            Vector.add(new Vector(0, 2*tileSize), player.position),
            Vector.add(new Vector(0, 0.5*tileSize), player.position),
            Vector.add(new Vector(0, 1.5*tileSize), player.position),
            Vector.add(new Vector(0, tileSize), player.position),
            Vector.add(player.position, new Vector(tileSize, 0)), 
            Vector.add(new Vector(tileSize, 2*tileSize), player.position),
            Vector.add(new Vector(tileSize, tileSize), player.position), 
            Vector.add(new Vector(tileSize, 1.5*tileSize), player.position),
            Vector.add(new Vector(tileSize, 0.5*tileSize), player.position)
            
        ];
        for(let i = 0; i < playerControlPoints.length; i ++){

            //Må sjekke x og y seperat:
            let newPosX = Vector.add( playerControlPoints[i], new Vector(player.velocity.x*tileSize/fps,0));
            let newPosY = Vector.add( playerControlPoints[i], new Vector(0,player.velocity.y*tileSize/fps));

            let playerTiles = tileVector(playerControlPoints[i]); 
=======
            [new Vector(character.position.x,character.position.y),
            Vector.add(character.position, new Vector(tileSize, 0)), 
            Vector.add(new Vector(tileSize, characterHeight*tileSize), character.position),
            Vector.add(new Vector(0, characterHeight*tileSize), character.position) ];
        
        for(let i = 0; i < playerControlPoints.length; i ++){

            //Må sjekke x og y seperat:
            let newPosX = Vector.add( playerControlPoints[i], new Vector(character.velocity.x*tileSize/60,0));
            let newPosY = Vector.add( playerControlPoints[i], new Vector(0,character.velocity.y*tileSize/60));

            let playerTiles = tileVector(playerControlPoints[i]); 
>>>>>>> 701047133cdb7ba442c9c966c7fded076f7b61ab

            let tileI = tileVector(newPosX).x;
            let tileA = tileVector(newPosY).y;


      

            //Lava
<<<<<<< HEAD

        
=======
>>>>>>> 701047133cdb7ba442c9c966c7fded076f7b61ab
         
            if (roomTileValues[tileA][playerTiles.x] == 4){
                character.kill();
                
        
            }
            if (roomTileValues[playerTiles.y][tileI] == 4){
                character.kill();
            }

            
            //Air that damages you: 
            if (roomTileValues[tileA][playerTiles.x] == 2){
                character.damage();
                
        
            }
            if (roomTileValues[playerTiles.y][tileI] == 2){
                character.damage();
            }
            //Block that damages you
            if (roomTileValues[tileA][playerTiles.x] == 3){
                character.damage();

                character.setVelocityY(0);
                character.setPosition(character.position.x, (playerTiles.y)*tileSize )
                
            }

            if (roomTileValues[playerTiles.y][tileI] == 3){
                character.damage();

                character.setVelocityX(0);
                character.setPosition(playerTiles.x*tileSize, character.position.y)
            }

            //Blocks you can stand on

<<<<<<< HEAD
<<<<<<< HEAD
            
            if (player.roomTileValues[tileA][playerTiles.x] == 1){
=======
            if (character.roomTileValues[tileA][playerTiles.x] == 1){
>>>>>>> 701047133cdb7ba442c9c966c7fded076f7b61ab
=======
            if (roomTileValues[tileA][playerTiles.x] == 1){


                

>>>>>>> a98db42444e27255dbebdb44cd7fcd4e2ee17bed
                if (character.velocity.y < 0){
                    character.setPosition(new Vector(character.position.x, (playerTiles.y)*tileSize))

                }
                else{
<<<<<<< HEAD
                    player.setPosition(new Vector(player.position.x, (playerTiles.y-1.001)*tileSize))
=======
                    character.setPosition(new Vector(character.position.x, (playerTiles.y+0.999)*tileSize))
>>>>>>> 701047133cdb7ba442c9c966c7fded076f7b61ab
                }            
                character.setVelocityY(0);
                standing = true; 
                playerStanding = true;
            }
            
           
            
        
<<<<<<< HEAD
            
            if (player.roomTileValues[playerTiles.y][tileI] == 1){
=======
           
<<<<<<< HEAD
            if (character.roomTileValues[playerTiles.y][tileI] == 1){
>>>>>>> 701047133cdb7ba442c9c966c7fded076f7b61ab
=======
            if (roomTileValues[playerTiles.y][tileI] == 1){
>>>>>>> a98db42444e27255dbebdb44cd7fcd4e2ee17bed

                console.log("Point:", i, "Hit x value")
                ctx.fillStyle = "green";
                ctx.fillRect(playerControlPoints[i].x,playerControlPoints[i].y, 2, 2);
               
<<<<<<< HEAD
                if (player.velocity.x > 0){
                    player.setPosition(new Vector((playerTiles.x + 0.999)*tileSize,  player.position.y ))
                    collisionRight = true;
                    
                }
                if(player.velocity.x < 0){
                    player.setPosition(new Vector((playerTiles.x)*tileSize,  player.position.y ));
=======
                if (character.velocity.x > 0){
                    character.setPosition(new Vector((playerTiles.x + 0.999)*tileSize,  character.position.y ))
                    collisionRight = true;
                    
                }
                else{
                    character.setPosition(new Vector((playerTiles.x)*tileSize,  character.position.y ));
>>>>>>> 701047133cdb7ba442c9c966c7fded076f7b61ab
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
