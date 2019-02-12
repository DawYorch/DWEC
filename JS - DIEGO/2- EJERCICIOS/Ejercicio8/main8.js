var frase;
var cuantos;
var final;

var long;
var diferencia;
var resultado;


function carga(){
        frase = prompt("Introduzca la frase a cortar:");
        cuantos = prompt("¿Cuantos caracteres desea cortar?");
        final = prompt("¿Desea que se corten por el final?");

        document.write(recorte(frase, cuantos, final));
}

function recorte(sentence, many, fin){
            long = sentence.length;

            if(fin == "si"){
                diferencia = long - many;
                resultado = sentence.substr(diferencia,long);
                // console.log(resultado);
            }else{
                resultado = sentence.substr(0, many);
            }
            return resultado;
}

window.addEventListener("load", carga);