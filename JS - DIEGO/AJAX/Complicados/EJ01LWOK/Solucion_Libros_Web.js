var peticion;
var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
var tiempoInicial = 0;


     
  String.prototype.transformaCaracteresEspeciales = function() {  // Prototype se usa para añadir propiedades o metodos a clases ya definidas 
    return decodeURI(encodeURI(this).
                      replace(/%0A/g, '<br/>').
                      replace(/%3C/g, '&lt;').
                      replace(/%3E/g, '&gt;'));
  }
 
  // Si no quiero usar prototype quitaré String.prototype de la funcion de arriba y en el parámetro de function(aquí)
  // pondré un parámetro y luego en encodeURI(aquí) lo repetiré.
  // Al hacer esto tendré que cambiar las funciones en líneas 66 y 79 y ponerles como parámetro la respuesta, osea:
  // transformaCaracteresEspeciales(peticion.responseText); en linea 66 y
 //  transformaCaracteresEspeciales(peticion.getAllResponseHeaders()); en línea 79

 
  window.onload = function() {
    // Cargar en el input text la URL de la página
    var recurso = document.getElementById('recurso');
    recurso.value = window.location;
 
    // Cargar el recurso solicitado cuando se pulse el botón MOSTRAR CONTENIDOS
    document.getElementById('enviar').onclick = cargaContenido;
  }
  
  
  
  
 
  function cargaContenido() {
                                                                // Borrar datos anteriores
    document.getElementById('contenidos').innerHTML = "";
    document.getElementById('estados').innerHTML = "";
                                                                  // Instanciar objeto XMLHttpRequest
    peticion = new XMLHttpRequest();
                                                           // Preparar función de respuesta
    peticion.onreadystatechange = muestraContenido;
 
                                                                // Realizar petición
    tiempoInicial = new Date();
    var recurso = document.getElementById('recurso').value;
    peticion.open('GET', recurso+'?nocache='+Math.random(), true);
    peticion.send(null);
  }
  
  
  
  
  
 
                                                                // Función de respuesta
  function muestraContenido() {
    var tiempoFinal = new Date();
    var milisegundos = tiempoFinal - tiempoInicial;
 
    var estados = document.getElementById('estados');
    estados.innerHTML += "[" + milisegundos + " mseg.] " + estadosPosibles[peticion.readyState] + "<br/>";
 
    if(peticion.readyState == 4 && peticion.status == 200) {
      
        var contenidos = document.getElementById('contenidos');
        contenidos.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
      }
      
      muestraCabeceras();
      muestraCodigoEstado();
    
  }
  
  
  
 
  function muestraCabeceras() {
    var cabeceras = document.getElementById('cabeceras');
    cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
  }
  
  
  
 
  function muestraCodigoEstado() {
    var codigo = document.getElementById('codigo');
    codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;        
  }