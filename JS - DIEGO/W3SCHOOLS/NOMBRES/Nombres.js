

function cargar(){

    document.getElementById("txt1").addEventListener("keyup" , sugerencia);

}


function sugerencia(){
    
    var valor = document.getElementById("txt1").value;

    


    var peticion_http = new XMLHttpRequest();

    peticion_http.onreadystatechange = function() {
        if(peticion_http.readyState == 4 && peticion_http.status == 200){

            document.getElementById("txtHint").innerHTML = peticion_http.responseText;
        }
    }    
    peticion_http.open('GET', 'sugerencia.php?q='+valor);    
    peticion_http.send(null);
}

window.addEventListener("load" , cargar);
