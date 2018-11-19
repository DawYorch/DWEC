



function cargar() {
    document.getElementById("jsstyle").addEventListener("click", formato, false);  
      
}



function formato(){

    var texto = document.getElementById("text");
    texto.style.color = "green";
    texto.style.fontFamily = "arial";
    texto.style.fontSize = "30px";


}



document.addEventListener("DOMContentLoaded" , cargar , false);