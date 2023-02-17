document.onkeydown = function(event){


    if(event.key == "a"){
        keys.a = true 
    }
    if(event.key == "d"){
        keys.d = true; 
    }
    if(event.key == "s"){
        keys.s = true; 
    }
    if(event.key == "w"){
        keys.w = true; 
    }
    if(event.key == "space"){
        keys.space = true; 
    }
    if(event.key == "shift"){
        keys.shift = true; 
    }
}

document.onkeyup = function(event) {
    if(event.key == "a"){
        keys.a = false 
    }
    if(event.key == "d"){
        keys.d = false; 
    }
    if(event.key == "s"){
        keys.s = false; 
    }
    if(event.key == "w"){
        keys.w = false; 
    }
    if(event.key == "space"){
        keys.space = false; 
    }
    if(event.key == "shift"){
        keys.shift = false; 
    }
}