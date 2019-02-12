var renglones;
var cant;

function cargar(){
    renglones = document.getElementById("cantidad").value;
    document.getElementById("boton").addEventListener("click" , pintar);
    // renglones = prompt("Cuantos renglones quiere ?");
    // pintar(veces);
}

function pintar(cant){
    cant = renglones;
    var texto = "";
    for (let i=0 ; i<cant ; i++){
        texto = texto + "*";
        console.log(texto+"<br>")
        document.getElementById("lienzo").innerHTML += texto +"<br>";  // MUY IMPORTANTE el +=
        // document.write(texto + "<br>");
    }
}



window.addEventListener("load" , cargar);


