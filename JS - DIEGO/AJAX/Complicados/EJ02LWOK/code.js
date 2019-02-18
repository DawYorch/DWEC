
 
var peticion = null;
var intervalo = null;
var noticias = [];
var numeroElemento = null;
 
window.onload = function(){
    
  intervalo = setInterval(descargaNoticia, 1000);
  document.getElementById('detener').onclick = detener;
  document.getElementById('anterior').onclick = anterior;
  document.getElementById('siguiente').onclick = siguiente;
}


Number.prototype.toString = function(){
  if (this < 10) {
    return '0' + this;
  }
  else {
    return this;
  }
}

// La funcion descargaNoticia() es llamada cada segundo, en ella se obtiene una noticia al azar, osea que cada segundo tenemos un 
// peticion.responseText diferente que usará procesaNoticia() para montar un Array asociativo hora:hora, titular:peticion.responseText y pasarselo a muestraNoticia() ,
// la llamada a muestraNoticia() desde procesaNoticia() llama al ultimo par de datos introducidos: noticias[noticias.length - 1]
// ya en muestraNoticia() pondremos en el div correspondiente el par de dato/valor pasados desde procesaNoticia()

function descargaNoticia(){            

  peticion = new XMLHttpRequest();
 
  peticion.onreadystatechange = procesaNoticia;
 
  peticion.open('GET', 'generaContenidos.php', true);
  peticion.send(null);
}

function procesaNoticia(){
    
  if (peticion.readyState == 4 && peticion.status == 200) {

      var fechaHora = new Date();
      // Si a continuación quitamos los .toString parece que funciona igual
      var hora = fechaHora.getHours().toString() + ":" + fechaHora.getMinutes().toString() + ":" + fechaHora.getSeconds().toString();
      noticias.push({ hora: hora , titular: peticion.responseText });
      muestraNoticia(noticias[noticias.length - 1]);
    }
  
}

function muestraNoticia(noticia){
    
  var ticker = document.getElementById('ticker');
  ticker.innerHTML = "<strong>" + noticia.hora + "</strong> " + noticia.titular;
  ticker.style.backgroundColor = '#FFFF99';
  setTimeout(limpiaTicker, 300);
}


function limpiaTicker(){
  var ticker = document.getElementById('ticker');
  ticker.style.backgroundColor = '#FAFAFA';
}



 
function detener(){
    
          clearInterval(intervalo);
          this.value = 'Iniciar';
          this.onclick = iniciar;
}

 
function iniciar(){
    
          intervalo = setInterval(descargaNoticia, 1000);
          this.value = 'Detener';
          this.onclick = detener;
         
          numeroElemento = null;
}

 
function anterior(){
    
  var detener = document.getElementById('detener');
  clearInterval(intervalo);
  detener.value = 'Iniciar';
  detener.onclick = iniciar;
 
  if (numeroElemento == null) {
    numeroElemento = noticias.length - 1;
  }
 
  if (numeroElemento > 0) {
    numeroElemento--;
  }
 
  var noticia = noticias[numeroElemento];
  muestraNoticia(noticia);
}


 
function siguiente(){
    
  var detener = document.getElementById('detener');
  clearInterval(intervalo);
  detener.value = 'Iniciar';
  detener.onclick = iniciar;
 
  if (numeroElemento == null) {
    numeroElemento = noticias.length - 1;
  }
 
  if (numeroElemento < noticias.length - 1) {
    numeroElemento++;
  }
 
  var noticia = noticias[numeroElemento];
  muestraNoticia(noticia);
}
 
 
