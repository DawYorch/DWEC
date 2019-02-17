var turno = 0; // 0 = Player . 1 = CPU
var fin = false;
var casillas = new Array();
var aux = new Array();




function cargar() {
    document.getElementById("celda0").addEventListener("click", ponerFicha);
    document.getElementById("celda1").addEventListener("click", ponerFicha);
    document.getElementById("celda2").addEventListener("click", ponerFicha);
    document.getElementById("celda3").addEventListener("click", ponerFicha);
    document.getElementById("celda4").addEventListener("click", ponerFicha);
    document.getElementById("celda5").addEventListener("click", ponerFicha);
    document.getElementById("celda6").addEventListener("click", ponerFicha);
    document.getElementById("celda7").addEventListener("click", ponerFicha);
    document.getElementById("celda8").addEventListener("click", ponerFicha);
    document.getElementById("reiniciar").addEventListener("click", reiniciar);

    aux = document.getElementsByClassName("celda");

    for (var i = 0; i < aux.length ; i++) {
        casillas[i] = aux[i].id;
    }
}

function ponerFicha() {
    if (comprobarContenidoCelda(this)) {
        this.innerHTML = "X";
        eliminarCeldaArray(this);
        document.getElementById(this.id).removeEventListener("click", ponerFicha);       
    }
    colocarCPU();
}

function comprobarContenidoCelda(elemento) {
    if (elemento.innerHTML == "") {
        return true;
    } else {
        return false;
    }
}

function eliminarCeldaArray(elemento) { //celda1
    for(let cont = 0; cont < casillas.length; cont++){
        /* alert(elemento.id + "     " + casillas[cont]); */
        if(elemento.id == casillas[cont]){
            casillas.splice(casillas.indexOf(elemento.id),1);
        }
    } 
}

function comprobarVertical() {


    for (let index = 0; index < 3; index++) {

        var cel1 = document.getElementById("celda" + (0 + index)).innerHTML;
        var cel2 = document.getElementById("celda" + (3 + index)).innerHTML;
        var cel3 = document.getElementById("celda" + (6 + index)).innerHTML;


        if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
            //CPU
            return "cpu";
        }

        if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
            //PLAYER
            return "player";
        }

    }
}

function comprobarHorizontal() {


    for (let index = 0; index < 3; index++) {

        var cel1 = document.getElementById("celda" + (0 + index)).innerHTML;
        var cel2 = document.getElementById("celda" + (1 + index)).innerHTML;
        var cel3 = document.getElementById("celda" + (2 + index)).innerHTML;


        if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
            //CPU
            return "cpu";
        }

        if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
            //PLAYER
            return "player";
        }

    }
}

function comprobarDiagonalDeToIz() {
    var cel1 = document.getElementById("celda0").innerHTML;
    var cel2 = document.getElementById("celda4").innerHTML;
    var cel3 = document.getElementById("celda8").innerHTML;

    if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
        //CPU
        return "cpu";
    }

    if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
        //PLAYER
        return "player";
    }
}

function comprobarDiagonalIzToDer() {
    var cel1 = document.getElementById("celda6").innerHTML;
    var cel2 = document.getElementById("celda4").innerHTML;
    var cel3 = document.getElementById("celda2").innerHTML;


    if (cel1 == "O" && cel2 == "O" && cel3 == "O") {
        //CPU
        return "cpu";
    }

    if (cel1 == "X" && cel2 == "X" && cel3 == "X") {
        //PLAYER
        return "player";
    }
}

function ganador() {

    if (comprobarVertical() == "player" || comprobarHorizontal() == "player" || comprobarDiagonalIzToDer() == "player" || comprobarDiagonalDeToIz() == "player") {
        fin = true;
        return "Player";
    }
    if (comprobarVertical() == "cpu" || comprobarHorizontal() == "cpu" || comprobarDiagonalIzToDer() == "cpu" || comprobarDiagonalDeToIz() == "cpu") {
        fin = true;
        return "CPU";
    }

}

function reiniciar() {

    for (let index = 0; index < 9; index++) {
        document.getElementById("celda" + index).removeEventListener("click", ponerFicha);
    }

    if(ganador() != undefined){
        if (confirm("Ha ganado " + ganador() + " ¿Reiniciar el juego?")) {
            location.reload();
        }
    } else {
        if (confirm("No ha ganado nadie. ¿Reiniciar el juego?")) {
            location.reload();
        }
    }

}

function colocarCPU() {
    if(casillas.length > 0){
        var ale = Math.floor(Math.random() * casillas.length);
        var celda = document.getElementById(casillas[ale]);
        if (celda.innerHTML == "") {
            celda.innerHTML = "O";
        } 
        eliminarCeldaArray(celda);
    }

    ganador();
    if (fin) {
        reiniciar();
    }
    
}

 

window.addEventListener("load", cargar, false);