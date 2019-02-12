
var texto;
var texto_aux;
var aux;

var Array_aux = [];

function cargar(){

    texto = prompt("Escribe la frase: ");

    document.write(camelTrophy(texto));
}

function camelTrophy(frase){
    texto_aux = texto.split(" ");
    Array_aux.push(texto_aux[0]); 
    
     for(let i=1 ; i<texto_aux.length ; i++ ){

         //console.log(texto_aux[i].charAt(0).toUpperCase());
         aux =texto_aux[i].charAt(0).toUpperCase();
         Array_aux.push(aux+texto_aux[i].slice(1));

     }
    //  return texto_aux.toString();
    return Array_aux.join(" ");
    
}

window.addEventListener("load",cargar);