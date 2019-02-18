var READY_STATE_COMPLETE=4;
var peticion_http = null;
 
function inicializa_xhr() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest(); 
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP"); 
  } 
}
 
function comprobar() {
  var login = document.getElementById("login").value;
  peticion_http = inicializa_xhr();
  if(peticion_http) {
    peticion_http.onreadystatechange = procesaRespuesta;
    peticion_http.open("POST", "compruebaDisponibilidad.php", true);
 
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http.send("login="+login+"&nocache="+Math.random());
  }
}
 
function procesaRespuesta() {
  if(peticion_http.readyState == READY_STATE_COMPLETE) {
    if (peticion_http.status == 200) {
      var login = document.getElementById("login").value;
      if(peticion_http.responseText == "si") {
        document.getElementById("disponibilidad").innerHTML = "El nombre elegido ["+login+"] está disponible";
      }
      else {
        document.getElementById("disponibilidad").innerHTML = "NO está disponible el nombre elegido ["+login+"]";
      }
    }
  }
}
 
window.onload = function() {
  document.getElementById("comprobar").onclick = comprobar;
}