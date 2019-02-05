var aux01;

function cargar(){
    var botones = document.getElementsByClassName("boton");
    sombra(botones);
}

function sombra(botones){
    for(var i=0 ; i<botones.length ; i++){
        botones[i].addEventListener("mousedown" , anyadirSombra);  //keypress
    }
}
                                  //En esta funcion qué es el evento click y qué es el elemento div class="boton"
function anyadirSombra(){
    // this.style.boxShadow = "inset 3px 3px 5px gray";
    this.style.boxShadow = "inset 10px 10px 5px 0px rgba(0,0,0,0.75)"; 
}

window.addEventListener("load", cargar);

// window.onload("cargar",true);
