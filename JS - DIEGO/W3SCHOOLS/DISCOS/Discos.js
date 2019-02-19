
function cargar(){
    document.getElementById("boton").addEventListener("click" , mostrar);
}

function mostrar(){

    var peticion_http = new XMLHttpRequest();

    peticion_http.onreadystatechange = function() {
        if(peticion_http.readyState == 4 && peticion_http.status == 200){
            var xml = peticion_http.responseXML;

            var discos = xml.getElementsByTagName("CD");
            var artista = xml.getElementsByTagName("ARTIST");
            var titulo = xml.getElementsByTagName("TITLE");

            for( let i=0; i<discos.length; i++){

    // document.getElementById("demo").innerHTML += "<tr><td>"+discos[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue+"</td><td>"+discos[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"</td></tr>";
    document.getElementById("demo").innerHTML += "<tr><td>"+artista[i].childNodes[0].nodeValue+"</td><td>"+titulo[i].childNodes[0].nodeValue+"</td></tr>";
            }   
        }

    }
    peticion_http.open('GET', 'Discos.xml');    
    peticion_http.send(null);

}

window.addEventListener("load" , cargar);