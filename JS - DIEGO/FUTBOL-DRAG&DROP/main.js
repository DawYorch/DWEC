
var lugar;
var solucion;

var borrado;
var index;

var objeto;
var dato;
var objeto2;
var dato2;

var jugador;
var destino;

var pelotero1;
var pelotero2;
var pelotero3;
var pelotero4;

function cargar() {
       
        borrar_todo();
        lugar = document.getElementById("Ayalateam");
        // console.log(lugar);
        solucion = lugar.id;                                    //Esto es por si necesito sacar el id para ponerle luego el lugar de insercion del parametro en la funcion Ayax pero lo voy a poner directamente en los demas
        pelotero1 = document.getElementById("info011").value;   //Ayala
        pelotero2 = document.getElementById("info021").value;   //Kempes
        pelotero3 = document.getElementById("info031").value;   //Leonardo
        pelotero4 = document.getElementById("info041").value;   //Romario
        cargarDatosIniciales();

        document.getElementById("Ay").addEventListener("dragstart", drag);
        document.getElementById("Kem").addEventListener("dragstart", drag);
        document.getElementById("Leo").addEventListener("dragstart", drag);
        document.getElementById("Rom").addEventListener("dragstart", drag);

        document.getElementById("Sin equipo").addEventListener("dragover", allowDrop);
        document.getElementById("Sin equipo").addEventListener("drop",drop);

        document.getElementById("Valencia").addEventListener("drop",drop);
        document.getElementById("Valencia").addEventListener("dragover", allowDrop);
        document.getElementById("Barcelona").addEventListener("drop",drop);
        document.getElementById("Barcelona").addEventListener("dragover", allowDrop);
        document.getElementById("Sevilla").addEventListener("drop",drop);
        document.getElementById("Sevilla").addEventListener("dragover", allowDrop);
        document.getElementById("Madrid").addEventListener("drop",drop);
        document.getElementById("Madrid").addEventListener("dragover", allowDrop);
}

function allowDrop(ev) {
        // alert("allowDrop");
        //Permitir que reciba algún elemento
        ev.preventDefault();
        if(ev.target.getAttribute("draggable") == "true"){
                ev.dataTransfer.dropEffect = "none" ;
        }else{
                ev.dataTransfer.dropEffect = "all" ;
        }
        
        
}

function drag(ev) {
        // alert("drag");
        //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
        ev.dataTransfer.setData("text", ev.target.id);
        jugador = tomaPelotero(ev);
        // console.log("&"+jugador);
}

function drop(ev) {
        // alert("drop");
        //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
        ev.preventDefault();

        //Guardamos el elemento, llamado "text" en una variable.
        var data = ev.dataTransfer.getData("text");

        //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
        ev.target.appendChild(document.getElementById(data));
        destino = tomaEquipo(ev);
        transfer(jugador, destino);
        // console.log("&"+jugador);
      
}
function borrar_todo(){

        borrado = document.getElementsByClassName("paLimpiar"); //si en vez de coger la Class cojo el Tag input borra los 
        for(index=0 ; index<borrado.length ; index++){         //nombres y luego no tiene datos en el input nombre para atacar la base de datos

                borrado[index].value="";
        }
}

function cargarDatosIniciales() {

        //Poner aqui las funciones Ayax y llamar desde cargar a esta funcion solamente
        Ayax(pelotero1, solucion, "info012");
        Ayax(pelotero2, "Kempesteam", "info022");
        Ayax(pelotero3, "Leonardoteam", "info032");
        Ayax(pelotero4, "Romarioteam", "info042");      
}

function Ayax(futbolista, equ, dem) {

        // pelotero = document.getElementById(futbolista).value; //Esto es innecesario, podriamos pasarle al GET directamente el parámetro futbolista

        var peticion_http = new XMLHttpRequest();
        peticion_http.open('GET', 'index.php?pelotero='+futbolista); 
        // peticion_http.open('GET', 'index.php?pelotero='+futbolista+'&consulta='+sitio); 
        peticion_http.send('null');

        peticion_http.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {  //con this en vez de peticion_http da menos fallos

                        // console.log(solucion);
                        var textoBase =  peticion_http.responseText.split("#");
                        var equipo = textoBase[0];
                        var demarcacion = textoBase[1];
                        document.getElementById(dem).value = demarcacion;
                        document.getElementById(equ).value = equipo;

                }
        }                           // Se puedenden devolver dos respuestas responseText ?
}

function transfer(player, team){      
        var peticion_http = new XMLHttpRequest();
        peticion_http.open('GET', 'traspaso.php?futbolista='+player+'&equipo='+team);
        peticion_http.send('null');

        peticion_http.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {
                        document.getElementById(player+"team").value = peticion_http.responseText;
                }
        }
}



function tomaEquipo(event){
        objeto = event.target;
        dato = objeto.getAttribute("value");
        console.log(dato);
        return dato;
        
}

function tomaPelotero(event){
        objeto2 = event.target;
        dato2 = objeto2.getAttribute("value");
        console.log(dato2);
        return dato2;
}



window.addEventListener("load", cargar);

// function cambioEquipo(event){
//         var objeto = event.target;
//         var dato = objeto.getAttribute("id");
//         return dato;;
// }