function collisionDetection(character, characterHeight){
//controlPoints

        //Starter med kordinatene oppe i venstre hjørne, går så med klokka etter arrayen for å ha system

        //static her
       // [character.position,
           // Vector.add(new Vector(tileSize, 0), character.position),
        
           let characterControlPoints = 
            [new Vector(character.position.x,character.position.y),
            Vector.add(new Vector(0, 2*tileSize), character.position),
            Vector.add(new Vector(0, 0.5*tileSize), character.position),
            Vector.add(new Vector(0, 1.5*tileSize), character.position),
            Vector.add(new Vector(0, 1*tileSize), character.position),
            Vector.add(character.position, new Vector(tileSize, 0)), 
            Vector.add(new Vector(tileSize, 2*tileSize), character.position),
            Vector.add(new Vector(tileSize, tileSize), character.position), 
            Vector.add(new Vector(tileSize, 1.5*tileSize), character.position),
            Vector.add(new Vector(tileSize, 0.5*tileSize), character.position)
            
        ];
        
        for(let i = 0; i < characterControlPoints.length; i ++){

            //Må sjekke x og y separat:
            let newPosX = Vector.add( characterControlPoints[i], new Vector(character.velocity.x*tileSize/60,0));
            let newPosY = Vector.add( characterControlPoints[i], new Vector(0,character.velocity.y*tileSize/60));

            let characterTiles = tileVector(characterControlPoints[i]); 
            let tileI = tileVector(newPosX).x;
            let tileA = tileVector(newPosY).y;


      

            //Lava

        
         
            if (roomTileValues[tileA][characterTiles.x] == 4){
                character.kill();
                
        
            }
            if (roomTileValues[characterTiles.y][tileI] == 4){
                character.kill();
            }

            
            //Air that damages you: 
            if (roomTileValues[tileA][characterTiles.x] == 2){
                character.damage();
                
        
            }
            if (roomTileValues[characterTiles.y][tileI] == 2){
                character.damage();
            }
            //Block that damages you
            if (roomTileValues[tileA][characterTiles.x] == 3){
                character.damage();

                character.setVelocityY(0);
                character.setPosition(character.position.x, (characterTiles.y)*tileSize )
                
            }

            if (roomTileValues[characterTiles.y][tileI] == 3){
                character.damage();

                character.setVelocityX(0);
                character.setPosition(characterTiles.x*tileSize, character.position.y)
            }

            //Blocks you can stand on

            
            if (roomTileValues[tileA][characterTiles.x] == 1){

                if (character.velocity.y < 0){
                    character.setPosition(new Vector(character.position.x, (characterTiles.y)*tileSize));
                }
                else{
                    character.setPosition(new Vector(character.position.x, (characterTiles.y - 1.001)*tileSize));
                }            
                character.setVelocityY(0);
                standing = true; 
                characterStanding = true;
            }
            
           
            
        
            
            if (roomTileValues[characterTiles.y][tileI] == 1){
                ctx.fillStyle = "green";
                ctx.fillRect(characterControlPoints[i].x,characterControlPoints[i].y, 2, 2);
               
                if (character.velocity.x > 0){
                    character.setPosition(new Vector((characterTiles.x - 0.001)*tileSize,  character.position.y ))
                    collisionRight = true;
                    
                }
                if(character.velocity.x < 0){
                    character.setPosition(new Vector((characterTiles.x)*tileSize,  character.position.y ));
                }
                if (character.velocity.x > 0){
                    character.setPosition(new Vector((characterTiles.x - 0.001)*tileSize,  character.position.y ))
                    collisionRight = true;
                    
                }
                else{
                    character.setPosition(new Vector((characterTiles.x)*tileSize,  character.position.y ));
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
