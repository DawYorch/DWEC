
function cargar() {

    document.getElementById("botonCuadrado").addEventListener("click", potencia, false);  
    /* document.getElementById("half-button").addEventListener("click", mitad, false);   
    document.getElementById("botonPorcentaje").addEventListener("click", porcentaje, false);  
    document.getElementById("botonArea").addEventListener("click", area, false);  */ 
  
    divSol = document.getElementById("Solucion");
    

}

var divSol;



function potencia(){



    var numero = document.getElementById("cuadrado").value;
    var operacion = numero*numero;

    resultado(operacion);
  

}

function resultado(dato){

    var renglon = document.createElement("p");

    divSol.appendChild(renglon);
    var texto = document.createTextNode(dato);
    
    renglon.appendChild(texto);
   /*  divSol.appendChild(salto); No hace falta salto xq conseguimos introducir un <p>*/


}





















document.addEventListener("DOMContentLoaded" , cargar , false);