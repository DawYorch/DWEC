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
    peticion_http.open("POST", "compruebaDisponibilidadXML.php", true);
 
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http.send("login="+login+"&nocache="+Math.random());
  }
}
 
function procesaRespuesta() {
  if(peticion_http.readyState == READY_STATE_COMPLETE) {
    if (peticion_http.status == 200) {
      var login = document.getElementById("login").value;
      var documento_xml = peticion_http.responseXML;
      var raiz = documento_xml.getElementsByTagName("respuesta")[0];
 
      var disponible = raiz.getElementsByTagName("disponible")[0].firstChild.nodeValue;
 
      if(disponible == "si") {
        document.getElementById("disponibilidad").innerHTML = "El nombre elegido ["+login+"] está disponible";
      }
      else {
        var mensaje = "NO está disponible el nombre elegido ["+login+"]. Puedes probar con las siguientes alternativas.";
        var alternativas = raiz.getElementsByTagName("alternativas")[0];
        var logins = alternativas.getElementsByTagName("login");
        mensaje += "<ul>";
        for(var i=0; i<logins.length; i++) {
          mensaje += "<li><a href=\"#\" onclick=\"selecciona('"+logins[i].firstChild.nodeValue+"'); return false\">"+logins[i].firstChild.nodeValue+"<\/a><\/li>";	
        }
        mensaje += "<\/ul>";
        document.getElementById("disponibilidad").innerHTML = mensaje;
      }
    }
  }
}
 
function selecciona(login) {
  var cuadroLogin = document.getElementById("login");
  cuadroLogin.value = login;
}
 
window.onload = function() {
  document.getElementById("comprobar").onclick = comprobar;
}