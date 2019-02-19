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
		peticion_http.open("POST", "compruebaDisponibilidadJSON.php", true);

		peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		peticion_http.send("login="+login+"&nocache="+Math.random());
	}
}

function procesaRespuesta() {
	if(peticion_http.readyState == READY_STATE_COMPLETE) {
		if (peticion_http.status == 200) {
			var login = document.getElementById("login").value;
			var respuesta_json = peticion_http.responseText;
			var respuesta = eval("("+respuesta_json+")");
			
			if(respuesta.disponible == "si") {
				document.getElementById("disponibilidad").innerHTML = "El nombre elegido ["+login+"] esta disponible";
			}
			else {
				var mensaje = "NO esta disponible el nombre elegido ["+login+"]. Puedes probar con las siguientes alternativas.";
				mensaje += "<ul>";
				for(var i in respuesta.alternativas) {
					mensaje += "<li><a href=\"#\" onclick=\"selecciona('"+respuesta.alternativas[i]+"'); return false\">"+respuesta.alternativas[i]+"<\/a><\/li>";	
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
