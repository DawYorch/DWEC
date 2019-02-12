var tamanyo;
var ArrayLocal= [];
var MAX = 0;
var elemento;


function cargar(){
    tamanyo = prompt("Introduzca el tamanyo del Array:");

    ArrayLocal.length = tamanyo;
    for (let i=0 ; i<tamanyo ; i++){
        elemento = prompt("Introduce un número para el Array:"); //Si aqui pongo var elemento no va bien.
        if (elemento > MAX){
            MAX = elemento;           
        }
        ArrayLocal.push(elemento);
        console.log("elemento "+elemento);
        console.log("MAX "+MAX);
    }
    alert("El elemento mayor de todos es: "+MAX);
}


window.addEventListener("load" , cargar);


/* OTRA SOLUCION

var cant = Number(prompt("Cuántos elementos tendrá el array?"));
varmax = 0;
var arr = newArray(cant);
        for (let i = 0; i < arr.length; i++) {
     //Cada vez que introducimos un número nuevo, hacemos la comprobación pertinente y lo guardamos como máximo si es el caso      
            let num = Number(prompt("Introduce un número: "));
                if (num > max) arr[i] = max = num;
                    else arr[i] = num; 
        }
        document.write("El número más alto del array es " + max); */