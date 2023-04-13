document.onkeydown = function(event){


    if(event.key == "a"){
        console.log("aaaaaaaaaaa");
        player.setAcceleration((new Vector(-0.7/((Math.abs((player.velocity.x))*0.5 + 1)) , player.acceleration.y)));
        keys.a = true;
        /*
        if(!keys.a){
            
            keys.a = true;
            keys.d = false;
        }
        */

    }
    if(event.key == "d"){
        player.setAcceleration((new Vector(0.7/((Math.abs((player.velocity.x))*0.5 + 1)), player.acceleration.y)));
        
        /*if(Math.abs(player.velocity.x) > 4){
            player.  (player.acceleration.x - 1, player.acceleration.y)
        }
        */
        keys.d = true;
        /*if(!keys.d){

            
            //if(player.velocity.x > 2){
            //    player.setAcceleration((0, player.acceleration.y));
            //}
            //else{
            //    player.setAcceleration((new Vector(3/((player.velocity.x*0.5 + 1)) -0.8, player.acceleration.y)));
           // }
            keys.d = true;
            keys.a = false;
            
        }
        */
        
    }
    if(event.key == "s"){
        keys.s = true; 
    }
    
    if(event.key == "w"){
        if(standing){
            if(!keys.w){
                player.addVelocity(new Vector(0,(-2/2.5)*tileSize));
                keys.w = true;
                playerStanding = false;                    
            }
            keys.w = true;
            standing = false;
        }
    }    
    if(event.key == "q"){
        if(!keys.q){
            if(keys.a && playerStanding){
                
                bullets.push(new Bullet(new Vector(player.center.x, player.center.y), 13, new Vector(-25, 0), true ));
            }
            if(keys.d && playerStanding){
              
                bullets.push(new Bullet(new Vector(player.center.x, player.center.y), 13, new Vector(25, 0), true ));
            }
            if(keys.w){
              
                bullets.push(new Bullet(new Vector(player.center.x, player.center.y), 13, new Vector(0, -25), true ));
            }
         

            

            keys.q = true; 
        }
    }
    if(event.key == "shift"){
    
            

        keys.shift = true; 
        
    }
}

document.onkeyup = function(event) {
    if(event.key == "a"){
        /*if(keys.a == true && keys.d == true){
            player.addVelocity(new Vector(5, 0));
        }
        else{
            if(!collisionLeft){
                if(player.velocity.x != 0){
                    player.addVelocity(new Vector(5, 0));
                }
            }
        }
        */
       if(keys.a){
            if(!keys.d){
                player.setAcceleration(new Vector(0,player.acceleration.y));
            }
       
        }
        keys.a = false;
    }


    if(event.key == "d"){
        /*
        if(keys.a == true && keys.d == true){
            player.addVelocity(new Vector(-5, 0));
        }
        else{
            if(!collisionRight){
                if(player.velocity.x != 0){
                    player.addVelocity(new Vector(-5, 0));
                }
            }
        }*/
        if(keys.d){
            if(!keys.a){
                player.setAcceleration(new Vector(0,player.acceleration.y));
            }
            
        }
        keys.d = false;
    }
    
    if(event.key == "s"){
        keys.s = false; 
    }
    if(event.key == "w"){
        keys.w = false; 
    }
    if(event.key == "q"){

       



        keys.q = false; 
    }
    if(event.key == "shift"){
        keys.shift = false; 
    }
}
