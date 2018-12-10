



function cargar(){

    document.getElementById("boton").addEventListener("click", ajaxEvt, false);
    
}




function ajaxEvt() {

    var parametros=""  //Crear para el metodo GET


    var formulario = new FormData(document.getElementById("formulario"));



    var peticion_http = new XMLHttpRequest();
    peticion_http.addEventListener("readystatechange", mostrar);
    peticion_http.open('POST', 'https://pruebas-php-pocoyorch.c9users.io/XXXDWEC_DIEGO/Actividad_02/Actividad_02.php', true);
    peticion_http.send(formulario);
   
    function mostrar(){
        
        if(peticion_http.readyState==4){
            if(peticion_http.status == 200){
                document.getElementById("mensaje").innerHTML = peticion_http.responseText;
            }
        }
    }



}



document.addEventListener("DOMContentLoaded" , cargar , false);
