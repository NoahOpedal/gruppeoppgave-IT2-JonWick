document.onkeydown = function(){


    if(event.key == "a"){
        keys.a = true 
    }
    if(event.key == "d"){
        keys.d = true; 
    }
    if(event.key == "w"){
        keys.s = true; 
    }
    if(event.key == "a"){
        keys.w = true; 
    }
    if(event.key == "space"){
        keys.space = true; 
    }
}

document.onkeyup = function() {
    if(event.key == "a"){
        keys.a = false 
    }
    if(event.key == "d"){
        keys.d = false; 
    }
    if(event.key == "w"){
        keys.s = false; 
    }
    if(event.key == "a"){
        keys.w = false; 
    }
    if(event.key == "space"){
        keys.space = false; 
    }
}