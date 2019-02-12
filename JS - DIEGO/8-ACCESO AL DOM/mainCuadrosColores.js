




function cargar(){

    // document.getElementById("rojo").addEventListener("dblclick" , cuadradiko);

    var cuadrados = document.getElementsByClassName("color");
    var botoncikos = document.getElementsByClassName("botonako");

    for(let i=0 ; i<cuadrados.length ; i++){
        cuadrados[i].addEventListener("mouseover" , redondiko);
        cuadrados[i].addEventListener("mouseout" , cuadradiko);
        cuadrados[i].addEventListener("click" , sombraFuera);
        cuadrados[i].addEventListener("dblclick" , sombraDentro);
    }

    for(let i=0 ; i<botoncikos.length ; i++){
        botoncikos[i].addEventListener("click" , padreAsesino);  
        //botoncikos[i].addEventListener("click" , cambioClase);  // Prueba (1)
    }
}
function cambioClase(){
    var eux = document.getElementById("rojo"); // (1) Si este elemento no tuviera clase, al adjudicarle una que tenga
    eux.className="rojoscuro";                // CSS le daría estilos, pero aqui losestilos se los da el ID x eso no cambia
}

function redondiko(){
    this.style.borderRadius = "50%";
    this.style.transition =  "all 3s";
}
function cuadradiko(){
    this.style.borderRadius = "0";
    this.style.transition =  "all 3s";
}
function sombraFuera(){
    if(this.style.boxShadow == "none"){
        this.style.boxShadow = "5px 10px 10px #888888";
        this.style.transition =  "all 3s";
    }else{
        this.style.boxShadow = "none";
        this.style.transition =  "all 3s";
    }   
}
function sombraDentro(){
    this.style.boxShadow = "5px 10px 10px #888888 inset";
    this.style.transition =  "all 3s";   
    // console.log(ev);
}
function padreAsesino(){
    // Asi solo elimina el boton, xq solo accedemos al padre del boton
    //var aux = this;
    //var padre = this.parentNode;
    //padre.removeChild(aux);
    //console.log(aux);
    //console.log(padre);

    //Asi nos los cargamos a los dos, al cuadrado y al boton , xq hemos hecho dos parentNode
    let padre = this.parentNode;
    let abuelo = padre.parentNode;
    abuelo.removeChild(padre);
    

}









window.addEventListener("load" , cargar);