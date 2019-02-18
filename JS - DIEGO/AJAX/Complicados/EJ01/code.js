var urlActual;
//var peticion_http = new XMLHttpRequest();
var estado = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];

function cargar(){
    
    urlActual =window.location;
    document.getElementById("recurso").value=urlActual;
    // XQ no me funciona con innerHtml y si con value ? para los objetos ajax usamos innerHtml
    // y lo igualamos al peticion_http.responseText
    
    document.getElementById("enviar").addEventListener("click" , mostrarWeb , false);
    document.getElementById("estados").innerText= "<div style='background-color:red'>"+estado[peticion_http.readyState]+"</div>";
    
    // console.log(peticion_http.readyState);
    console.log(peticion_http.status);
    
    
}

    function mostrarWeb(){
    
        peticion_http = new XMLHttpRequest();
        
        var irUrl = document.getElementById("recurso").value;
        peticion_http.open('GET', irUrl , true);
        peticion_http.send('null');
        
        peticion_http.onreadystatechange = mostrarDatosAjax;
    
    }
    
    
    
    function mostrarDatosAjax() {

        if(this.readyState == 4 && this.status == 200){  //con this en vez de peticion_http da menos fallos
        
            document.getElementById("contenidos").innerHTML = this.responseText;
        } 
                                                                                                        //Tanto .status y .statusText no tienenvalor si los sacamosde aqui
            document.getElementById("estados").innerHTML+=estado[this.readyState]+"<br/>";
            document.getElementById("codigo").innerHTML=this.status+"<br/>"+this.statusText;
        
    
    }


document.addEventListener("DOMContentLoaded" , cargar);