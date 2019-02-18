var correoLog;
var contraLog;

var correoReg;
var nombreReg;
var dniReg;
var apellidoReg;
var tlfReg;
var contrasenaReg;
var contrasena2Reg;

function cargar(){

    document.getElementById("boton_login").addEventListener("click", logeo, false);
    document.getElementById("boton_registro").addEventListener("click", registro, false);
  
    // alert("prueba -> " + correoReg + " " + contrasenaReg);
}

function logeo(){
    
        correoLog = document.getElementById("correoLog").value;
        contraLog = document.getElementById("contraLog").value;
        
        var peticion_http = new XMLHttpRequest();

        peticion_http.open('GET', 'logueo.php?correoLog='+correoLog+'&contraLog='+contraLog);
        peticion_http.send('null');
        
        peticion_http.onreadystatechange = function() {

             if(this.readyState == 4 && this.status == 200){  //con this en vez de peticion_http da menos fallos


                 document.getElementById("respuesta").innerHTML = peticion_http.responseText;
            } 
        } 

    }
 
 
    
function registro(){
        
        correoReg = document.getElementById("correoReg").value;
        nombreReg = document.getElementById("nombreReg").value;
        dniReg = document.getElementById("dniReg").value;
        apellidoReg = document.getElementById("apellidoReg").value;
        tlfReg = document.getElementById("tlfReg").value;
        contrasenaReg = document.getElementById("contrasenaReg").value;
        contrasena2Reg = document.getElementById("contrasena2Reg").value;
        
/*    if(nif(dniReg) && validarEmail(correoReg) && contrasenaReg==contrasena2Reg){*/
    
        
        var peticion_http = new XMLHttpRequest();

        peticion_http.open('GET', 'registro.php?correoReg='+correoReg+'&nombreReg='+nombreReg+'&dniReg='+dniReg+'&apellidoReg='+apellidoReg+'&tlfReg='+tlfReg+'&contrasenaReg='+contrasenaReg+'&contrasena2Reg='+contrasena2Reg);
        peticion_http.send('null');
        //console.log('registro.php?correoReg='+correoReg+'&nombreReg='+nombreReg+'&dniReg='+dniReg+'&apellidoReg='+apellidoReg+'&tlfReg='+tlfReg+'&contrasenaReg='+contrasenaReg+'&contrasena2Reg='+contrasena2Reg);
        peticion_http.onreadystatechange = function() {

             if(this.readyState == 4 && this.status == 200){  //con this en vez de peticion_http da menos fallos


                 document.getElementById("respuesta").innerHTML = peticion_http.responseText;
             } 
        }
        
/*    }else{
        
        document.getElementById("respuesta").innerHTML = "Datos Incorrectos";
        
    }*/

}
    
function nif(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni

  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       /*alert('Dni erroneo, la letra del NIF no se corresponde');*/
       return false;
     }else{
       /*alert('Dni correcto');*/
       return true;
     }
  }else{
     /*alert('Dni erroneo, formato no válido');*/
     return false;
   }
} 


function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   /*alert("La dirección de email " + valor + " es correcta.");*/
   return true;
  } else {
   /*alert("La dirección de email es incorrecta.");*/
   return false;
  }
}
    
  

document.addEventListener("DOMContentLoaded" , cargar , false);






