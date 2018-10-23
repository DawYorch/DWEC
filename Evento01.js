function position(event){
    var x = event.clientX;
    var y = event.clientY;

    alert(x+" e "+y);
}

function hola(){


    alert("Jelou");
}

   
function cargar() {
    document.getElementById("div1").addEventListener("click", position, false);  
    document.getElementById("div2").addEventListener("click", hola, false);  
}

document.addEventListener("DOMContentLoaded" , cargar , false);


