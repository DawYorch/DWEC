var peticion = null;

function inicializa_xhr() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest(); 
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP"); 
  } 
}

function muestraProvincias() {
  if (peticion.readyState == 4) {
    if (peticion.status == 200) {
      var lista = document.getElementById("provincia");
      var documento_xml = peticion.responseXML;

      var provincias = documento_xml.getElementsByTagName("provincias")[0];
      var lasProvincias = provincias.getElementsByTagName("provincia");
      lista.options[0] = new Option("- selecciona -");
      
      // M�todo 1: Crear elementos Option() y a�adirlos a la lista
      for(i=0; i<lasProvincias.length; i++) {
        var codigo = lasProvincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
        var nombre = lasProvincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        lista.options[i+1] = new Option(nombre, codigo);
      }

      // M�todo 2: crear el c�digo HTML de <option value="">...</option> y utilizar el innerHTML de la lista
      
      /*
      var codigo_html = "";
      codigo_html += "<option>- selecciona -<\/option>";
      for(var i=0; i<lasProvincias.length; i++) {
        var codigo = lasProvincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
        var nombre = lasProvincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        codigo_html += "<option value=\""+codigo+"\">"+nombre+"<\/option>";  
      }
      
      // La separacion siguiente se tiene que hacer por este bug de microsoft:
      // http://support.microsoft.com/default.aspx?scid=kb;en-us;276228
      var esIE = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
      if(esIE) {
        document.getElementById("provincia").outerHTML = "<select id=\"provincia\">"+codigo_html+"</select>";
      }
      else {
        document.getElementById("provincia").innerHTML = codigo_html;    
      }
      */
    }
  }
}

function cargaMunicipios() {
  var lista = document.getElementById("provincia");
  var provincia = lista.options[lista.selectedIndex].value;
  if(!isNaN(provincia)) {
    peticion = inicializa_xhr();
    if (peticion) {
      peticion.onreadystatechange = muestraMunicipios;
      peticion.open("POST", "cargaMunicipiosXML.php?nocache=" + Math.random(), true);
      peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      peticion.send("provincia=" + provincia);
    }
  }
}

function muestraMunicipios() {
  if (peticion.readyState == 4) {
    if (peticion.status == 200) {
      var lista = document.getElementById("municipio");
      var documento_xml = peticion.responseXML;

      var municipios = documento_xml.getElementsByTagName("municipios")[0];
      var losMunicipios = municipios.getElementsByTagName("municipio");

      // Borrar elementos anteriores
      lista.options.length = 0;
      
      // Se utiliza el m�todo de crear elementos Option() y a�adirlos a la lista
      for(i=0; i<losMunicipios.length; i++) {
        var codigo = losMunicipios[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
        var nombre = losMunicipios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        lista.options[i] = new Option(nombre, codigo);
      }
    }
  }
}

window.onload = function() {
  peticion = inicializa_xhr();
  if(peticion) {
    peticion.onreadystatechange = muestraProvincias;
    peticion.open("GET", "cargaProvinciasXML.php?nocache="+Math.random(), true);
    peticion.send(null);
  }

  document.getElementById("provincia").onchange = cargaMunicipios;
}