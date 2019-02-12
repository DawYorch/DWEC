var direccion;
var direccion_aux;

function cargar(){
        direccion = prompt("Escribe la direccion web:");


        document.write(proteger(direccion));
}


function proteger(texto){
        direccion_aux = direccion.split("@");
        var aux = direccion_aux[0];
        aux = aux.substring(0,aux.length/2);

        return aux+"***@"+direccion_aux[1];  //Hay que poner @ porque al hacer split la hemos perdido
}





window.addEventListener("load", cargar);