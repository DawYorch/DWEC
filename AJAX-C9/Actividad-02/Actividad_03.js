



function cargar(){

    document.getElementById("boton").addEventListener("click", ajaxEvt, false);
    document.getElementById("prov").addEventListener("onChange", ajaxEvt, false);
}




function ajaxEvt() {



    var provi = new FormData(document.getElementById("prov"));



    var peticion_http = new XMLHttpRequest();
    peticion_http.addEventListener("readystatechange", mostrar);
    peticion_http.open('POST', 'https://pruebas-php-pocoyorch.c9users.io/XXXDWEC_DIEGO/Actividad_03/Actividad_03.php', true);
    peticion_http.send(provi);
   
    function mostrar(){
        
        if(peticion_http.readyState==4){
            if(peticion_http.status == 200){
                document.getElementById("mensaje").innerHTML = peticion_http.responseText;
            }
        }
    }



}



document.addEventListener("DOMContentLoaded" , cargar , false);
