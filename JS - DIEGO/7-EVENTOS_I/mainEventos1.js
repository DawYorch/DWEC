var nombre;
var arrayNombre=[];

var numero;
var aux;
var letra;
var expresion_regular_dni;

var pass;
var repPass;

var mailCorrecto = false;
var dniCorrecto = false;
var passCorrecto = false;
var ipCorrecto = false;

var alerta = [];

function cargar(){

    document.getElementById("fnombre").addEventListener("blur", nombreBien);
    document.getElementById("fapellidos").addEventListener("blur", nombreBien);
    document.getElementById("fmail").addEventListener("blur", mailBien);
    document.getElementById("fdni").addEventListener("blur", dniBien);
    document.getElementById("fpassRepit").addEventListener("blur", comprobarPass);
    document.getElementById("fip").addEventListener("blur", comprobarIP);
    document.getElementById("final").addEventListener("click", comprobacionTotal);

}

//onblur="nombreBien(this)"  Así se pondría en la etiqueta input sin addeventListeners y en la funcion pondriamos parametro

function nombreBien(){

    nombre = this.value; //document.getElementById("fnombre").value  Antes puse esto, pero solo servía para un campo, así sirve para cualquiera,gracias al this.value
    nombre = nombre.toLowerCase();
    arrayNombre = nombre.split(" ");

    for(let i=0 ; i<arrayNombre.length ; i++){
        // console.log(arrayNombre[i][0]);
        // console.log(nombre);
        arrayNombre[i]=arrayNombre[i].replace(arrayNombre[i].charAt(0) , arrayNombre[i].charAt(0).toUpperCase());
    }

    nombre = arrayNombre.join(" ");
    //document.getElementById("fnombre").value = nombre;
    this.value = nombre;
}

function mailBien(){

    if (!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.value))) {
        document.getElementById("fmail").style.backgroundColor = 'red';
        document.getElementById("fmail").style.color = 'white';       
    } else {
        document.getElementById("fmail").style.color = 'green';
        mailCorrecto = true;
    }

}

function dniBien(){

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test((this.value)) == true) {
        numero = (this.value).substr(0, (this.value).length - 1);
        aux = (this.value).substr((this.value).length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != aux.toUpperCase()) {
            document.getElementById("fdni").style.backgroundColor = 'red';
            document.getElementById("fdni").style.color = 'white';
            
        } else {
            document.getElementById("fdni").style.color = 'green'; 
            dniCorrecto = true;
        }
    } else {
        document.getElementById("fdni").style.backgroundColor = 'red';
        document.getElementById("fdni").style.color = 'white';
    }
}

function comprobarPass(){

    pass = document.getElementById("fpass").value;
    repPass = document.getElementById("fpassRepit").value;
    if (pass!="" && pass==repPass){
        document.getElementById("fpass").style.backgroundColor = "green";
        document.getElementById("fpassRepit").style.backgroundColor = "green";
        passCorrecto = true;
    }else{
        document.getElementById("fpass").style.backgroundColor = "red";
        document.getElementById("fpassRepit").style.backgroundColor = "red";
        
    }
}

function comprobarIP(){

    if (!(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this.value))) {
        document.getElementById("fip").style.backgroundColor = 'red';      
    } else {
        document.getElementById("fip").style.backgroundColor = 'green';
        ipCorrecto = true;
    }
}

function comprobacionTotal(){
    if(mailCorrecto && dniCorrecto && passCorrecto && ipCorrecto){
        return alert("Su formulario se ha enviado correctamente");
        
    }else{
        var fallos = [];
        if(!mailCorrecto){
            fallos.push("mail");
        }
        if(!dniCorrecto){
            fallos.push("dni");
        }
        if(!passCorrecto){
            fallos.push("password");
        }
        if(!ipCorrecto){
            fallos.push("ip");
        }
         var fallo = fallos.join(" ");
        
        alert("Existen fallos en "+fallo)
    }
    console.log(mailCorrecto);
    console.log(dniCorrecto);
    console.log(passCorrecto);
    console.log(ipCorrecto);
}

window.addEventListener("load", cargar);