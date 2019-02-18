var peticion;
var detener=true;
var intervalo = setInterval('conexion()' , 1000);

function cargar(){
    
    intervalo; // No ponemos paréntesis xq no hemos creado una función sino que hemos creado una variable
    document.getElementById("detener").addEventListener("click" , detenerNoticias , false);
    
}

function conexion(){
    
    peticion = new XMLHttpRequest();
    peticion.onreadystatechange = muestraContenido;
    
    peticion.open('GET', "generaContenidos.php" , true);
    peticion.send(null)
    
}

function muestraContenido(){
    
    if(peticion.readyState == 4 && peticion.status == 200) {
        var ticker = document.getElementById('ticker');
        ticker.innerHTML = tiempo() + peticion.responseText + "...";
      }
    
}

function tiempo(){
    
    var horaAhora = new Date();
    var hora = horaAhora.getHours();
    var minuto = horaAhora.getMinutes();
    var segundo = horaAhora.getSeconds();
    
    var horaCompleta = hora + ":" + minuto + ":" + segundo; 
    return "[" + horaCompleta + "] ";
}


function detenerNoticias(){
    
    if(detener){
        
        clearInterval(intervalo);
        detener = false;
        this.value = "Iniciar";
        
    }else{
        
        setInterval('conexion()' , 1000);  //aqui porque no me coje la variable intervalo sin mas ?
        detener = true;                   //en la funcion cargar si que lo coje, porque ?
        this.value = "Detener";
    }
    
}



document.addEventListener("DOMContentLoaded" , cargar , false);