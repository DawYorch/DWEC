
// Ver en Inspector el espacio entre los primeros inputs

window.addEventListener("load",cargar,false); 

function cargar(){
    habilitar();
    eliminando();
    document.getElementById("otro").addEventListener("click" , creacion );
    document.getElementById("otro").addEventListener("click" , eliminando );
    document.getElementById("otro").addEventListener("click" , habilitar );  // Tengo que haceresto para que detecte los nuevos botones escribir
}
// Para no repetir ID aplico a la clase escribir las funciones permitir y deshabilitar
function habilitar(){
    var lapices = document.getElementsByClassName("escribir");

    for(let i=0 ; i<lapices.length ; i++){
        lapices[i].addEventListener("click" , permitir);
        lapices[i].addEventListener("click" , deshabilitar);
        
    }
}

function deshabilitar(){
    this.disabled = true;
}
// Porque no funciona this.disabled si lo pongo dentro de permitir() ?????
function permitir(){
    var padre = this.parentNode.getElementsByTagName("input");
    // this.disabled = true;
    // console.log(this);
    for(let i=0 ; i<padre.length ; i++){
        padre[i].disabled=false;
    }
}


function eliminando(){
    var cruces = document.getElementsByClassName("destruccion");

    for(let i=0 ; i<cruces.length ; i++){
        cruces[i].addEventListener("click" , preguntar);     
    }
}

function destruir(element){
    var padres = element.parentNode;
    console.log(padres);
    while(padres.hasChildNodes()){
        padres.removeChild(padres.firstChild);
    }
}

function preguntar(){
    var preg = confirm("desea eliminar?");
    if(preg){
        destruir(this);  // O le pongo el this como parametro y uso element en la funcion destruir o coloco aqui 
    }                       // a continuacion entera la funcion destruir
}

function creacion(){

    // Al div contenedor le vamos a crear un div grupo nuevo 

    var divInicio = document.getElementById("contenedor");

    // Creamos el div grupo nuevo

    var divGrup = document.createElement("div");
    divGrup.className = "grupo";

    // Creamos el div del DNI

    var divDocu = document.createElement("div");
    divDocu.className = "documento";

    var lab1 = document.createElement("label");
    var textLab1 = document.createTextNode("DNI");

    var inp1 = document.createElement("input");
    inp1.className = "dni";
    inp1.type = "text";
    inp1.disabled = true;

    lab1.appendChild(textLab1);

    divDocu.appendChild(lab1);
    divDocu.appendChild(inp1);

    divGrup.appendChild(divDocu);
    

    // Creamos el div del NOMBRE

    var divNik = document.createElement("div");
    divNik.className = "nick";

    var lab2 = document.createElement("label");
    var textLab2 = document.createTextNode("NOMBRE");

    var inp2 = document.createElement("input");
    inp2.className = "nombre";
    inp2.type = "text";
    inp2.disabled = true;

    lab2.appendChild(textLab2);

    divNik.appendChild(lab2);
    divNik.appendChild(inp2);

    divGrup.appendChild(divNik);

    // Creamos el div APELLIDOS

    var divSur = document.createElement("div");
    divSur.className = "surname";

    var lab3 = document.createElement("label");
    var textLab3 = document.createTextNode("APELLIDOS");

    var inp3 = document.createElement("input");
    inp3.className = "apellidos";
    inp3.type = "text";
    inp3.disabled = true;

    lab3.appendChild(textLab3);

    divSur.appendChild(lab3);
    divSur.appendChild(inp3);

    divGrup.appendChild(divSur);

    // Creamos los botones

    var bot1 = document.createElement("input");
    bot1.className = "destruccion";
    bot1.type = "button";
    bot1.value = "Eliminar";

    divGrup.appendChild(bot1);

    var bot2 = document.createElement("input");
    bot2.className = "escribir";
    bot2.type = "button";
    bot2.value = "Escribir";

    divGrup.appendChild(bot2);


    divInicio.appendChild(divGrup);  //Este pal final



}

// MUY IMPORTANTE, Ponemos DOMContentLoaded para que recoja los elementos nuevos y les agregue
// funcionalidad
