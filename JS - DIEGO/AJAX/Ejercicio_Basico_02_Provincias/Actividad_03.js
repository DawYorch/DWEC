
function cargar(){

    document.getElementById("prov").addEventListener("change", mostrar, false);
    
    }
   
    function mostrar(){


        var provi = document.getElementById("prov").value;

        var peticion_http = new XMLHttpRequest();
        
        peticion_http.open('GET', 'Actividad_03.php?id='+provi);    
        peticion_http.send(null);

        peticion_http.onreadystatechange = function() {

             if(this.readyState == 4 && this.status == 200){  //con this en vez de peticion_http da menos fallos

                //document.getElementById("selectMuni").innerHTML = this.responseXML;
                                                                            //console.log(this.responseXML);
                var xml = this.responseXML;
                
                
                 // get users
                var pueblos = xml.getElementsByTagName("municipio");
                                                                        //console.log(pueblos);
                document.getElementById("muni").innerHTML="";
                
                var opt2 = document.createElement("option");
                var textNode2 = document.createTextNode("Elige municipio...");
                opt2.appendChild(textNode2);
                document.getElementById("muni").appendChild(opt2);
                
                for (var i = 0; i < pueblos.length; i++) {
                    
                    var pueblo = pueblos[i].firstChild.nodeValue;
                    //var idMunicipio = pueblos[i].getAttribute('id');
                    console.log(pueblo);
                    
                    var opt = document.createElement("option");
                    var textNode = document.createTextNode(pueblo);
                    opt.appendChild(textNode);
                    //opt.setAttribute("id",idMunicipio);
                                                                        //console.log(pueblo);
                                                                        //console.log(idMunicipio);
                    document.getElementById("muni").appendChild(opt);
                }  
                
                
                
                } 
            }       

    }

document.addEventListener("DOMContentLoaded" , cargar , false);